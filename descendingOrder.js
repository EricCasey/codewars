function descendingOrder(n){
var digits = (""+n).split(""); //changes number into array
digits.sort(function(a, b){return b-a});
digits = digits.toString().replace(/,/ig, '');
var result = Number(digits);
console.log(result);
}

descendingOrder(12351345);