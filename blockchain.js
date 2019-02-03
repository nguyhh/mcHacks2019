const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, food, latitude, longitude, centerName, centerType, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.food = food;
        this.latittude = latitude;
        this.longitude = longitude;
        this.centerName  = centerName;
        this.centerType = centerType;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.timestamp + this.food + this.latittude + this.longitude + this.centerName + this.centerType + this.previousHash).toString();
    }
}

class Blockchain{
    constructor() {
        //Creates new chain with genesis block
        this.chain = [this.genesisBlock()];
    }

    genesisBlock() {
        return new Block(0, "02/03/2019", 0, 0, 0, 0, 0 ,0);
    }

    lastBlock() {
        return this.chain[this.chain.length - 1]
    }

    //Adds new block and pushes it
    addBlock(newBlock){
        newBlock.previousHash = this.lastBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

console.log("> Blockchain compiled.")