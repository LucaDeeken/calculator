
//variables for calc-operations
let x = "0";
let y = "0";
let operator = 0;

// function for display

let displayValue = 0;
const display = document.getElementById("outerDisplay");
display.textContent = displayValue;
const MAX_LENGTH = 11; 

// functions for buttons, which store the values of the pressed numbers & operators 
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {

numbers[i].addEventListener("mousedown", () => {
    numbers[i].style.backgroundColor = "rgb(127, 211, 161)";
});
numbers[i].addEventListener("mouseup", () => {
    numbers[i].style.backgroundColor = "rgb(192, 248, 214)";
});

numbers[i].addEventListener("click",() => {
   
    if (String(x).length >= MAX_LENGTH || String(y).length >= MAX_LENGTH || String(sum).length >= MAX_LENGTH) {
        display.textContent = "Num too big";
    }
       else if (y!=="0") {
        y = String(y +numbers[i].textContent);
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = numbers[i].textContent;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x + numbers[i].textContent);
        display.textContent = x;
     } else if (operator===0) {
        x = numbers[i].textContent;
        display.textContent = x;
     };
});
};

const com = document.getElementsByClassName("com")[0];

com.addEventListener("mousedown", () => {
    com.style.backgroundColor = "rgb(127, 211, 161)";
});
com.addEventListener("mouseup", () => {
    com.style.backgroundColor = "rgb(192, 248, 214)";
});

com.addEventListener("click", () => {
    
    if (String(x).length >= MAX_LENGTH || String(y).length >= MAX_LENGTH || String(sum).length >= MAX_LENGTH) {
        display.textContent = "Num too big";
    }
    else if (y.toString().includes(".")) {
        nothing = "nope, you can't create a number with two dots.";
        console.log(y);
        console.log(x);
    } else if (y!=="0") {
        y = y +".";
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = y+".";
        display.textContent = y;
     } else if (x.toString().includes(".")) {
        nothing = "nope";
    }  else if (x!=="0" && operator===0) {
        x = x +".";
        display.textContent = x;
     } else if (operator===0) {
        x =  x +".";
        display.textContent = x;
     };
});

const plus = document.getElementsByClassName("plus")[0];

let sum = "0";
let plusOperator = false;
let minusOperator = false;
let dividOperator = false;
let multiOperator = false;
let nothing = "I'm doing nothing";

function plusCalc () {
    if (sum !=="0" && plusOperator === true ) {
        sum+= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        plusOperator = false;
    } else if (plusOperator === true && x !=="0" && y !=="0") {
        sum = (Number(x)+Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        plusOperator = false;
    };
};

function minusCalc () {
    if (sum !=="0" && minusOperator === true) {
        sum-= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        minusOperator = false;
    } else if (x !=="0" && y !=="0" && minusOperator === true) {
        sum = (Number(x)-Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        minusOperator = false;

    };
};

function dividCalc () {
    if (sum !=="0" && dividOperator === true ) {
        sum/= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        dividOperator = false;
    } else if (dividOperator === true && x !=="0" && y !=="0") {
        sum = (Number(x)/Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        dividOperator = false;
    };
};

function multiCalc () {
    if (sum !=="0" && multiOperator === true ) {
        sum*= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        multiOperator = false;
    } else if (multiOperator === true && x !=="0" && y !=="0") {
        sum = (Number(x)*Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
        multiOperator = false;
    };
};

function avoidDoubleZeroError () {
    if (x ==="0" && y === "0") {
        display.textContent = 0;
    };
};

function numTooBig () {
    if (String(x).length >= MAX_LENGTH || String(y).length >= MAX_LENGTH || String(sum).length >= MAX_LENGTH) {
        display.textContent = "Num too big";
    };
};

plus.addEventListener("mousedown", () => {
plus.style.backgroundColor = "rgb(140, 140, 236)";
});

plus.addEventListener("mouseup", () => {
        plus.style.backgroundColor = "rgb(187, 187, 243)";
});

plus.addEventListener("click", () => {
        operator = "+";
        plusOperator = true;
        avoidDoubleZeroError ()  
        // if constructions for inclucding the previous calculations
        minusCalc ();
        dividCalc ();
        multiCalc ();
        // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
        if (sum !==0 && y ==="0") {
            nothing = "I'm doing nothing except blocking the zero, hihi";
        } else if (sum === 0 && y === "0") {
            nothing ="again?";      
        } else if (sum !=="0") {
            sum+= Number(y);
            sum = Math.round(sum *1000) / 1000;
            display.textContent = sum;
            y = "0";
        } else if (x !=="0" && y !=="0") {
            sum = (Number(x)+Number(y));
            sum = Math.round(sum *1000) / 1000;
            display.textContent = sum;
            y = "0";
        };
        numTooBig ();
    });


const minus = document.getElementsByClassName("minus")[0];

minus.addEventListener("mousedown", () => {
minus.style.backgroundColor = "rgb(140, 140, 236)";
});

minus.addEventListener("mouseup", () => {
        minus.style.backgroundColor = "rgb(187, 187, 243)";
});

minus.addEventListener("click", () => {
    operator = "-";
    minusOperator = true;
    avoidDoubleZeroError ()
    plusCalc ();
    dividCalc ();
    multiCalc ();
    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "Ich tue nichts, außer die null zu blockieren, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum-= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = (Number(x)-Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
    
    };
    numTooBig ();
});

const divid = document.getElementsByClassName("divid")[0];

divid.addEventListener("mousedown", () => {
divid.style.backgroundColor = "rgb(140, 140, 236)";
});

divid.addEventListener("mouseup", () => {
        divid.style.backgroundColor = "rgb(187, 187, 243)";
});

divid.addEventListener("click", () => {
    operator = "/";
    dividOperator = true;
    avoidDoubleZeroError ();
    plusCalc ();
    minusCalc ();
    multiCalc ();
    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "I'm doing nothing except blocking the zero, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum/= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = (Number(x)/Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";       
    };

    numTooBig ();
});

const multi = document.getElementsByClassName("multi")[0];

multi.addEventListener("mousedown", () => {
multi.style.backgroundColor = "rgb(140, 140, 236)";
});

multi.addEventListener("mouseup", () => {
        multi.style.backgroundColor = "rgb(187, 187, 243)";
});

multi.addEventListener("click", () => {
    operator = "*";
    multiOperator = true;
    avoidDoubleZeroError (); 
    plusCalc ();    
    minusCalc ();
    dividCalc (); 
    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "I'm doing nothing except blocking the zero, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum*= Number(y);
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = (Number(x)*Number(y));
        sum = Math.round(sum *1000) / 1000;
        display.textContent = sum;
        y = "0";        
    };
    numTooBig ();
});

// Function for the result button

const results = document.getElementsByClassName("result")[0];

results.addEventListener("mousedown", () => {
    results.style.backgroundColor = "rgb(90, 159, 224)";
    });  
results.addEventListener("mouseup", () => {
    results.style.backgroundColor = "rgb(154, 193, 230)";
    });

 results.addEventListener ("click", () => {
  
    avoidDoubleZeroError ();
    plusCalc ();
    minusCalc ();
    dividCalc ();
    multiCalc ();
    numTooBig ();
});

const clear = document.getElementsByClassName("undo")[0];

clear.addEventListener("mousedown", () => {
    clear.style.backgroundColor = "rgb(90, 159, 224)";
    }); 
clear.addEventListener("mouseup", () => {
        clear.style.backgroundColor = "rgb(154, 193, 230)";
    });

clear.addEventListener("click", () => {

    plusOperator = false;
    minusOperator = false;
    dividOperator = false;
    multiOperator = false;
    x = "0";
    y = "0";
    sum = "0";
    operator = 0;
    display.textContent = sum;
});