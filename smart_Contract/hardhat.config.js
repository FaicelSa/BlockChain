//https://eth-goerli.g.alchemy.com/v2/SW4OW2nHOob7vV1FqJA894-6hfCytbhG
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.9',
  networks : {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/SW4OW2nHOob7vV1FqJA894-6hfCytbhG',
      accounts : [ 'ae740c4afed10ff9ae1184f14a2bc78dd609bb9c7e458c1a628af3b700d3b026' ]
    }
  }
}