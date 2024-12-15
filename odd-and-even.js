const enterNumber = "Enter A Number :";
const invalidEntry = "Invalid Entry";

const numbers = [];
const oddNumbers = [];
const evenNumbers = [];
let num;

for (let i = 0; i < 10; i++) {

  num = prompt(enterNumber);

  if (!num) {
    alert(invalidEntry);
    break;
  }

  if (isNaN(num)) {
    alert(invalidEntry);
    i--;
    continue;
  }

  numbers[i] = num;
}

numbers.forEach(n => n % 2 === 1 ? oddNumbers.push(n) : evenNumbers.push(n));

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);