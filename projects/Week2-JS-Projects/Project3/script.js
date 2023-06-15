// =========================
// Project 3 - The Array
// =========================

// Create an empty array.
const nums = [];
// Declare a reusable variable and set it to a non-numeric string
var num = "bogus";

// Keep prompting until a valid number
while ((isNaN(num))||num==="") {
    num = prompt("Give a number.");
}
// Add the number to the array.
nums.push(Number(num));
// Set number to a non-numeric string.
var num = "bogus";

// Keep prompting until a valid number
while ((isNaN(num))||num==="") {
    num = prompt("Give another number.");
}
// Add the number to the array.
nums.push(Number(num));    
// Set number to a non-numeric string.
var num = "bogus";

// Keep prompting until a valid number
while ((isNaN(num))||num==="") {
    num = prompt("Give a number again.");
}
// Add the number to the array.
nums.push(Number(num));    

var total = 0;
nums.forEach(n => {
    total+=n;
});

alert(`The sum of all of your numbers is ${total}.`);