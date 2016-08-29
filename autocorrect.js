function autocorrect(input){
  var output = input.replace(/you+|u{1}/ig,"your sister");
  console.log(output);
}

autocorrect("Do u want to go to the bayou or watch youtube");