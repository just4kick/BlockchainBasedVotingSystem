require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:
  {
    SepoliaETH:
    {
      url:"https://eth-sepolia.g.alchemy.com/v2/Bs800PjH_V4KD4FxIs2g28IE-6eN9woO",
      accounts:["a9b5e7627bf56e05f7dfa0bba0d1075c0891e6e3dba60de12f65c21e12277aa9"]
    }
  }
};
