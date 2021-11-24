type Signer = (msg: string) => PromiseLike<string>;

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

declare module "web3-cardano-token/dist/browser" {
  export const Web3Token: {
    sign: typeof sign;
    verify: typeof verify;
  };
}
declare module "web3-cardano-token/dist/node" {
  export const Web3Token: {
    sign: typeof sign;
    verify: typeof verify;
  };
}
