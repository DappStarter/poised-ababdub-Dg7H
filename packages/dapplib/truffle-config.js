require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea kitten fresh skull drift radar maze clump good prison metal gauge'; 
let testAccounts = [
"0x5d2aed08c346968b87f68d4f27dc2cd8489ba6690efd5da37eac96c4ff7eddc2",
"0x35e78f836ac0376d9662af80e1ca5aba0c61c9c3e2cd4607a3a8f95512b6ac43",
"0x66c0a9a5414f50e19c79d18877bcc7901816ece754c5976ff1742571bb7ba5a1",
"0xb7375b97d559d15215a46affe568b19b7080c19caa90089bc4edbfc95c0e7348",
"0x6361d786e13ea4f95321fc89267cde0eadf7a479551079d292dbb33722f19e3d",
"0x822c4c5933a76e2f78b9f938a545e0d60747a5e0adc36647daf492c165a4a155",
"0x61631d70690fb6794583de75dbd34279ed5567d22a413ade383d0beb317a912a",
"0x0ff8f2527a025e67de379c773fdecbd1224cd52aff72e7518d5c7fa487b38c4d",
"0x894d537cb7a2d76f29e6e6610495ae799a2f7b1c4c9cf70fd071874a526c11d1",
"0xa5379557ae25eedc5255d83acae75a5def8558d1acdf016326bd67d73b950114"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


