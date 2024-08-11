const hre = require("hardhat");


async function main() {
    const factory = await hre.ethers.getContractFactory("NPublication");
    
    const constructorArgs = [
      "0x8Ef405fBD1Cb75feBB2635Ec5A1b1b3d89A65EC6",
      "bafkreibx6yfszyvj5xdsenhrsbwe5jgtgiv2bkgr556466g2nepxtirod4",
      "bafybeiamh4td3vg25zlgcw7pybudtxbmkidsqx7lbv5zvodfa4kjsn66dq"
    ];
    const contract = await factory.deploy(...constructorArgs);

   setTimeout( async () => {
      await hre.run("verify:verify", {
        address: contract.target,
        constructorArguments: constructorArgs,
      });
    },10000);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });