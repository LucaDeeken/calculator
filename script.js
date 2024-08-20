
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

let x = "0";
let y = 0;
let operator = 0;

//operate function

//function operate (num, oper, num) {

// };




// function for display


let displayValue = 0;

const display = document.getElementById("outerDisplay");
display.textContent = displayValue;

// functions for buttons, which store the values of the pressed numbers & operators 

const one = document.getElementsByClassName("one")[0];

one.addEventListener("click", () => {
    if (x!=="0") {
        y = 1;
     } else {
        x = 1;
     };
         display.textContent = 1;

});

const two = document.getElementsByClassName("two")[0];

two.addEventListener("click", () => {
         if (x!=="0") {
            y = 2;
         } else {
            x = 2;
         };
         display.textContent = 2;

});

const three = document.getElementsByClassName("three")[0];

three.addEventListener("click", () => {
         if (x!=="0") {
            y = 3;
         } else {
            x = 3;
         };
         console.log(x,y)
         display.textContent = 3;

});

const four = document.getElementsByClassName("four")[0];

four.addEventListener("click", () => {
    if (x!=="0") {
        y = 4;
     } else {
        x = 4;
     };
         display.textContent = 4;

});

const five = document.getElementsByClassName("five")[0];

five.addEventListener("click", () => {
    if (x!=="0") {
        y = 5;
     } else {
        x = 5;
     };
         display.textContent = 5;

});

const six = document.getElementsByClassName("six")[0];

six.addEventListener("click", () => {
    if (x!=="0") {
        y = 6;
     } else {
        x = 6;
     };
         display.textContent = 6;

});

const seven = document.getElementsByClassName("seven")[0];

seven.addEventListener("click", () => {
    if (x!=="0") {
        y = 7;
     } else {
        x = 7;
     };
         display.textContent = 7;

});

const eight = document.getElementsByClassName("eight")[0];

eight.addEventListener("click", () => {
    if (x!=="0") {
        y = 8;
     } else {
        x = 8;
     };
         display.textContent = 8;


});

const nine = document.getElementsByClassName("nine")[0];

nine.addEventListener("click", () => {
    if (x!=="0") {
        y = 9;
     } else {
        x = 9;
     };
         display.textContent = 9;

});

const zero = document.getElementsByClassName("zero")[0];

zero.addEventListener("click", () => {
    if (x!=="0") {
        y = 0;
     } else {
        x = 0;
     }
         display.textContent = 0;

});

const plus = document.getElementsByClassName("plus")[0];

plus.addEventListener("click", () => {
         operator = "+";
         display.textContent = "+";

});

const minus = document.getElementsByClassName("minus")[0];

minus.addEventListener("click", () => {
         operator = "-";
         display.textContent = "-";

});

const divid = document.getElementsByClassName("divid")[0];

divid.addEventListener("click", () => {
         operator = "/";
         display.textContent = "/";

});

const multi = document.getElementsByClassName("multi")[0];

multi.addEventListener("click", () => {
         operator = "*";
         display.textContent = "*";

});

// Function for the result button

//result function (x,y)



