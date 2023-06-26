// Task 2 - Step 1 : Assigning the value of the header to a variable.
var headerOne = $("h1");

// Task 2 - Step 2 : Test the JQuery got the correct value.
alert("The content of my h1 tag is: "+headerOne.text());

// Task 2 - Step 3 : Set new text in the header.
$("h1").text("This is Doug's header.");

// Task 2 - Step 4 : Change the value of the li with the id "canine" to "lion",
$("#canine").text("lion");

// Task 2 - Step 5 : Using only a class selector, change the second one found to "leopard"
$(".feline:nth-child(2)").text("leopard");

// Task 3 - Step 3 : Get the image source and set it in the span.
var imgSrc = $("img");
$("#imageSrc").text(imgSrc.attr("src"));

// Task 3 - Step 4 : Set a new image source.
imgSrc.attr("src", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/19/16/garfield-4-0.jpg");

// Task 3 - Step 5 : Update the span to present the new path (same as the above).
$("#imageSrc").text(imgSrc.attr("src"));

// Task 3 - Step 7 : Change that boring input element into a colorpicker
// $("input").attr("type", "color");

// Task 3 - Step 8 : Add an ID to the input and then change it to a color picker, by ID.
$("input").attr("id", "colorPicker");
$("#colorPicker").attr("type", "color");

// Task 4 - Step 3 : When the input above changes, set it in the span (inputValue).
// I am able to see the text in the span after I press the Enter button. This is because I am using the ".change()" method to 'listen' for changes to the text type input element.
$("[type=text]").change(function() {
    var text = $(this).val();
    $("#inputValue").text(text);
    // Task 4 - Step 4 : After the change, set the input field to "horse". 
    // Task 4 - Step 5 : Display where? Assumption - Display it in the input value? Or, maybe add a line item to the unordered list?
    // Why not both?
    $("[type=text]").val("horse");
    $("ul").append($("<li>").text("horse"));
    // ...And the span, because, why not?
    $("#imageSrc").text("horse");
});

// Task 6 - Step 3 : add the "box" class to all list elements
$("li").addClass("box");

// Task 6 - Step 4 : Add "imageBox" class to the image element.
$("img").addClass("imageBox");

// Task 6 - Step 5 : Add the imageBox class to the first list item. Only the border changes.
$("li:first").addClass("imageBox");

// Task 6 - Step 6 : Remove the class from the third list item.
$("li:nth-child(3)").removeClass("box");

// Task 7 - Steps 1-3 : Preformed in the dev tools console
// Step 1 : $("[type=text]").toggleClass("box");
// Step 2 : $("img").fadeOut();
// Step 3 : $("img").fadeIn();