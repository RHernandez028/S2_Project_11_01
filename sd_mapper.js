"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Gabriel Hernandez
   Date: 2/12/19

*/

// here the variable makes the date defined as whatever is in the text string

// var thisTime = new Date("February 3, 2018 3:15:28");
var thisTime = new Date;
var timeStr = thisTime.toLocaleString();

// Here this changes the text in the html to the date and time from before in the 'thisTime' variable
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// This formula calculates what number image will appear based on the currnet month and hour 
var mapNum = ((2*thisMonth + thisHour)%24);
var imgStr = "<img src='sd_sky" +mapNum +".png' />";

// Here the image is loaded in the first child of the element
document.getElementById("planisphere").insertAdjacentHTML('afterbegin',  imgStr);

