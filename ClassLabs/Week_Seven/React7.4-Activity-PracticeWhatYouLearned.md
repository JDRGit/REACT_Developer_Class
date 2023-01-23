#   1. What are all the JavaScript Data Types?
### JavaScript has 8 Datatypes
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object


# 2. What is the Difference Between Const Let and Var? Consider Scope ... Give an example
### Const, Let and Var
- Const variables can neither be updated nor re-declared.
- Let variables can be updated but not re-declared; 
- Var declarations are globally scoped or function scoped while let and const are block scoped. Var variables can be updated and re-declared within its scope; 

``` 
function example() {
    // Variable declared with var
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2

    // Variable declared with let
    let y = 3;
    if (true) {
        let y = 4;
        console.log(y); // 4
    }
    console.log(y); // 3

    // Variable declared with const
    const PI = 3.14;
    if (true) {
        const PI = 3.15;
        console.log(PI); // 3.15
    }
    console.log(PI); // 3.14
}
example();

```
# 3. Pass By Value vs Pass By Reference? Why would you say a String is pass by value/ or a value type? Why is an object a reference type?

### 3.1 Pass By Value vs Pass By Reference? 
    In pass by value, a copy of the argument's value is passed to the function. This means that if the function modifies the argument, the changes will not be reflected outside of the function.

    In pass by reference, a reference to the memory location of the argument is passed to the function. This means that if the function modifies the argument, the changes will be reflected outside of the function.

### 3.2 Why would you say a String is pass by value/ or a value type?
    Imagine you have a toy box with different toys inside, and you give one of your toys to your friend to play with. If your toy is a toy car, and your friend plays with it and changes it, it would not affect the original toy car you have in your toy box. That's what we call "pass by value"

    On the other hand, if your toy is a play-doh, and your friend plays with it and shapes it into a different form, it would affect the original play-doh you have in your toy box. That's what we call "pass by reference"

    In computer programming, a string is like a toy car, when we give it to a function to play with, any change the function makes to it, it doesn't affect the original one, that's why we say a string is passed by value.

###  3.3 Why is an object a reference type?

    Imagine you and your friend have a toy box and you both want to play with the same toy. You both can take the toy out of the toy box at the same time and play with it, but the toy is still in the toy box. That's how objects work in computer programming, when you create an object and give it to a variable, it's like taking the toy out of the toy box, the variable holds a reference to where the toy is located, not the actual toy itself. So, if you give that reference to another variable, both variables can access and play with the same toy. That's why objects are called reference types.

Acknowledgement for question #3
https://blog.penjee.com/passing-by-value-vs-by-reference-java-graphical/
![Passing by Value vs. by Reference Visual Explanation](https://blog.penjee.com/wp-content/uploads/2015/02/pass-by-reference-vs-pass-by-value-animation.gif)


# 4. What do Map , Filter and Reduce do? Do they mutate the array you call them on?

### 4.1 What do Map , Filter and Reduce do?
map(), filter(), and reduce() are array methods in JavaScript that can be used to transform and manipulate arrays in different ways.

map() creates a new array with the results of calling a provided function on every element in the calling array. The new array will have the same length as the original array.

```
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map(function(num) {
    return num * 2;
});
console.log(double); // [2, 4, 6, 8, 10]
```
filter() creates a new array with all elements that pass the test implemented by the provided function. The new array will have a length that can be smaller than the original array.

```
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(even); // [2, 4]
```
reduce() applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

### 4.2 Do they mutate the array you call them on?
map(), filter(), and reduce() are non-mutating array methods in JavaScript, meaning that they do not change the original array on which they are called. Instead, they return a new array with the transformed elements.

map() creates a new array with the results of calling a provided function on every element in the calling array. The new array will have the same length as the original array.

filter() creates a new array with all elements that pass the test implemented by the provided function. The new array will have a length that can be smaller than the original array.

reduce() applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
```
map/filter/reduce example:

map([🌽, 🐮, 🐔], cook)
=> [🍿, 🍔, 🍳]

filter([🍿, 🍔, 🍳], isVegetarian)
=>  [🍿, 🍳]

reduce([🍿, 🍳], eat)
=> 💩
```
# 5. What are all the Falsy Values in JS? Why do you think this is important to know?

### 5.1 What are all the Falsy Values in JS?
In JavaScript, there are several values that are considered "falsy", which means they evaluate to false when used in a boolean context.

The falsy values in JavaScript are:

undefined
null
false
0 (zero)
NaN (Not-a-Number)
"" (empty string)

For example:
```
if (!undefined) {
    console.log("undefined is falsy");
}
if (!null) {
    console.log("null is falsy");
}
if (!false) {
    console.log("false is falsy");
}
if (!0) {
    console.log("0 is falsy");
}
if (!NaN) {
    console.log("NaN is falsy");
}
if (!'') {
    console.log("'' is falsy");
}
```
- It's worth to mention that any value that is not falsy is considered truthy.

### 5.2 Why do you think this is important to know?

- Knowing what values are considered falsy in JavaScript is important because they are often used in conditional statements, such as if statements, and can affect the behavior of your code.
    
- Understanding which values are considered falsy in JavaScript allows you to write more accurate and reliable code, which can save you time and effort in the long run.

# 6. What is Async and Await?

In JavaScript, async and await are keywords that allow for more efficient and readable handling of asynchronous operations. async is used to declare a function as asynchronous, which means it can run concurrently with other code and does not block the execution of the program. await is used within an async function to specify a point at which the program should pause execution until a specific asynchronous operation is completed. Together, async and await make it easy to write asynchronous code that is clear, concise, and easy to understand. 
It makes the asynchronous code look and behave like synchronous code by allowing you to use the keyword await in front of an asynchronous call, which causes the JavaScript runtime to pause execution of the async function until a promise is resolved.

    Explaned to my 5 year old self; Async and Await in JavaScript are like helpers that make the computer do many things at the same time, without getting confused. Like when you are watching your favorite cartoon and your mom is cooking dinner at the same time, both things happen at the same time but you don't get confused. Async and Await do the same thing for the computer. They help the computer do different tasks at the same time, like download a game while playing another one, and the computer will not get confused.

# 7. What is an async function? 

An async function in JavaScript is a special type of function that runs asynchronously. This means that it can run concurrently with other code, and it doesn't block the execution of the program. This is useful when you need to perform a task that might take a long time, like fetching data from a server or reading a large file. Instead of stopping the entire program and waiting for the task to complete, the async function allows the program to continue running and performing other tasks while the async function is working. Once the async function is done, it can return a value or signal that it is finished, so that the program can continue with the next task.

    Explaned to my 5 year old self; An async function in JavaScript is like a helper that helps the computer do something while it's doing something else. It's like having a friend that can play with you while you wait for your turn on a game. The async function is like your friend, it can do something else while the computer is waiting for something else to finish. It makes the computer work faster and not get bored.

# 8. What is try and catch?

The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.

    Explained to my 5 year old self; "Try and catch" in JavaScript is like a helper that helps the computer not get confused when it's doing something. Imagine you are playing with blocks and you want to build a tower. Sometimes you might accidentally knock it over, try-catch is like a helper that helps you catch the blocks before they fall and fix the tower so you can keep building.
    The try block is like when you are stacking the blocks, and catch block is like when you catch the blocks before they fall. So if the computer makes a mistake, the catch block will catch it and fix it so that the computer can keep working without getting confused. It's like having a helper that makes sure you don't get stuck when you're playing with the blocks.

