function pigIt(str){
  arrayed = str.split(" ");
  console.log(arrayed);
  console.log("length: " + arrayed.length);
  finalArray = [];

for (var i = 0; i <= arrayed.length - 1; i++) {
 var currentWord = arrayed[i];
 console.log(currentWord);
 var firstLetter = currentWord.slice(0, 1);
 var cutWord = currentWord.slice(1);
 console.log(firstLetter);
 console.log(cutWord);
 var finalWord = cutWord + firstLetter + "lay";
 console.log(finalWord);
 finalArray.push(finalWord);
} // end of for loop
console.log(finalArray);
var almostString = finalArray.toString();
console.log(almostString);
var finalString = almostString.replace(/\,/g, " ");
console.log(finalString);

} // end of function

pigIt('Pig Latin is so cool');