let string = process.argv[2].toLowerCase();
let reversedString = "";
for (let index = string.length - 1; index >= 0; index--) {
  reversedString += string.charAt(index);
}

console.log(`The Reveresed String: ${reversedString}`);

if (reversedString === string) {
  console.log(`The string ${string} is a palindrome`);
}
else {
  console.log(`The string ${string} is not a palindrome`);
}
