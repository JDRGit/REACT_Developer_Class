/*Write a while loop for the given output:
 10, 30, 50, 70, 90
 20, 40, 60, 80, 100

- This could be acheived a few ways, be creative.


Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.
*/

function numbers(startNumber, finishNumber) {
    let numbers = startNumber;
    while (numbers <= finishNumber) {
      if (numbers % 4 === 0) {
        console.log(numbers, "- multiple of 4");
      }
      numbers += 1;
    }
  }
  
  numbers(500, 800);
  