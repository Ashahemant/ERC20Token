// hardhat.config.js
const { projectId, mnemonic ,privatekey,APIKEY} = require('./secrets.json');
//require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
//require('@openzeppelin/contracts-ethereum-package');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  networks: {

    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      gasPrice: 20000000000,
     accounts: [privatekey]
    },
  },
    etherscan: {
     
      apiKey: APIKEY,
    }
  
   
  
};