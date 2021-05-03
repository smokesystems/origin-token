require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require('@truffle/hdwallet-provider');

const kovanPrivateKey = process.env.TEST_PRIVATE_KEY || '';
const apiKey = process.env.TEST_APIKEY || '';

const costonPrivateKey = process.env.COSTON_TEST_PRIVATE_KEY || '';

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            from: "0xB14e651395E7E1330767F9efFf04868865cB6Ff0",
            // gas: 12487794, // web3.eth.getBlock("pending").gasLimit
            network_id: "*"
        },
        kovan: {
            network_id: 42,
            provider: new HDWalletProvider([kovanPrivateKey], 'https://kovan.infura.io/v3/' + apiKey),
            gas: 12487794
        }
    },
    compilers: {
        solc: {
            version: "0.8.0"
        }
    }
};
