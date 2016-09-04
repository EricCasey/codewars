function noOdds( values ){
  var oddValues = [];
  // Return all non-odd values
for (var i = 0; i <= values.length; i++) {

if (values[i] % 2 === 0) {
  oddValues.push(values[i]);

} // end of if

} //end of for
return(oddValues);
} // end of function

noOdds([1, 2, 3, 4])