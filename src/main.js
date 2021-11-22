import Web3Token from './lib';
import toHex from 'to-hex';

const test = async () => {

  const cardano = window.cardano;

  // Connection to Nami wallet
  await cardano.enable();

  // getting address from which we will sign message
  const your_address = (await cardano.getUsedAddresses())[0];

  // getting a token
  const token = await Web3Token.sign(msg => cardano.signData(your_address, toHex(msg)), '1d');

  console.log('TOKEN CREATED', token);

  const { address, body } = await Web3Token.verify(token);

  console.log('ADDRESS RECOVERED', address, body);
}

document.querySelector('#btn').addEventListener('click', () => test())
