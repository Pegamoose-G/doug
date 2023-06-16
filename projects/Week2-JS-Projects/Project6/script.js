// =========================
// Project 6 - Clock
// =========================

// Set the array of color codes.
    var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
    // Start with the first color in the array.
    var c = 0;
    
    // Function for updating the clock and colors.
    function ColorClock()
    {
        // Grab the current timestamp
        var now = new Date();
        // From the above value, grab the time increments.
        var h = now.getHours();
        // Check the formatting of minutes and seconds.
        var m = now.getMinutes();
        m = setLeadingZero(m);
        var s = now.getSeconds();
        s = setLeadingZero(s);

        // Change the text of the div with the formatted time.
        document.getElementById("time").innerHTML = h+":"+m+":"+s;;
        document.body.style.backgroundColor=colors[c];
        // Increment the color array placement.
        c += 1;
        // If we have reached the end of the array, start over.
        if(c>=colors.length)
            c=0;
        // Update the content every second
        setTimeout(ColorClock,1000);
    }
    
    // For minutes and seconds, add the leading zero for single digit numerals.
    function setLeadingZero(x) {
        if(x<10)
            x = "0"+x;
        return x
    }

    // Ger this party clock started!
    ColorClock();