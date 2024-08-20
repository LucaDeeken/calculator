
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




// functions for buttons, which store the values of the pressed numbers & operators

let array = [];

let displayValue = 0;

const display = document.getElementById("outerDisplay");
display.textContent = displayValue;















let one1 = 0;

function displayNum () {



}




const one = document.getElementsByClassName("one")[0];

one.addEventListener("click", () => {
         one1 = 1;
         array.push(one1);
         display.textContent = one1;

});

let two1 = 0;
const two = document.getElementsByClassName("two")[0];

one.addEventListener("click", () => {
         two1 = 2;
         array.push(two1);

});

let three1 = 0;
const three = document.getElementsByClassName("three")[0];

three.addEventListener("click", () => {
         three1 = 3;
         array.push(three1);

});

let four1 = 0;
const four = document.getElementsByClassName("four")[0];

four.addEventListener("click", () => {
         four1 = 4;
         array.push(four1);

});

let five1 = 0;
const five = document.getElementsByClassName("five")[0];

five.addEventListener("click", () => {
         five1 = 5;
         array.push(five1);

});

let six1 = 0;
const six = document.getElementsByClassName("six")[0];

one.addEventListener("click", () => {
         six1 = 6;
         array.push(six1);

});

let seven1 = 0;
const seven = document.getElementsByClassName("seven")[0];

seven.addEventListener("click", () => {
         seven1 = 7;
         array.push(seven1);

});

let eight1 = 0;
const eight = document.getElementsByClassName("eight")[0];

eight.addEventListener("click", () => {
         eight1 = 8;
         array.push(eight1);

});

let nine1 = 0;
const nine = document.getElementsByClassName("nine")[0];

nine.addEventListener("click", () => {
         nine1 = 9;
         array.push(nine1);

});

let zero1 = 0;
const zero = document.getElementsByClassName("zero")[0];

zero.addEventListener("click", () => {
         zero1 = 0;
         array.push(zero1);

});

let plus1 = 0;
const plus = document.getElementsByClassName("plus")[0];

plus.addEventListener("click", () => {
         plus1 = "+";
         array.push(plus1);

});

let minus1 = 0;
const minus = document.getElementsByClassName("minus")[0];

minus.addEventListener("click", () => {
         minus1 = "-";
         array.push(minus1);

});

let divid1 = 0;
const divid = document.getElementsByClassName("divid")[0];

divid.addEventListener("click", () => {
         divid1 = "/";
         array.push(divid1);

});

let multi1 = 0;
const multi = document.getElementsByClassName("multi")[0];

multi.addEventListener("click", () => {
         multi1 = "*";
         array.push(multi1);

});



