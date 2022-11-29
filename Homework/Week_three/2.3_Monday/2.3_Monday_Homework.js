// 1. Challenge: For Loops - Fundamentals
let countDown = 10;
// ADD CODE HERE
for (let i = 0; i < 10; i++)
countDown--;
// Uncomment the below line to check your work
console.log(countDown) // -> should print 0;



// 2. Challenge: For Loops and Arrays
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1st question
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++) {
  greetings.push('Have a ' + synonyms[i] + 'day!');
}

// 2nd question
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i = 0; i < greetings.length; i++) {
  console.log(greetings[i]);
}



// 3. Challenge: For Loops and Array Indices
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE

for (let i = 0; i < firstNames.length; i++) {
    bios.push('My name is ' + firstNames[i] + ' ' + lastNames[i] + ' and I am from ' + places[i])
  }
  
  console.log(bios)



  // 4. Challenge: For Loops - Calculating Array Elements
  const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for(let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] = increaseByTwo[i] + 2;
} 

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

