const fs = require("fs");
const { ethers } = require("ethers");
require("dotenv").config();


const rawABI = fs.readFileSync("/home/sumit/experiment/protoproject/BlockchainBasedVotingSystem/artifacts/contracts/coreRtVC.sol/coreRtVC.json");
const contractABI = JSON.parse(rawABI)['abi'];


const contractAddress = "0x8D64a4448f1d373D0B6850372488866F911f7567";

const provider = ethers.getDefaultProvider("https://eth-sepolia.g.alchemy.com/v2/Bs800PjH_V4KD4FxIs2g28IE-6eN9woO");

const privateKey = "a9b5e7627bf56e05f7dfa0bba0d1075c0891e6e3dba60de12f65c21e12277aa9";

const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(contractAddress, contractABI, wallet);


// console.log(contract)

//     async function c()
//     {
//         // const data= await contract.getVoteCount('bjp');
//      console.log( await contract.sysStatusCheck());
//     }

// c()


async function cfsysStatusCheck()
{
    const data= await contract.sysStatusCheck();
    console.log( data);
}


async function cfcastVote(_partyName)
{
    const data= await contract.castVote(_partyName);
    return data;
}


async function cfvoteCompleted()
{
    const data= await contract.voteCompleted();
    return data;
}


async function cfgetVoteCount(_partyName)
{
    const data= await contract.getVoteCount(_partyName);
    return data;
}


async function cfgetAllVoteCount()
{
    const data = await contract.getAllVoteCount();
    return data;
}


module.exports.hulk=
{
    cfsysStatusCheck:cfsysStatusCheck,
    cfcastVote:cfcastVote,
    cfvoteCompleted:cfvoteCompleted,
    cfgetVoteCount:cfgetVoteCount,
    cfgetAllVoteCount:cfgetAllVoteCount




}

