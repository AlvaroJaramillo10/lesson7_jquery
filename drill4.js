/* 
Program Name: Recipe Display Application
Author: Alvaro Jaramillo
Date: 07/18/2018
Filename: drill4.js
*/

/* global $ */

//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display function

//displays and animates the next element after the current target
function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
    
}//end of display2 function

//attach event lsitener to h3 elements to invoke display funtion when clicked
//$("h3").click(display);

//attach event lsitener to h3 elements to invoke display funtion when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
}, function() {
    $(this).css("background-color", "pink");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);