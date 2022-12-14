
////////////////////////////////
// Easy Going
////////////////////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for(let i=1; i<=20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for(let i=0 ; i < 200; i++) {
    if(i % 2 == 0) {
        console.log(i, " is Even number.");
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
//Write a javascript application that logs all numbers from 1 - 100.
//If a number is divisible by 3 log "Fizz" instead of the number.
//If a number is divisible by 5 log "Buzz" instead of the number.
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.


for(let i=1 ; i < 100; i++) {
    if((i%3==0) && (i%5==0)) {
        console.log(i, "FizzBuzz");
    }else if(i % 5 == 0){
        console.log(i, "Buzz");
    }else if(i % 3 == 0) {
        console.log(i, "Fizz");
    }    
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2,1,5001);
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy .splice(3,1,"Gotham City");
console.log(wolfy);

//Give D'Art a second hometown by adding "Hawkins"
dart.unshift("Hawkins");
console.log(dart);

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.splice(0,1,"Gameboy");
console.log(wolfy); 

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];


const sentence = "Yell at the Ninja Turtles";
// for(i=0; i<sentence.length-1; i++){
//     console.log(sentence.toUpperCase());
// }
for (const element of sentence) {
    console.log(element.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 
'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 
//Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'));

//use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it? 
// ans. yes it's permenantely alter array.
console.log(favMovies.sort());
console.log(favMovies);

//Use the method pop
console.log(favMovies.pop());
console.log(favMovies);

//push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//Reverse the array
console.log(favMovies.reverse());
// const reversed = favMovies.reverse();
// console.log('reversed:', reversed);

//Use the shiftmethod
console.log(favMovies.shift());
console.log(favMovies);

//unshift- what does it return?
console.log(favMovies.unshift()); // It returns the number of movies in array.

//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", 
//instead of counting it yourself) Thought question: did this permanently alter our array?
// ans. yes it's permenantely alter array.
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14,1,"Avatar");
console.log(favMovies);

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it 
//and hard coding it) - Thought question: did this permanently alter our array?
//ans. No it will not alter permanently.

const half = Math.ceil(favMovies.length / 2);    

//store the value of your slicein a variable, console.log it - Thought question: what is going on here?

const firstHalf = favMovies.slice(0, half);
const secondHalf = favMovies.slice(half);
console.log('firsthalf:', firstHalf);
console.log('secondhalf:', secondHalf);

//console.log your final results
console.log(favMovies);

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, 

console.log(favMovies.indexOf("Fast and Furious"));
favMovies.splice(13,1);
console.log(favMovies);

//what value do we get when we look for the index of something that is not in the array?
//ans. it's get -1 value if something that is not in the array.

console.log(favMovies.indexOf("Fast and Furious")); 

// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
// ans. if a constant is an object or array its properties or items can be updated or removed so need to use let to update or change the array.

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert (hint look at the slice/splice method(s))

whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);

// Change "Neff" to "No One"

whereIsWaldo.splice(1,1,['Lucinda', 'Jacc', 'No One', 'Snoop']);
console.log(whereIsWaldo);


////////////////////////////////
//  Excited Kitten
////////////////////////////////

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for(i=1; i<=20; i++) {
    console.log(i, "Love me, pet me! HSSSSSS!");
}

// For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", or "...why does the red dot always get away..." at random.


for(i=1; i<20; i++) {
   
    if(i % 2 ==0) {

        const arr=[i, "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
        console.log(arr[Math.floor(Math.random()*arr.length)]);
    } else {
        console.log(i, "Love me, pet me! HSSSSSS!");
    }
   
}

////////////////////////////////
//  Find the Median
////////////////////////////////

// Find the median number in the following numsarray, then console.log that number.
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const median = nums => {
    const mid = Math.floor(nums.length / 2),
      arr = [...nums].sort((a, b) => a - b);
    return nums.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
  };

  console.log(median([14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]));

