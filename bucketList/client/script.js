// Thus acts upon the elements of ul, and then focuses on the li items of the ul. The "this" is the particular li clicked.

// When a list item is clicked on, it is crossed off the list.
$("#container ul").on("click", "li", function() {
    $(this).toggleClass('completed');
})

// When the trash can icon (inside the span) is clicked, remove the list item
$("#container ul").on("click", "span",function(){
    $(this).parent().remove();
})

// When the enter key is pressed, the content of the input box is appended to the end of the unordered list.
// Keypress action passes the action to the callback function.
$("#container input").keypress(function(event){
    // Enter button pressed, but needs a value.
    if(event.which===13 && $(this).val()){
        var listItem = $(this).val();
        if(listItem.length<5) {
            return false;
        }
        else if (listItem.length>50) {
            alert("Bucket list item too long. Please edit it down.");
            return false;
        }
        else {
            $("#container ul").append(`<li>${listItem} <span><i class="fa-solid fa-trash-can"></i></span>`);
            $(this).val("");
        }
    }
})