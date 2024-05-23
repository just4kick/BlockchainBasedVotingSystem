const prompt = require('prompt-sync')({sigint: true});
const smartinteract= require("./scripts/interact")
const colorpromp=require("./color")
const figlet= require( "figlet");


function printCentered(text) {
    
    const leftPadding = Math.floor((80 - text.length) / 2);
  
    const padding = ' '.repeat(leftPadding);

    console.log(padding + text);
  }







console.clear();
async function superman()
{
    await figlet("EVM   result",(err,data)=>
    {
        console.log(data)
    })


    const s= prompt("Voting Must be completed before Seeing result. Type[yes/no] - ")
    if(s.toLowerCase()==="yes")
        {
          await smartinteract.hulk.cfvoteCompleted();
          printCentered(colorpromp("Voting Completed","red"))
          console.log(colorpromp("select function","magenta"))
          const option="[1] Check Status status \n[2] Get Vote count by party name \n[3] Get total vote count "
          console.log(colorpromp(option,"green"))
          async function optf(){
           
           const opsel= prompt(colorpromp("Enter Option ([q] for exit): ","cyan"))
            switch (opsel) {
                case "1":
                  await smartinteract.hulk.cfsysStatusCheck();
                  optf()
                break;
                case "2":
                const partyname=prompt(colorpromp("Enter Party name: ","cyan"))
                const val=await smartinteract.hulk.cfgetVoteCount(partyname.toLowerCase())
                console.log(val)
                optf()
                break;
                case "3":
                const tval=await smartinteract.hulk.cfgetAllVoteCount();
                console.log(tval)
                optf()
                break;
                case "q":
                    console.log("Bye")
                    process.exit(0)
                break;
                default:
                console.log("Invalid Input");
                optf()
            }
        }
        optf()

        }
        else{
            process.exit(0)
        }
}

superman()