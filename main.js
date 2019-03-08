const {Blockchain, Transaction} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('30cc13d0cf797d8b083e3e946288fbe3cd2ad6486d3c7e572d0c1321a66720d0');
const myWalletAddress = myKey.getPublic('hex');


let Bakowcoin = new Blockchain();

Bakowcoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
Bakowcoin.addTransaction(tx1);



console.log('\n Starting the miner...');
Bakowcoin.minePendingTransactions(myWalletAddress);


console.log('\n Balance of Bob is ', Bakowcoin.getBalanceOfAddress(myWalletAddress));

//console.log(Bakowcoin);

// console.log('Mining block 1...');
// Bakowcoin.addBlock(new Block(1, '03/07/2018', { amount: 4}));

// console.log('Mining block 2...');
// Bakowcoin.addBlock(new Block(1, '03/07/2018', { amount: 10}));

// console.log(JSON.stringify(Bakowcoin));
// console.log('Is Blockchain Valid ' + Bakowcoin.isChainValid());
    
// Bakowcoin.chain[1].data = { amount: 100};
// Bakowcoin.chain[1].hash = Bakowcoin.chain[1].calculateHash();
// console.log('Is Blockchain Valid ' + Bakowcoin.isChainValid());