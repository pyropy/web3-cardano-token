# Web3 Cardano Token

Web3 Cardano Token is a new way to authenticate users. A replacement for JWT in hybrid dApps.
---

## Install

```bash
$ npm i web3-cardano-token
```
---

## Example usage (Client side)

Using [Nami Wallet](https://namiwallet.io/) extension:

```js
import Web3Token from 'web3-cardano-token/dist/browser';

// Connection to Nami wallet
const cardano = window.cardano;
await cardano.enable();

// getting address from which we will sign message
const address = (await cardano.getUsedAddresses())[0];

// generating a token with 1 day of expiration time
const token = await Web3Token.sign(msg => cardano.signData(your_address, toHex(msg)), '1d');

// attaching token to authorization header ... for example
```
---

## Example usage (Server side)
```js
const Web3Token = require('web3-cardano-token/dist/node');

// getting token from authorization header ... for example
const token = req.headers['Authorization']

const { address, body } = await Web3Token.verify(token);

// now you can find that user by his address
// (better to do it case insensitive)
req.user = await User.findOne({ address });
```

---
## API

Argument | Name | Description | Required | Example
--- | --- | --- | --- | ---
1 | `signer` | A function that returns a promise with signature string eg: await namiWallet.signData(`address`, `data`) | `required` | `(body) => await namiWallet.signData(addr1e2..0c, body)`
2 | `expire_in` | A string that represents a time span ([see ms module](https://github.com/vercel/ms)) or a number of milliseconds | `optional` (default: `1d`) | `1 day`
3 | `body` | An object that will be appended to a signature's body. Can only contain string values. Can be used for some custom data. | `optional` | `{ 'Custom-data': 'some custom data' }`

---
## License
Web3 Cardano Token is released under the MIT license. © 2021 Srdjan Stankovic


## Note:

This package is based upon [web3-token](https://github.com/bytesbay/web3-token) package and uses the same API.
