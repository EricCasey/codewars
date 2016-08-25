var moveZeros = function (arr) {
var finalArray = [];
var zeroCount = 0;

for (var i = 0; i <= arr.length - 1; i++) {

if (arr[i] === 0) {
  arr.splice(i, 1)
  zeroCount++;
} // end of iff
}  //end of for loop
for (var b = 0; b <= zeroCount - 1; b++) {
if (zeroCount > 0) {
  arr.push(0);
}
}
console.log(arr);
} // end of function

moveZeros([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])


var moveZeros = function (arr) {
var finalArray = [];
var zeroCount = 0;

for (var i = 0; i <= arr.length - 1; i++) {

if (arr[i] === 0) {
  arr.splice(i, 1)
  zeroCount++;
} // end of iff
}  //end of for loop

for (var b = 0; b <= zeroCount - 1; b++) {
if (zeroCount > 0) {
  finalArray = arr.push(0);
}
}
return finalArray;
} // end of function
