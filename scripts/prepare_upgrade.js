// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x81d9C1183e0ab155C9551B0181628D41bA2dB299';
   
    const BoxV2 = await ethers.getContractFactory("ERCToken2");
    console.log("Preparing upgrade...");
    const boxV2Address = await  BoxV2.deploy();
    console.log("BoxV2 at:", boxV2Address.address);

  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });