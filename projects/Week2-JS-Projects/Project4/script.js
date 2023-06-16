// =========================
// Project 4 - Rotating Background
// =========================

// Create a global variable of the array of images.
// All that is needed is the image file names.
var pics = ['background1.jpg','background2.jpg','background3.jpg'];
// Set the starting picture (place in the array)
var p = 0;

function updateBGPic()
{
    // Append the file name to the path
    var imgurl = "./images/"+pics[p]; 
    // Debugging - Is the image updated?
    // console.log(imgurl);

    // Using the div's ID, set the background image.
    document.getElementById("rotpic").style.backgroundImage="url("+imgurl+")";
    // Increment the array placement.
    p += 1;
    // WHen the placement exceeds the size of the array, start over at 0.
    // Use the length of the array in case the number of pictures change.
    if(p>=pics.length)
        p=0;
    // Run the function every 3 seconds (in millisecons)
    setTimeout(updateBGPic,3000);
}
// Start the recurring function
updateBGPic();