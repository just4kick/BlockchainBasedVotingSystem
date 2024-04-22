
async function main(){
    let superman;
    let batman;
    superman = await ethers.getContractFactory("coreRtVC");
    batman = await superman.deploy();  
    console.log(batman)
    }
    
    main().then(()=>process.exit(0)).catch((e)=>
    {
        console.error(e);
        process.exit(0);
    })