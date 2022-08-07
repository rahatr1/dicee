var randomNumber1 = Math.floor(Math.random() * 6 )+ 1; 
var randomNumber2 = Math.floor(Math.random() * 6 )+ 1; 

var diceImage1 = "images/dice" + randomNumber1 + ".png";

var diceImage2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src" ,diceImage1);
document.querySelector(".img2").setAttribute("src" ,diceImage2);

