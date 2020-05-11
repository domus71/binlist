const lookup = require('binlookup')();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me the 6 first digits: ', (answer) => {
  if(answer.length>=6){
    // promise
    lookup(answer).then(console.log, console.error)
  }

  rl.close();
});
