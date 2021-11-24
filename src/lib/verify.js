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
    var { body, signature } = JSON.parse(base64_decoded);
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

  const publicKey = Loader.Cardano.PublicKey.from_bytes(headermap.key_id());

  if (!verifyAddress(address, publicKey)) {
    throw new Error("Address verification failed");
  }

  const parsed_body = parseAsHeaders(body);

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

const verifyAddress = (checkAddress, publicKey) => {
  console.log("publicKey", publicKey.hash());
  // if (this.headers.address.to_bech32() !== checkAddress.to_bech32()) {
  //   console.log("FASLE1");
  //   return false;
  // }
  // check if BaseAddress
  try {
    const baseAddress = Loader.Cardano.BaseAddress.from_address(checkAddress);
    //reconstruct address
    const paymentKeyHash = publicKey.hash();
    const stakeKeyHash = baseAddress.stake_cred().to_keyhash();
    const reconstructedAddress = Loader.Cardano.BaseAddress.new(
      checkAddress.network_id(),
      Loader.Cardano.StakeCredential.from_keyhash(paymentKeyHash),
      Loader.Cardano.StakeCredential.from_keyhash(stakeKeyHash)
    );

    return (
      checkAddress.to_bech32() === reconstructedAddress.to_address().to_bech32()
    );
  } catch (e) {
    console.error(e);
  }

  try {
    const stakeKeyHash = address.hash();
    const reconstructedAddress = RewardAddress.new(
      checkAddress.network_id(),
      StakeCredential.from_keyhash(stakeKeyHash)
    );
    return (
      checkAddress.to_bech32() === reconstructedAddress.to_address().to_bech32()
    );
  } catch (e) {}
  return false;
};
