var numAsNum;
var asBinary = "";


function addBinary(a,b) {
numAsNum = a + b;
var asBinary = (numAsNum >>> 0).toString(2);
return asBinary;
};

addBinary(1,2);




