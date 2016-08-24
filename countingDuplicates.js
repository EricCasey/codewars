function duplicateCount(text){
  //...
  var letters = [];
  var numDuplicates = 0;
  var letters = (""+text.toLowerCase()).split("");

  letters = letters.sort();
//  letters = letters.toString().replace(/,/ig, '');
  console.log(letters);
  console.log("Length: " + letters.length);
 // var repeatedNums = 0;
// for (i = 0; i <= letters.length; i++) {

    var current = null;
    var cnt = 0;
    var repeats = 0;
    for (var i = 0; i < letters.length + 1; i++) {


        if (letters[i] != current) {
            if (cnt > 1) { console.log(current + '- ' + cnt); repeats++; }
            current = letters[i];
            cnt = 1;
             } else if (cnt > 2) {

            cnt++;
            } else {
            cnt++;

            }

        }

console.log("repeats: " + repeats)
}


duplicateCount("ericcaseylimerick");