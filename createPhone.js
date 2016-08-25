function createPhoneNumber(n){
var stringed = n.toString().replace(/\,/g, "");



console.log("(" + stringed.slice(0, 3) + ") " + stringed.slice(3, 6) + " " + stringed.slice(6, 10));
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);



function createPhoneNumber(n){
var stringed = n.toString().replace(/\,/g, "");
return "(" + stringed.slice(0, 3) + ") " + stringed.slice(3, 6) + "-" + stringed.slice(6, 10);
}