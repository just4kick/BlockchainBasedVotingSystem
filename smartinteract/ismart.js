const icontract=require("../scripts/interact")


// icontract.hulk.cfvoteCompleted();
async function j(){
    const a= await icontract.hulk.cfgetVoteCount('aap');
    console.log(a);
}

j();