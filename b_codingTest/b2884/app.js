const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]) ;
  
function solution(A, B) {
    // Write your code
    if(B >= 45) {
      console.log(A, B - 45)
    } else if(A >= 1 && B < 45) {
      let oClock = A - 1
      let minutes = (B - 45) + 60
      console.log(oClock, minutes);
    }else if(A < 1 && B < 45) {
      let oClock = (A - 1) + 24
      let minutes = (B - 45) + 60
      console.log(oClock, minutes);
    }
}