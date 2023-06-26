// To start, create a function converting km to miles.
// Modify the function convert in either direction.
// Modify the function again to convert other units.

function convertToKm(value) {
    // There are (approx.) 0.621371 miles in 1 km.
    // Note: 1km = 0.621371mi; 1.60934km = 1mi
    // return value*0.621371;
    document.body.querySelector("#km").value = (value*0.621371).toFixed(3);
}

function convertToMiles(value) {
    // There are (approx.) 0.621371 miles in 1 km.
    // Note: 1km = 0.621371mi; 1.60934km = 1mi
    // return value/0.621371;
    document.body.querySelector("#miles").value = (value/0.621371).toFixed(3);
}
