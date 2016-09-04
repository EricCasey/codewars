// find which number in the array appears an off number of times.

function findOdd(A) {
var length = A.length;
var B = A.map(String);
var sorted = B.sort(function(a, b){return a-b});
var uniques = [sorted[0]];
var uniqueNum = sorted[0];
var count = 0;
var x = 0;
var z = 1;

for (var i = 1; i <= length-1; i++) {
  if (sorted[i] === uniqueNum) {
    //do nothing
  }
  else {
uniques.push(sorted[i])
uniqueNum = sorted[i+1];
  } // end of if else
} // end of for loop

var uniquesLength = uniques.length;
var counts = [];

for (var y = 0; y <= sorted.length; y++) {
  if (sorted[z] === uniques[x]) {
 count++;
 z++;
  } else {
counts.push(count + 1);
var count = 0;
x++;
z++;
  }// end of 2nd if else
}// end of 2nd for loop


for (var b = 0; b <= uniquesLength; b++) {

if (counts[b] % 3 === 0) {
  console.log(uniques[b] + "<------------------------------- SUCCESS!")
} else if (counts[b] === 1){
  console.log(uniques[b] + "<------------------------------- SUCCESS!")
}



} // 3rd for lloopp


console.log("Length: " + length)
console.log("Sorted: " + sorted)
console.log("Uniques: " + uniques)
console.log("Unique Nums: " + uniquesLength)
console.log("Counts: " + counts)
console.log("--------------------------")
} // end of function


  findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
  findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
  findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]);
  findOdd([10]);
  findOdd([1,1,1,1,1,1,10,1,1,1,1]);
  findOdd([5,4,3,2,1,5,4,3,2,10,10]);







