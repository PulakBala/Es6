const numbers = [12, 34, 562, 12, 32, 21, 13, 3, 7, 16];
const bigNum = numbers.filter(x => x > 20);
const tinyNum = numbers.filter(n => n < 20);
const evenNum = numbers.filter(num => num % 2 === 0);
const oldNum = numbers.filter(num => num % 2 === 1);
console.log(bigNum);
console.log(tinyNum);
console.log(evenNum);
console.log(oldNum);
