function Blockchain () {
    this.chain = [];
    this.pendingTransactions = []; 
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
        transactions: this.pendingTranscations,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTrasnsaction = function (amount, sender, receipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: receipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

module.exports = Blockchain;