require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "1604caE21705D0198c76fcf4974767cF66015E46";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
