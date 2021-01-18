var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

var newNumbers2 = [];
function doubleX(x) {
  newNumbers2.push(x * 2);
}
newNumbers2.forEach(doubleX);
console.log(newNumbers2);

//Filter - Create a new array by keeping the items that return true.
const newNumbers3 = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers3);

var newNumbers4 = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers4.push(num);
  }
});

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers5 = 0;
numbers.forEach(function (currentNumber) {
  newNumbers5 += currentNumber;
});
console.log(newNumbers5);

var newNumbers6 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newNumbers6);

//Find - find the first item that matches from an array.
const newNumbers7 = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumbers7);

//FindIndex - find the index of the first item that matches.
const newNumbers8 = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumbers8);
