//Exercise 1:
let s = "Hello World";

let stringArray = s.split(" ");
console.log(
  `Last word of the string '${s}' is '${stringArray[stringArray.length - 1]}', and its length is ${stringArray[stringArray.length - 1].length}`,
);

//Exercise 2
s = " fly me to the moon ";
stringArray = s.trim().split(" ");
console.log(
  `Last word of the string '${s}' is '${stringArray[stringArray.length - 1]}', and its length is ${stringArray[stringArray.length - 1].length}`,
);

//Exercise 3: Finds n number of words in a string are anagram or not
function isAnagram(string) {
  stringArray = string.toLowerCase().split(" ");
  let length = stringArray.length;
  let word = "";
  let compare = "";
  let count = 0;
  for (let i = 0; i < length; i++) {
    word = stringArray[i].split("").sort().join("");
    for (let j = 1; j < length; j++) {
      compare = stringArray[j].split("").sort().join("");
      if (word === compare) {
        count++;
      } else {
        count--;
      }
    }
    if (count === length - 1) {
      return true;
    } else return false;
  }
}

s = "CARE RACE ACER ACRE";
console.log(`The given string '${s}' is an Anagram ${isAnagram(s)}`);
