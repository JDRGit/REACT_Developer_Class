// Solve the following with a Frequency Counter
// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   1. anagrams('rail safety', 'fairy tales') --> True
//   2. anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   3. anagrams('Hi there', 'Bye there') --> False




//   Examples 1. anagrams('rail safety', 'fairy tales') --> True

// function anagrams(stringA, stringB) {
//     // create frequency counter for each string
//     const charCountA = buildCharCount(stringA);
//     const charCountB = buildCharCount(stringB);
  
//     // compare the two frequency counters
//     for (let char in charCountA) {
//       if (charCountA[char] !== charCountB[char]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // helper function to build frequency counter for a given string
//   function buildCharCount(str) {
//     const charCount = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       charCount[char] = charCount[char] + 1 || 1;
//     }
//     return charCount;
//   }
  
//   // should print true
//   console.log(anagrams('rail safety', 'fairy tales')); 




//   Examples 2. anagrams('RAIL! SAFETY!', 'fairy tales') --> True

// function anagrams(stringA, stringB) {
//     // create frequency counter for each string
//     const charCountA = buildCharCount(stringA);
//     const charCountB = buildCharCount(stringB);
  
//     // compare the two frequency counters
//     for (let char in charCountA) {
//       if (charCountA[char] !== charCountB[char]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // helper function to build frequency counter for a given string
//   function buildCharCount(str) {
//     const charCount = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       charCount[char] = charCount[char] + 1 || 1;
//     }
//     return charCount;
//   }
  
//   // should print true
//   console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); 




//   Examples 3. anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     // create frequency counter for each string
//     const charCountA = buildCharCount(stringA);
//     const charCountB = buildCharCount(stringB);
  
//     // compare the two frequency counters
//     for (let char in charCountA) {
//       if (charCountA[char] !== charCountB[char]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // helper function to build frequency counter for a given string
//   function buildCharCount(str) {
//     const charCount = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       charCount[char] = charCount[char] + 1 || 1;
//     }
//     return charCount;
//   }
  
//   // should print false
//   console.log(anagrams('Hi there', 'Bye there')); 