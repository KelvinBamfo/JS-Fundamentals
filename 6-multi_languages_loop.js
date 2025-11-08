const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];
const temp = [];

for (let i = 0; i < lines.length; i++) {
  temp.push(lines[i]);
}

let result = "";
let j = 0;

while (j < temp.length) {
  result += temp[j] + (j !== temp.length - 1 ? "\n" : "");
  j++
}

console.log(result);

