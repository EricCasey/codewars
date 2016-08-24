function solution(number) {

var multiples = [0];
var result = 0;

for (var i = 1; i <= number - 1; i++){
  if (i % 3 === 0) {
    multiples.push(i);
  }
  else if (i % 5 === 0) {
    multiples.push(i);
  } else {}
}

for (var x = 1; x <= multiples.length - 1; x++) {
  result += multiples[x];
}
console.log(result);
}

solution(10);
