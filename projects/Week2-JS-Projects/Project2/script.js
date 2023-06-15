// =========================
// Project 2 - The Function
// =========================

var name = prompt("Tell me your name.");
var num1 = prompt("Give me a number.");
var num2 = prompt("Give me another number");

alert(Greetings(name));
alert(theSum(num1,num2));

// Using a different, but still descriptive variable.
function Greetings(nom)
{
    return `You are going to have a wonderful day, ${nom}.`;
}

// Ditto on the variable names.
function theSum(n1,n2)
{
    if((isNaN(n1))||(isNaN(n2)))
    {
        return "You did not provide two valid numbers.";
    }
    else
    {
        var sum=parseInt(n1)+parseInt(n2);

        return `By the way, the sum of your numbers is ${sum}.`;
    }
}