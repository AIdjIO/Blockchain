const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const BlockChain = require('./blockchain');
const uuid = require('uuid');

const nodeAddress = uuid.v1().split('-').join('');

const bitcoin = new BlockChain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// get entire blcokchain
app.get('/blockchain', function (req, res) {
   res.send(bitcoin)
});

// create a new transaction
app.post('/transaction', function(req,res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `Transaction will be added in block ${blockIndex}.`});
});

// mine a block
app.get('/mine', function(req,res){
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    bitcoin.createNewTransaction(12.5," ", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
        note:"New block mined successfully",
        block: newBlock
    });

});

app.listen(3000, function(){
    console.log('Listening on port 3000...');
});