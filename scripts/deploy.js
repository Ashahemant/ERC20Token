// scripts/deploy.js
async function main() {
    const ERC = await ethers.getContractFactory("ERC20Basic");
    console.log("Deploying Box...");
   // const ERCToken1=await ERC.deploy(100);
   const token = await upgrades.deployProxy(ERC, [100],{  unsafeAllowCustomTypes: true });
    console.log("Box deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });