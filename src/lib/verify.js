import Base64 from "base-64";
import parseAsHeaders from "parse-headers";
import { Buffer } from "buffer";
import Loader from "./loader.js";
/**
 *
 * @param {string} token Signed Web3 Token
 * @returns {boolean}
 */
export const verify = async (token) => {
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

  try {
    var { body, signature, key } = JSON.parse(base64_decoded);
  } catch (error) {
    throw new Error("Token malformed (unparsable JSON)");
  }

  if (!body || !body.length) {
    throw new Error("Token malformed (empty message)");
  }

  if (!signature || !signature.length) {
    throw new Error("Token malformed (empty signature)");
  }

  await Loader.load();

  const message = Loader.Message.COSESign1.from_bytes(
    Buffer.from(Buffer.from(signature, "hex"), "hex")
  );

  const headermap = message.headers().protected().deserialized_headers();

  const address = Loader.Cardano.Address.from_bytes(
    headermap.header(Loader.Message.Label.new_text("address")).as_bytes()
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

  const verifyAddressResponse = verifyAddress(address, publicKey);

  if (!verifyAddressResponse.verified) {
    throw new Error(
      `Address verification failed: (${verifyAddressResponse.message} (${verifyAddressResponse.code}))`
    );
  }

  const data = message.signed_data().to_bytes();
  const body_from_token = Buffer.from(data).toString("utf-8");

  const ed25519Sig = Loader.Cardano.Ed25519Signature.from_bytes(message.signature())

  if (!publicKey.verify(data, ed25519Sig)) {
    throw new Error(
      `Message integrity check failed (has the message been tampered with?)`
    );
  }

  const parsed_body = parseAsHeaders(body_from_token);

  if (
    parsed_body["expire-date"] &&
    new Date(parsed_body["expire-date"]) < new Date()
  ) {
    throw new Error("Token expired");
  }

  return {
    address: address.to_bech32(),
    network: address.network_id(),
    body: parsed_body,
  };
};

/**

 * Validate the Address provided. To do this we take the Address (or Base Address)
 * and compare it to an address (BaseAddress or RewardAddress) reconstructed from the
 * publicKey.
 * @param {Loader.Cardano.Address} checkAddress 
 * @param {Loader.Cardano.PublicKey} publicKey 
 * @returns {{status: bool, msg?: string, code?: number}}
 */
const verifyAddress = (checkAddress, publicKey) => {
  let errorMsg = "";
  try {
    //reconstruct address
    const paymentKeyHash = publicKey.hash();
    const stakeKeyHash = baseAddress.stake_cred().to_keyhash();
    const reconstructedAddress = Loader.Cardano.BaseAddress.new(
      checkAddress.network_id(),
      Loader.Cardano.StakeCredential.from_keyhash(paymentKeyHash),
      Loader.Cardano.StakeCredential.from_keyhash(stakeKeyHash)
    );

    const status = checkAddress.to_bech32() === reconstructedAddress.to_address().to_bech32();
    return {
      status,
      msg: status ? "Valid Address" : "Base Address does not validate to Reconstructed address",
      code: 1
    };
  } catch (e) {
    errorMsg += ` ${e.message}`
  }

  try {
    const stakeKeyHash = checkAddress.hash();
    const reconstructedAddress = Loader.Cardano.RewardAddress.new(
      checkAddress.network_id(),
      StakeCredential.from_keyhash(stakeKeyHash)
    );
    
    const status = checkAddress.to_bech32() === reconstructedAddress.to_address().to_bech32();
    return {
      status,
      msg: status ? "Valid Address" : "Address does not validate to Reconstructed address",
      code: 1
    };

  } catch (e) {
    errorMsg += ` ${e.message}`
  }

  return {
    status: false,
    msg: `Error: ${errorMsg}`,
    code: 3
  };
};
