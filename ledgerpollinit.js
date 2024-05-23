const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const p= require("./scripts/interact")
const prompt = require('prompt-sync')({sigint: true});
const figlet= require( "figlet");
const colorpromp=require("./color")
const port = new SerialPort('/dev/ttyACM0');
const parser = new Readline();

port.pipe(parser);

function printCentered(text) {

  const leftPadding = Math.floor((80 - text.length) / 2);

  const padding = ' '.repeat(leftPadding);
 
  console.log(padding + text);
}


console.clear();
async function spiderman(){
await figlet("Block  chain  EVM",(err,data)=>
{
 
  console.log(data)
})


printCentered(colorpromp("Caste your Vote","underscore"))
console.log("")
console.log("")

}

spiderman()



parser.on('data',async (data)=>
{
try{

    if (data.includes('btn1')) {
       process.stdout.write('\x1b[1A');  
        process.stdout.write('\x1b[2K'); 
       printCentered(colorpromp("You have Casted Vote for BJP. Your vote is recording...","cyan"))
        await p.hulk.cfcastVote("bjp");
        process.stdout.write('\x1b[1A');  
        process.stdout.write('\x1b[2K');  
        printCentered(colorpromp("Your Vote as been recorded. You may leave","green"))


      } else if (data.includes('btn2')) {
        process.stdout.write('\x1b[1A');  
        process.stdout.write('\x1b[2K'); 
       printCentered(colorpromp("You have Casted Vote for CONGRESS. Your vote is recording...","cyan"))
        await p.hulk.cfcastVote("congress");
        process.stdout.write('\x1b[1A');  
        process.stdout.write('\x1b[2K');  
        printCentered(colorpromp("Your Vote as been recorded. You may leave","green"))


      } else if (data.includes('btn3')) {
        process.stdout.write('\x1b[1A');  
        process.stdout.write('\x1b[2K'); 
       printCentered(colorpromp("You have Casted Vote for AAP. Your vote is recording...","cyan"))
        await p.hulk.cfcastVote("aap");
        process.stdout.write('\x1b[1A');  
        process.stdout.write('\x1b[2K');  
        printCentered(colorpromp("Your Vote as been recorded. You may leave","green"))



      } else {
        console.log("Bye")
              process.exit(0);
        
      }
   

    }catch(e)
    {
      process.stdout.write('\x1b[1A');  
      process.stdout.write('\x1b[2K'); 
      console.log(colorpromp("Internal Error. Vote not Counted.","red"))
    }



});

port.write('ROBOT PLEASE RESPOND\n');

