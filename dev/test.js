const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2134,'WERTG$TGER','TUIYOKJFG1234');

// bitcoin.createNewTrasnsaction(100, 'ALEX123dET4RTETE','JEN245WERTWERT');

// bitcoin.createNewBlock(122,'ykfgvds','fghkj');

// bitcoin.createNewTrasnsaction(50, 'ALEX123dET4RTETE','JEN245WERTWERT');
// bitcoin.createNewTrasnsaction(300, 'ALEX123dET4RTETE','JEN245WERTWERT');
// bitcoin.createNewTrasnsaction(2000, 'ALEX123dET4RTETE','JEN245WERTWERT');

// bitcoin.createNewBlock(987564061,'YUIOKGFDGS3245E','VBNMDFH567GHKJ');

const previousBlockHash = 'DFG34HGFH5768JTGHJ';
const currentBlockData = [
    { amount:10,
    sender: 'SDFG2345SDFG2345WR',
    recipient:'WERT3245DHJYY5467'
    },
    { amount:30,
        sender: 'SDFG2SDFG45SDFG2345WR',
        recipient:'WERT32£456DHJYY5467'
    },
    { amount:200,
      sender: 'SDFGDFG345SDFG2345WR',
      recipient:'WERDFG34563eEFTYY5467'
    }
];

// const nonce = 100;

// newHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

newHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, 22182);

console.log(newHash)
// console.log(bitcoin);