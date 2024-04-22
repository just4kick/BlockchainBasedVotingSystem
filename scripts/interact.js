const fs = require("fs");
const { ethers } = require("ethers");
require("dotenv").config();


const rawABI = fs.readFileSync("/home/sumit/expriment/protoEVM/artifacts/contracts/coreRtVC.sol/coreRtVC.json");
const contractABI = JSON.parse(rawABI)['abi'];


const contractAddress = "0xe41c5D854eE82d41b48B92D400351BCB77c83698";

const provider = ethers.getDefaultProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`);

const privateKey = process.env.PRIVATE_KEY;

const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(contractAddress, contractABI, wallet);


// console.log(contract)

async function cfsysStatusCheck()
{
    const data= await contract.sysStatusCheck();
    return data;
}
module.exports= cfsysStatusCheck();

async function cfcastVote(_partyName)
{
    const data= await contract.castVote(_partyName);
    return data;
}
module.exports= cfcastVote();


async function cfvoteCompleted()
{
    const data= await contract.voteCompleted();
    return data;
}
module.exports = cfvoteCompleted();

async function cfgetVoteCount(_partyName)
{
    const data= await contract.getVoteCount(_partyName);
    return data;
}
module.exports = cfgetVoteCount();

async function cfgetAllVoteCount()
{
    const data = await contract.getAllVoteCount();
    return data;
}
module.exports = cfgetAllVoteCount();