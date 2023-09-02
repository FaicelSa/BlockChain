const  main = async()=> {
 

  const Authentification = await hre.ethers.getContractFactory("Authentification");
  const authentification = await Authentification.deploy({gasLimit:3000000});

  await authentification.deployed();

  console.log(
    `Authentification deployed to ${authentification.address}`
  );
}

const runMain =  async () =>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
runMain();