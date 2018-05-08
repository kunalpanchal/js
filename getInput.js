process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

_input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));


function processData(input) {
 //Enter your code here
 console.log(input)
}
