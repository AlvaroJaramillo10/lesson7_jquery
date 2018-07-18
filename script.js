/* 
Program Name: Recipe Display Application
Author: Alvaro Jaramillo
Date: 07/18/2018
Filename: script.js
*/

/* global $ */

//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display function


//attach event lsitener to h3 elements to invoke display funtion when clicked
$("h3").click(display);