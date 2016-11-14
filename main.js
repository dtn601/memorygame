console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
 result = "Sorry, Try Again";
} else if (cardOne === cardTwo) {
 result = "You found a match!"
} else if (cardThree === cardFour) {
 result = "You found a match!"
} else if (cardTwo === cardThree) {
 result = "Sorry, Try Again"
} 
alert(result);
