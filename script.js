
// functions for all of the basic math operators 

function add(a, b){

    let sum = a+b;
    return sum;

};

function subtract (a, b) {
    
    let sub = a-b;
    return sub;

};

function multiply (a, b) {

    let multi = a*b;
    return multi;
};

function divide (a, b) {

    let divide = a/b;
    return divide;
};

//variables for calc-operations

const numberOne = "";
const numberTwo = "";
const operator = "";

//operate function

//function operate (num, oper, num) {

// };




// function for display


let displayValue = 0;

const display = document.getElementById("outerDisplay");
display.textContent = displayValue;













// functions for buttons, which store the values of the pressed numbers & operators

let array = [];
let x = 0;

function displayNum () {



}


 

const one = document.getElementsByClassName("one")[0];

one.addEventListener("click", () => {
         x = 1;
         display.textContent = x;

});

const two = document.getElementsByClassName("two")[0];

two.addEventListener("click", () => {
         x = 2;
         display.textContent = x;

});

const three = document.getElementsByClassName("three")[0];

three.addEventListener("click", () => {
         x = 3;
         display.textContent = x;

});

const four = document.getElementsByClassName("four")[0];

four.addEventListener("click", () => {
         x = 4;
         display.textContent = x;

});

const five = document.getElementsByClassName("five")[0];

five.addEventListener("click", () => {
         x = 5;
         display.textContent = x;

});

const six = document.getElementsByClassName("six")[0];

six.addEventListener("click", () => {
         x = 6;
         display.textContent = x;

});

const seven = document.getElementsByClassName("seven")[0];

seven.addEventListener("click", () => {
         x = 7;
         display.textContent = x;

});

const eight = document.getElementsByClassName("eight")[0];

eight.addEventListener("click", () => {
         x = 8;
         display.textContent = x;


});

const nine = document.getElementsByClassName("nine")[0];

nine.addEventListener("click", () => {
         x = 9;
         display.textContent = x;

});

const zero = document.getElementsByClassName("zero")[0];

zero.addEventListener("click", () => {
         x = 0;
         display.textContent = x;

});

const plus = document.getElementsByClassName("plus")[0];

plus.addEventListener("click", () => {
         x = "+";
         display.textContent = x;

});

const minus = document.getElementsByClassName("minus")[0];

minus.addEventListener("click", () => {
         x = "-";
         display.textContent = x;

});

const divid = document.getElementsByClassName("divid")[0];

divid.addEventListener("click", () => {
         x = "/";
         display.textContent = x;

});

const multi = document.getElementsByClassName("multi")[0];

multi.addEventListener("click", () => {
         x = "*";
         display.textContent = x;

});



