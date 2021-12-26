const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(x, y) {
    // Write your code
  if(x > 0 && y > 0) {
    console.log(1)
  } else if(x < 0 && y > 0) {
    console.log(2)
  } else if(x < 0 && y < 0) {
    console.log(3)
  } else if(x > 0 && y < 0) {
    console.log(4)
  }
}