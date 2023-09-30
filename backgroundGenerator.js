var load = require("lodash");

var array1 = [1,2,3,4,5,6];
console.log("answer",load.without(array1,3));

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var backgroundColor = document.querySelector("body");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");

function linearGradient12(){
	body.style.background= "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background 
}

color1.addEventListener("input",linearGradient12);

color2.addEventListener("input",linearGradient12);




