

function toCamelCase(str){
var arrayed = (""+str).split("");

if (arrayed[0] === /[a-z]{1}/) {
  arrayed[0].toUppercase();
}

console.log(arrayed);
}



toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior")
// returns "TheStealthWarrior"