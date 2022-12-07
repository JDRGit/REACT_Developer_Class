// Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.
function minusOne(num) {
    return num -1
}
console.log(minusOne(10));
console.log(minusOne(100));
console.log(minusOne(Infinity));


// Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.
function makeSentence(firstword, secondword, thirdword) {
    return console.log(`Oh boy, do ` + firstword + ` ` + secondword + ` ` + thirdword + ` or what?`);
}

makeSentence('I', 'want', 'chimichangas');


//Write a function called getLastElement that takes a parameter arr. Invoke the function with an array as the argument. The function should print the last element within the array.
const arr = {};
function getLastElement(arr) {

    console.log(arr[arr.length-1]);
}
getLastElement([1, 2, 3, 4, 5, 6]); 
getLastElement(['a', 'b', 'c']);
getLastElement([[1, 2, 3], [4, 5, 6]]); 