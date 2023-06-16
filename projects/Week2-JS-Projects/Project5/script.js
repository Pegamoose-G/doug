// =========================
// Project 5 - Image Gallery
// =========================

// I managed to complete this Javascript with a single function.

// The function pulls in one parameter to determine the direction.
function changePic(direction) {
    // Declare the array of pictures
    var desserts = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    
    // In the HTML, there is a hidden input that acts as a pseudo-variable container. The JS reads the value stored in this hidden input.
    var pic = Number(document.getElementById("picnum").value);

    // Based on the input, check if the direction is forward or backwards.
    if (direction=="next") {
        // Increment the value by one to grab the next place in the array.
        pic+=1;
        // Before referencing the array, correct the value if it has exceeded the number of items in the array. If so, reset to 0 (the first item)
        if(pic>=desserts.length)
            pic=0;
        // Set the hidden input to the new placement value. 
        document.getElementById("picnum").value=pic;
        // Append the image file name to the path
        var imgurl = "./img/"+desserts[pic]; 
    } else {
        // Do the same thing as above, but if the number is negative, set the placement to the last value in the array (length-1),
        pic-=1;
        if(pic<0)
            pic=desserts.length-1;
        document.getElementById("picnum").value=pic;
        // Append the image file name to the path
        var imgurl = "./img/"+desserts[pic]; 
    }
    // Either forward or backwards, update the image.
    document.getElementById("dessertcart").src=imgurl;
}    