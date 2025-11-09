document.getElementById("text").innerHTML="This is written usingdocument.write()"
// window.alert("Hello welcome my website!")
document.write

console.log("JavaScript is fun!");

var name="Ajie"
let age="20"
const sub="It"
var name="Ajiththi"
let age1="21"
const subject="English"
console.log(name);
console.log(age);
console.log(sub);
var favcolor= prompt("Type your favourite color")
document.body.style.backgroundColor = favcolor
console.log(favcolor)

var price="100"
var quantity="5"
var Total=price * quantity
console.log(Total)

// Question 1
let name = prompt("What is your name?");
document.write("Hello my name is " + name + "<br>");

// Question 2
let color = prompt("What is your favorite color?");
document.body.style.backgroundColor = color;
document.write("My favorite color is " + color + "<br>");

// Question 3
let score = 10;
document.getElementById("score").innerHTML = score;
score = 15;
document.getElementById("score").innerHTML = score;

// Question 4
let message = "Please fill all the fields!";
alert(message);

// Question 5
let fruit = prompt("What is your favorite fruit?");
console.log("Your favorite fruit is: " + fruit);

// Question 6
window.onload = function() {
document.write("<p>Welcome to the JavaScript class!</p>");
}

// Question 7
let name2 = prompt("Enter your name:");
let favColor = prompt("Enter your favorite color:");
document.write("Hi " + name2 + ", your favorite color is " + favColor + "!<br>");
alert("Have a great day!");
console.log(name2, favColor);

// Question 8
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
document.write("Hello, " + firstName + " " + lastName + "! Welcome to JavaScript class.<br>");

// Question 9
let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
document.write("You are " + age + " years old!<br>");

// Question 10
let length = prompt("Enter land length:");
let width = prompt("Enter land width:");
let area = length * width;
document.write("Ravi's land area is " + area + " square units.<br>");

// Question 11
let price = prompt("Enter price per item:");
let quantity = prompt("Enter number of items:");
let total = price * quantity;
document.write("Total price is " + total + " rupees.<br>");

// Question 12
let ticketPrice = prompt("Enter ticket price:");
let ticketsSold = prompt("Enter number of tickets sold:");
let revenue = ticketPrice * ticketsSold;
document.write("Total revenue is " + revenue + " rupees.<br>");

// Question 13
let totalApples = prompt("Enter total number of apples:");
let applesPerBasket = prompt("Enter number of apples per basket:");
let baskets = Math.ceil(totalApples / applesPerBasket);
document.write("Total baskets needed are " + baskets + ".<br>");

