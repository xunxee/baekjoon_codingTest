const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => +item);
solution(input[0], input[1]);
function solution(A, B) {
    // Write your code
  const stringB = String(B); //String()을 이용하면 숫자를 string으로 변환함
  // console.log(`stringB type: ${typeof stringB}`) //output == stringB type: string
  //B를 string으로 변환했으므로 ['3', '8', '5']
  
  console.log(A * stringB[2]);
  console.log(A * stringB[1]);
  console.log(A * stringB[0]);
  console.log(A * B);
}