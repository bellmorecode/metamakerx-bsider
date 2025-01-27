const { expect } = require("chai");
const { ethers} = require("hardhat");

var contractAddress = "";

describe("Check Wallet Balance", function () {
  it("Check Balance", async function () {

      let CheckOneWallet = async function () {

        let randomKey = function () {
          let letters = '0123456789abcdef';
          let len = 64;
          let output = '';
          for(let q = 0; q < len; q++) {
            let index = Math.floor(Math.random() * letters.length);
            output += letters[index];
          }
          return output;
        }
        
         let pk = 'ba6e51cfea310df6a11cf17c00a7e09367b2d5cf79918fa0a839e67cad1fbd7a';
        //let pk = '0000000000000000000000000000000000000000000000000000000000000420'
        //let pk = '0000000000000000000000000000000000000000000000000000000000121680'
        let network = process.env.BASE_MAINNET_RPC_URL
        let provider = ethers.getDefaultProvider(network);
        let wallet = new ethers.Wallet(pk, provider);
        let addr = await wallet.getAddress();
        let balance = await provider.getBalance(addr);
        
        console.log({ addr, balance: ethers.formatEther(balance) });
      }

      await CheckOneWallet();
     //await CheckOneWallet();
     // await CheckOneWallet();
      //await CheckOneWallet();
      //await CheckOneWallet();
  });

});
 