// Not part of the assignment. Practicing shrinking the image a bit.
$("img").attr("style","width: 300px;")

// Task 2 - Step 1 : Add a click event listener to the image
// Task 6 - Step 2 : Click on an image to make it fade out over five seconds, followed by an alert. (Modifying this earlier step.)
$("img").click(function(){
    // alert("You have clicked the image")
    $(this).fadeOut(5000, function(){
        alert("The image is now gone.");
    });
})

// Task 2 - Step 2 : Add event listener to the list items
$("li").click(function () {
    // Task 2 - Step 3 : Commenting out. 
    // alert("You have clicked on a list item");
})

// Task 2 - Step 4 : Add a new event listener to fade out a list item.
// There is not a problem. I assume both occur, but the alert is not active since it is comment out above.
// Task 2 - Step 5 : I guess I jumped the gun and did this step anyway to act upon the item selected.
// Note: I changed "this" to use "li", and all list item elements faded out, not just the selected one.
$("li").click(function() {
    $(this).fadeOut();
})

// Task 2 - Step 6 : Present content of clicked list item in an alert.
$("li").click(function () {
    alert($(this).text());
})

// Task 3 - Step 3 : Add a click event to remove the span.
// Task 3 - Step 10 : I have added the "event" parameter which I used to stopPopagation (prevent other, parent elements from firing, too.)
$("span").click(function (event) {
    $(this).remove();
    event.stopPropagation();
})

// Task 3 - Step 4 : Add a click event to remove the paragraph
$("p").click(function () {
    $(this).remove();
})
// Task 3 - Step 5 : Clicking only on the span removes both the span and the paragraph.

// Task 3 - Step 6 : Add a click event to remove the paragraph
$("div").click(function () {
    $(this).remove();
})
// Task 3 - Step 7 : Clicking only on the span removes all three (div, p, and span).

// Task 4 - Step 2 : Add .keypress event for the input field.
$("#keyDemo").keypress(function (event) {
    // Task 4 - Step 9 : Trigger the alert only when enter(13) is pressed.
    if(event.which==13)
        alert("You have pressed the Enter key in the input box");
    // Task 4 - Step 4 : Added "event" parameter to pass to the console log.
    // console.log(event);
});
// Task 4 - Step 3 : Most every key pressed triggers the alert. The backspace did not seem to trigger the alert.
// Task 4 - Steps 5-8 : The number is the ASCII representation of the key pressed. In my case "a" associated with the number 97

// Task 5 - Step 1 : Append a fourth color to the end of the ordered list.
$("ol").append("<li>Schwartz (German Black)</li>");

// Task 5 - Step 2 : Add a new color to the beginning of the list 
$("ol > li:first").prepend("<li>Purple</li>")


