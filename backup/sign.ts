import Base64 from "base-64";
import { timeSpan } from "./timespan.js";

export type COSESign1 = {
  signature: string;
  key: string;
}

export const sign = async (signer: (msg: string) => Promise<COSESign1>, expires_in: string = "1d", body: any = {}) => {
  const expires_in_date = timeSpan(expires_in);

  validateInput(body);

  const data = {
    "Web3-Token-Version": 1,
    "Expire-Date": expires_in_date,
    ...body,
  };

  const msg = buildMessage(data);

  let COSESign1Message = await signer(msg);

  const token = Base64.encode(
    JSON.stringify({
      ...COSESign1Message,
      body: msg,
    })
  );

  return token;
};

const validateInput = (body: any) => {
  for (const key in body) {
    const field = body[key];

    if (key === "Expire-Date") {
      throw new Error('Please do not rewrite "Expire-Date" field');
    }

    if (key === "Web3-Token-Version") {
      throw new Error('Please do not rewrite "Web3-Token-Version" field');
    }

    if (typeof field !== "string") {
      throw new Error("Body can only contain string values");
    }
  }
};

const buildMessage = (data: any) => {
  const message = [];
  for (const key in data) {
    message.push(`${key}: ${data[key]}`);
  }
  return message.join("\n");
};
