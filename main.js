const {Blockchain, Transaction} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('30cc13d0cf797d8b083e3e946288fbe3cd2ad6486d3c7e572d0c1321a66720d0');
const myWalletAddress = myKey.getPublic('hex');


let Bakowcoin = new Blockchain();

Bakowcoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'public key of destination wallet goes here', 30);
tx1.signTransaction(myKey);
Bakowcoin.addTransaction(tx1);



console.log('\n Starting the miner...');
Bakowcoin.minePendingTransactions(myWalletAddress);


console.log('\n Balance of Taylor is ', Bakowcoin.getBalanceOfAddress(myWalletAddress));

console.log(JSON.stringify(Bakowcoin));
console.log('Is Blockchain Valid ' + Bakowcoin.isChainValid());
    
// Demonstrate how blockchain cannot be tampered with

// Bakowcoin.chain[1].data = { amount: 100};
// Bakowcoin.chain[1].hash = Bakowcoin.chain[1].calculateHash();
// console.log('Is Blockchain Valid ' + Bakowcoin.isChainValid());