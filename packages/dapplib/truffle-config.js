require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone street rebel sad miss install define army giggle'; 
let testAccounts = [
"0xbbf76fe91d1a0034885df3763288a29c2a88df80c45f0983bf577f09812fb157",
"0x2f00b46e769fd21c6b480f1c4a8e0be18d7d7a18413b328ad039216e0f73cb24",
"0x63bf4a75691ddb6ec1d685005c9c2d1c986c26bef569d3a06d6581a74d15dcab",
"0x97a8599c73c81786f37454aef00169d2379a37fb97dfa4b4150229f511274a51",
"0xb8b6fce0ccf3fbc1cde4fe8bebd9b5963852f8aeba0c422eb154524008a6a391",
"0x32bf138ab91ae74255b02c6611636eac2a6f31e206923425e8ad3169c5df8c10",
"0xab45fbf5d33e9b644782866a9884b27cde368e9062a574473402ee788b72f10e",
"0xd393553e038e62f837d6026edce4d32bda2f50195001201794ca8ffa4c411bcf",
"0x4928510d4d840e939c57e871545545961db2a7711aa3f5835d3a179535f0562b",
"0x9a28bf55dba8c702668c75353865e630fc8d412e8ae67117069e76684f7d7773"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
