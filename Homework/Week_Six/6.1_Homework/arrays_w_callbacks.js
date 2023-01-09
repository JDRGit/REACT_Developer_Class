// The first question is for the numbers array. The second question is for the words array.
// Two arrays to work with:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every

// Determine if every number is greater than or equal to 0

const isGreaterThan0 = (arr) => {
    return arr.every((element) => element >= 0);
  };
  
  console.log(isGreaterThan0(nums));

// determine if every word shorter than 8 characters

const isShorterThan8 = (arr) => {
    return arr.every((element) => element.length < 8);
  };
  
  console.log(isShorterThan8(panagram));

// Filter

// filter the array for numbers less than 4

const lessThan4 = nums.filter((element) => element < 4);
console.log(lessThan4);

// filter words that have an even length

const evenLength = panagram.filter((element) => element.length % 2 === 0);
console.log(evenLength);

// Find

// Find the first value divisible by 5

const divisibleBy5 = nums.find((element) => element % 5 === 0);
console.log(divisibleBy5);

// find the first word that is longer than 5 characters

const longerThan5 = panagram.find((element) => element.length > 5);
console.log(longerThan5);

// Find Index

// find the index of the first number that is divisible by 3

const index1 = nums.findIndex((element) => element % 3 === 0);
console.log(index);

// find the index of the first word that is less than 2 characters long

const index2 = panagram.findIndex((element) => element.length < 2);
console.log(index);

// For Each

// console.log each value of the nums array multiplied by 3

nums.forEach((element) => console.log(element * 3));

// console.log each word with an exclamation point at the end of it

panagram.forEach((element) => console.log(element + "!"));

// Map

// make a new array of each number multiplied by 100

const multiplied = nums.map((element) => element * 100);
console.log(multiplied);

// make a new array of all the words in all uppercase

const uppercase = panagram.map((element) => element.toUpperCase());
console.log(uppercase);

// Some

// Find out if some numbers are divisible by 7

const someDivisibleBy7 = nums.some((element) => element % 7 === 0);
console.log(someDivisibleBy7);

// Find out if some words have the letter a in them

const someHaveA = panagram.some((element) => element.includes("a"));
console.log(someHaveA);

// Hungry for More //

// Reduce

// Add all the numbers in the array together using the reduce method

const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); 

// concatenate all the words using reduce

const concatenated = panagram.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
console.log(concatenated);

// Array Methods Challenge Problems
// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once

// const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const allLettersUsed = alphabet.split("").every((letter) => panagram.join("").toLowerCase().includes(letter));
console.log(allLettersUsed);

// Working with data
// filter for products with a price that is less than 10, using the array below:
// sort alphabetically by product name

const filtered = products
  .filter((product) => product.price < 10)
  .sort((a, b) => (a.name > b.name ? 1 : -1));
console.log(filtered);