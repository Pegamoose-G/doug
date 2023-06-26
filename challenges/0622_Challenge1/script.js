// Challenge 1:  Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

//  Declare the function to take in an array of numbers.
function sumAll (arr) {
    // I want to make sure my parameter (arr) is an array.
    if(Array.isArray(arr))
    {
        // Start with the sum of nothing.
        var sum=0;
        // Iterate through the array of numbers.
        arr.forEach(element => {
            // Attempt to convert any strings to a numeric value (just in case).
            // This allows both integers, floats, and valid string numbers.
            // I want to only add valid numbers
            if((typeof(element)=="number")||(Number(element)==element))
                sum+=Number(element);
            else
                console.log("Warning: "+element+" is not a number and will be ignored.");
        });
        // Return the sum, or 0 (sum of nothing)
        return sum;
    }
    else {
        // This is not an array. What type is it?
        var aType = typeof(arr);
        return `${aType} provided, not an array.`;
    }
}

// various tests of the function.
// Test 1: Array of valid numbers: integers, floats, negatives.
var myArray = [1,-1.2,7,-3];
document.write("The sum is <b>"+sumAll(myArray)+"</b>.<br>");
// Test 2: Not everything in the array is a valid number.
myArray = [1,false,5.3,"hippo",-1.7,"2"];
document.write("The sum is <b>"+sumAll(myArray)+"</b>.<br>");
// Test 3: Pass in a string (not an array).
document.write(sumAll("5")+"<br>");
// Test 4: Pass in a single number (not an array).
document.write(sumAll(4)+"<br>");
// Test 5: Pass in a boolean (not an array).
document.write(sumAll(true)+"<br>");
