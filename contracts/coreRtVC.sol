//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract coreRtVC
{
    uint sysStatus;
    address owner;
    bool status=true;
    string[] partyNames;
    mapping (string => uint) voteCount;

    constructor()
    {
    
        sysStatus=0;
       owner=  msg.sender;
    }
    
    function sysStatusCheck() public view returns(uint)
    {
        return sysStatus;
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
        uint totalVotes = 0;
        for (uint i = 0; i < partyNames.length; i++) {
            totalVotes += voteCount[partyNames[i]];
        }
        return totalVotes;
    }
    
}