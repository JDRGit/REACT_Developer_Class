// 1 How do we assign a value to a variable?

//Ans  4 Ways to Declare a JavaScript Variable:
//var x = 5;    //Using var    
//let x = 5;    //Using let
//const x = 5;  //Using const
//x = 5;         //Using nothing

// 2  How do we change the value of a variable?

// Ans. Any variable is declared with the let keyword. This is a value that can be changed. 

// 3 How do we assign an existing variable to a new variable?

// Ans. After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator. 
        // let myVar; 
        // myVar = 5; 
        // let myNum; 
        // myNum = myVar;  // The above declares a myVar variable with no value, then assigns it the value 5 .


// 4 Remind me, what are declare, assign, and define?
// Ans. Declare and Define ==> creating a variable is called as Declaring a variable.
            //let test; //here test is the name of the declared variable.
// assign  ==> After declaration we can use equal(=) sign to assign value to the variable.
       // test = 10; //here 10 is assigned value.
//What is pseudocoding and why should you do it?
//Ans. sometimes used as a detailed step in the process of developing a program,its detail, templete of design

//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//Ans its 80% and 20%


// B. Strings

let firstVariable = "Hello World";
firstVariable = 10;
let secondVariable;
secondVariable = firstVariable;
secondVariable = "My name is Jaime";
console.log(firstVariable);
let yourName = "Jaime";
console.log("Hello, my name is " + yourName);

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false ||false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm

let animal = "cat";
if(animal == "cow") {
    console.log("moooooo");
} else {
    console.log("Hey! You're not a cow.");
}

//E. Driver's Ed

let age = 16;
if(age >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}

// II. Loops 

// A. The basics

for(let i=0 ; i<=10 ; i++) {
    console.log(i);
}

// for(let i = 10; i<= 400 ;i++) {
//     console.log(i);
// }

// for(let i = 12 ; i < 4000 ; i++) {
//     console.log(i);
//     i = i + 2;
// }

// B. Get even

for(let i = 1 ; i < 100 ; i ++) {
    if(i % 2 == 0) {
        console.log(i + ' is an even number');
    }
}

// C. Give me Five

// for(let i = 1 ; i <= 100 ; i++) {
    
//     if( i % 3 == 0) {
//         console.log("I found a " + i + ". Three is a crowd");
//     }else if(i % 5 == 0) {
//         console.log("I found a " + i + ". High five!");
//     }
// } 

for(let i = 1 ; i <= 100 ; i++) {
    if(( i % 3 == 0) && (i % 5 == 0)) {

    console.log("I found a " + i + ". Three is a crowd and I found a " + i + ". High five!");

    }
}

// D. Savings account 

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for(let i = 0; i <=10; i++) {
    
    bank_account = bank_account + i;
    
}
console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

for (let i = 1; i < 100 ; i++) {
    bank_account = (bank_account + i);
}
console.log(bank_account*2);

// III. Arrays & Control flow

//B. Easy Does It

const quotes = ["Jaime", "state", "Messi"];
console.log(quotes);

// C. Accessing elements

const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
randomThings.splice(2,1,"World");
console.log(randomThings);

// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass.splice(4,1,"Octocat");
console.log(ourClass);
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up

const myArray = [5, 10, 500, 20];
//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon","jeet");
console.log(myArray);
//Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
//Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
console.log(Array.prototype.reverse.call(myArray));
console.log(myArray.reverse());

//F. Biggie Smalls

let num = 11;
if(num < 100) {
    console.log(num + " little number");
}else {
    console.log(num + " big number");
}

//G. Monkey in the Middle

let number = 10;
if(number < 5) {
    console.log("little number");
}else if(number > 10) {
    console.log("big number");
}else {
    console.log("monkey");
}

//H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
      [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  for(i = 0; i < kristynsCloset.length ; i++) {
    console.log(kristynsCloset[i]);
  }
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

  kristynsCloset.splice(6, 0 , "raybans");
  console.log(kristynsCloset);
  kristynsCloset.splice(5, 1 , "stained knit hat");
  console.log(kristynsCloset);

for(i = 0; i < thomsCloset.length ; i++) {
    console.log(thomsCloset[i]);
}
  console.log(thomsCloset[0]);

  const thomsPants = [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ];
  console.log(thomsPants[0]);

  const thomsAccessories = [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ];

  console.log(thomsAccessories[0]);

  const thomsShirt = [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ];

  console.log("Thom is looking fierce in a " + thomsShirt[0] + ", " + thomsPants[1] + " and " + thomsAccessories[1] + "!");

  thomsPants.splice(2,1,"Footie Pajamas");
  console.log(thomsPants);


  //IV. Functions

  //A. printGreeting

  function printGreeting(name) {
    return console.log("Hello there, " + name);
  }
  printGreeting("Slimer");

  //B. printCool

  function printCool(name) {
    return console.log(name + " is cool");
  }
  printCool("Captain Sparrow");

  //C. calculateCube

  function calculateCube(number) {
    console.log(number ** 3);
  }

  calculateCube(5);

  //D. isVowel

  function isVowel(str) {

    if(str.length == 1) {
        if (str.charAt(0) == "a" || str.charAt(0) == "e" || str.charAt(0) == "i" || str.charAt(0) == "o" || str.charAt(0) == "u") {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }else {
        console.log("Please enter one character only");
    }
    
  }

  isVowel("u");

  //E. getTwoLengths

  function getTwoLengths(str1, str2) {

    const AA = [str1, str2];
    return AA.map(w => w.length);
    
  }
  
  console.log(getTwoLengths("state", "Messi"));

// F. getMultipleLengths

function getMultipleLengths(str) {
    let results = [];
    let chars = str.split(' ');
    chars.forEach(function(item){
        results[item] = item.length;
    });
    return results;
   
}
console.log(getMultipleLengths("my name is Jaime"));

//G. maxOfThree

function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    }else if ((b >= a) && (b >= c)) {
        return b;
    }else {
        return c;
    }
}
console.log(maxOfThree(88, 66, 55));

//H. printLongestWord

function printLongestWord(sentence) {
    let str = sentence.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(printLongestWord("Many Happy Returns of the Day"));

function printLongestWordfromArray (arrStr) {
    let longest = 0, word;
  
    for(var i=0 , len = arrStr.length ; i < len ; i++){
  
      if(longest < arrStr[i].length) {
         longest = arrStr[i].length;
         word = arrStr[i];
      }
  
    }
  
    return word;
  }

console.log(printLongestWordfromArray(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//Objects

let user = {name:"cat", email:"cat@gmail.com", age1:22, purchased:[]};
console.log(user);

// B. Update the user

user.email = "abc@gmail.com";
console.log(user);
user.age1++;
console.log(user);

//C. Adding keys and values

user.location = "New York";
console.log(user);

// D. Shopaholic!
//let purchased = [];
user.purchased.push("soda");
user.purchased.push("goodies");
user.purchased.push("NorthFace");
console.log(user.purchased);
user.purchased.splice(0,2);
console.log(user.purchased);

// E. Object-within-object

user.friend = {
    name: "Jack",
    age2: 30,
    location:"Philly",
    purchased1:[]
}

console.log(user);
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age2 = 55;
console.log(user);
user.friend.purchased1.push("New Car");
user.friend.purchased1.push( "Coffee");
console.log(user);
user.friend.purchased1.shift();
console.log(user);

// F. Loops

for(let i= 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for(let i= 0; i < user.friend.purchased1.length; i++){
    console.log(user.friend.purchased1[i]);
}

//G. Functions can operate on objects

function updateUser() {
    user.age1++;
    user.name=user.name.toUpperCase();
   
}
updateUser();
console.log(user);

function oldAndLoud(person) {
    person.age = person.age++;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user);
console.log(user);
//Cat Combinator
//1. Mama cat
let cat1 = {name:"Kevin", breed : "Minion", age: 20};
console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa cat
let cat2 = {name:"Stuart", breed : "Minion", age: 30};
console.log(cat2.age);
console.log(cat2.breed);

// 3. Combine Cats!

function combineCats(cat1, cat2) {

    let object1 = {};

    for(let item in cat1) {
        if(item == "breed") {
            object1[item] = `${cat1[item]}-${cat2[item]}`;
        }else {
            object1[item] = (cat1[item] + cat2[item]);
        }
    }
    object1.age = 1;
    return object1;
}

console.log(combineCats(cat1,cat2));

//4. Cat brain bender

console.log(combineCats(combineCats(cat1,cat2), combineCats(cat1,cat2)));
console.log(combineCats(combineCats(combineCats(cat1,cat2), combineCats(cat1,cat2)),combineCats(cat1,cat2), (combineCats(cat1,cat2))));

