const { expect } = require("chai");

var contractAddress = "";

describe("Deploy the Bsider to base network", function () {
  it("Deploy", async function () {
    const bsider = await ethers.deployContract("bsider");
    contractAddress = bsider.target;
    console.log(contractAddress);
  });
});
 