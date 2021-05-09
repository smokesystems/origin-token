require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKey = process.env.PRIVATE_KEY || '';
const apiKey = process.env.APIKEY || '';

const providerMainnet = new HDWalletProvider({"privateKeys": [privateKey],
                                              "chainId": 1,
                                              "providerOrUrl": 'wss://infura.io/ws/v3/' + apiKey,
                                              "addressIndex": 0
                                              });

const providerKovan = new HDWalletProvider({"privateKeys": [privateKey],
                                            "chainId": 42,
                                            "providerOrUrl": 'wss://kovan.infura.io/ws/v3/' + apiKey,
                                            "addressIndex": 0
                                            });

const providerBSC = new HDWalletProvider({"privateKeys": [privateKey],
                                          "chainId": 56,
                                          "providerOrUrl": 'https://bsc-dataseed1.defibit.io/',
                                          "addressIndex": 0
                                          });

const providerBSCtest = new HDWalletProvider({"privateKeys": [privateKey],
                                              "chainId": 97,
                                              "providerOrUrl": 'https://data-seed-prebsc-1-s1.binance.org:8545',
                                              "addressIndex": 0
                                              });

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            from: "0xB14e651395E7E1330767F9efFf04868865cB6Ff0",
            // gas: 12487794, // web3.eth.getBlock("pending").gasLimit
            network_id: "*"
        },
        mainnet: {
            network_id: 1,
            provider: providerMainnet,
            gas: 12487794,
            confirmations: 2
        },
        kovan: {
            network_id: 42,
            provider: providerKovan,
            gas: 12487794,
            confirmations: 2
        },
        bsc: {
            network_id: 56,
            provider: providerBSC,
            gas: 2887794,
            confirmations: 2
        },
        bsctest: {
            network_id: 97,
            provider: providerBSCtest,
            gas: 2887794,
            confirmations: 2
        }
    },
    compilers: {
        solc: {
            version: "0.8.0"
        }
    }
};
