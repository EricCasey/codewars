var lastDigit = function(str1, str2){
var product = str1 * str2;
var arrayed = product.toString().split("")
var length = product.toString().length



  console.log("product: " + product);
  console.log("length: " + product.toString().length);
  console.log("Arrayed: " + arrayed)
  console.log("last digit: " + arrayed[length - 1])
}

lastDigit(11, 245)


var lastDigit = function(str1, str2){
var product = str1 * str2;
var arrayed = product.toString().split("")
var length = product.toString().length

return arrayed[length - 1];
}