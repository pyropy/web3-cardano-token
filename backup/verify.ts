import Base64 from "base-64";
import parseAsHeaders from "parse-headers";
import { Buffer } from "buffer";
import Loader from "./loader.js";

import type {
  Address,
  PublicKey,
} from "@emurgo/cardano-serialization-lib-browser";
import { COSESign1 } from "./sign.js";

type DataType = {
  body: string;
} & COSESign1;

/**
 *
 * @param {string} token Signed Web3 Token
 * @returns {boolean}
 */
export const verify = async (token: string) => {
  if (!token || !token.length) {
    throw new Error("Token required.");
  }

  try {
    var base64_decoded = Base64.decode(token);
  } catch (error) {
    throw new Error("Token malformed (must be base64 encoded)");
  }

  if (!base64_decoded || !base64_decoded.length) {
    throw new Error("Token malformed (must be base64 encoded)");
  }

  let msg: DataType;
  try {
    msg = JSON.parse(base64_decoded);
  } catch (error) {
    throw new Error("Token malformed (unparsable JSON)");
  }

  const { signature: signedRaw, key } = msg;

  if (!signedRaw || !signedRaw.length) {
    throw new Error("Token malformed (empty signature)");
  }

  await Loader.load();

  const message = Loader.Message.COSESign1.from_bytes(
    Buffer.from(signedRaw, "hex")
  );
  const headers = message.headers().protected().deserialized_headers();

  const address = Loader.Cardano.Address.from_bytes(
    headers.header(Loader.Message.Label.new_text("address")).as_bytes()
  );

  const coseKey = Loader.Message.COSEKey.from_bytes(Buffer.from(key, "hex"));

  const publicKey = Loader.Cardano.PublicKey.from_bytes(
    coseKey
      .header(
        Loader.Message.Label.new_int(
          Loader.Message.Int.new_negative(Loader.Message.BigNum.from_str("2"))
        )
      )
      .as_bytes()
  );

  // const algorithmId = headers.algorithm_id().as_int().as_i32();
  const signature = Loader.Cardano.Ed25519Signature.from_bytes(
    message.signature()
  );

  const data = message.signed_data().to_bytes();

  const body = Buffer.from(data).toString("utf-8");

  // Ensure that the Public Key matches up to the Address in the Signed data.
  const verifyAddressResponse = verifyAddress(address, publicKey);

  if (!verifyAddressResponse.verified) {
    throw new Error(
      `Address verification failed: (${verifyAddressResponse.message} (${verifyAddressResponse.code}))`
    );
  }

  if (!publicKey.verify(data, signature)) {
    throw new Error(
      `Message integrity check failed (has the message been tampered with?)`
    );
  }

  const parsed_body = parseAsHeaders(body);

  if (
    parsed_body["expire-date"] &&
    new Date(parsed_body["expire-date"] as string) < new Date()
  ) {
    throw new Error("Token expired");
  }

  return {
    address: address.to_bech32(),
    network: address.network_id(),
    body: parsed_body,
  };
};

function verifyAddress(checkAddress: Address, publicKey: PublicKey) {
  console.log("In Verify Address");

  const baseAddress = Loader.Cardano.BaseAddress.from_address(checkAddress);

  try {
    //reconstruct address
    const paymentKeyHash = publicKey.hash();
    const stakeKeyHash = baseAddress.stake_cred().to_keyhash();
    const reconstructedAddress = Loader.Cardano.BaseAddress.new(
      checkAddress.network_id(),
      Loader.Cardano.StakeCredential.from_keyhash(paymentKeyHash),
      Loader.Cardano.StakeCredential.from_keyhash(stakeKeyHash)
    );

    if (
      checkAddress.to_bech32() !== reconstructedAddress.to_address().to_bech32()
    ) {
      return {
        verified: false,
        code: 1,
        message:
          "Check address does not match Reconstructed Address (Public Key is not the correct key for this Address)",
      };
    }

    return {
      verified: true,
    };
    
  } catch (e) {
    return {
      verified: false,
      code: 3,
      message: e.message,
    };
  }
}
