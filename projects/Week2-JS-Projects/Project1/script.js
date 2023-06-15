// =========================
// Project 1 - Three Prompts
// =========================

var name = prompt("Please enter your name:");
var snack = prompt("What is your favorite snack?");
var drink = prompt("What is your favorite drink?");

// I thought I would mix template literals and concatenation.
var text = `Hi there, ${name}, it seems that you enjoy eating `+snack+` and drinking ${drink}!`;
alert(text);
