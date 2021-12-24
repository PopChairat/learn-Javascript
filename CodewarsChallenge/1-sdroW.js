//Stop gninnipS My sdroW!
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

function spinWords(sentence) {
  //TODO Have fun :)
  let arrResult = [];
  let arrStr = sentence.split(" ");
  console.log(arrStr);
  arrStr.forEach((str) => {
    if (str.length >= 5) {
      str = str.split("").reverse().join("");
    }
    arrResult.push(str);
  });
  let str = "";
  if (arrResult.length > 1) str = arrResult.join(" ");
  else str = arrResult.join("");
  console.log(str);
  return str;
}
//The Best :
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
spinWords("Welcome"); //emocleW
spinWords("Hey fellow warriors"); //Hey wollef sroirraw
