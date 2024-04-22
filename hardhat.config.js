require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:
  {
    SepoliaETH:
    {
      url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
