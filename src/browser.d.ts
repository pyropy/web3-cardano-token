type COSESign1 = {
  signature: string;
  key: string;
}

type Signer = (msg: string) => PromiseLike<COSESign1>;

export function sign(
  signer: Signer,
  expires_in?: string | number,
  body?: Object
): PromiseLike<string>;

export function verify(token: string): {
  address: string;
  body: Object;
};

declare const Web3Token: {
  sign: typeof sign;
  verify: typeof verify;
};

export default Web3Token;

