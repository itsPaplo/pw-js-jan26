function printOddNumbers() {
  console.log("Odd numbers from 1 to 25:");

  for (let index = 1; index <= 25; index++) {
    if (index % 2 !== 0) console.log(index);
  }
}

printOddNumbers();
