//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract coreRtVC
{
    address owner;
    bool status=true;
    string[] partyNames;
    mapping (string => uint) voteCount;

    constructor()
    {
    
       owner=  msg.sender;
    }
    
    function sysStatusCheck() public view returns(bool)
    {
        return status;
    }

    function castVote(string memory _partyName) public 
    {   
        require(owner==msg.sender);
        require(status == true);
        partyNames.push(_partyName);
        voteCount[_partyName] = voteCount[_partyName] + 1;
    }

    function voteCompleted() public 
    {
        require(owner==msg.sender);
        status=false;
    }

    function getVoteCount(string memory _partyName) public view returns(string memory,uint){
        require(status == false);
        return(_partyName,voteCount[_partyName]);
    }

    function getAllVoteCount() public view returns(uint ){
        require(status == false);
        uint totalVotes = partyNames.length;
        // for (uint i = 0; i < partyNames.length; i++) {
        //     totalVotes =totalVotes + voteCount[partyNames[i]];
        // }
        return totalVotes;
    }
    
}