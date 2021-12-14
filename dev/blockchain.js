const sha256 = require('sha256');

function Blockchain () {
    this.chain = [];
    this.pendingTransactions = []; 

    this.createNewBlock(100,'0','0');
}

// class BlockChain {
//     constructor(){
//         this.chain = [];
//         this.newTransactions = [];
//     }

//     //...
// }

Blockchain.prototype.createNewBlock  = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function (amount, sender, receipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: receipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    while (hash.substring(0,4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }

    return nonce;
}

module.exports = Blockchain;