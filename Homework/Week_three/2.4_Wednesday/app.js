/*Practice What You Learned
Homework
Step 1
Read/Watch Code Academy - Steps 2 & 7 at the following link Codecademy

Step 2
Sign up for an account on CSX:

https://csx.codesmith.io/ CSX Complete challenges:

Challenge: While Loops

Challenge: While Loops - Conditional Expression
Challenge: Control Flow - if statements
Challenge: Fizzbuzz/Fizzbuzz Solution
Step 3
Take A Screenshot of the page that shows you completed the challenges from CSX and Upload it to CodeSandbox

Step 4
Place the screenshot in a img tag in your CodeSandboxe's index.html file

Step 5
Submit the link to your codesandbox on Canvas
*/

// 1. Challenge: While Loops
let count = 2;
// ADD CODE HERE
while (count < 8) {
  count++;
}
// Uncomment these to check your work!
console.log(count);



// 2. Challenge: While Loops - Conditional Expression
let addThis = 0;
let sum = 0;
while (addThis < 10) { 
    sum += addThis
    addThis++
}
// Uncomment the line below to check your work!
console.log(sum);



// 3. Challenge: Control Flow - if statements
const num = 40;
let final;
// ADD CODE HERE
if(num > 100){
    final == null
} else {
    final = num * 2
}
console.log(final)
// Log final to the console below to check your work



// 4. Challenge: fizzbuzz
const fb = [];
// ADD CODE HERE
let y = 1;
while (y <= 16) {
  if (y % 3 == 0 && y % 5 !== 0) {
    fb.push("fizz");
} else if (y % 5 == 0 && y % 3 !== 0) {
    fb.push("buzz");
} else if (y % 3 == 0 && y % 5 == 0) {
    fb.push("fizzbuzz");
}
  else {
    fb.push(y);
}
    y++;
}
console.log(fb);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]


