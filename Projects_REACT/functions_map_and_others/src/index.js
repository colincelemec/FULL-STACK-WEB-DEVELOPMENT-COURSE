var array = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// Pass a function to map
const mapped = array.map(function (x) {
  return x * 2;
});
console.log(mapped);

//Filter - Create a new array by keeping the items that return true.
const result = array.filter(function (word) {
  return word.length > 6;
});
//Reduce - Accumulate a value by doing something to each item in an array.
const initialValue = 0;
const sumWithInitial = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue, initialValue;
});
//Find - find the first item that matches from an array.

const found = array.find(function (element) {
  return element > 10;
});

//FindIndex - find the index of the first item that matches.

const foundIndex = array.findIndex(function (element) {
  return element.index === 1;
});

//SubString

const string = "cmdnjkc kncf";

const sub_string = string.substring(1, 3);
