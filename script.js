

//variables for calc-operations

let x = "0";
let y = "0";
let operator = 0;



// function for display


let displayValue = 0;

const display = document.getElementById("outerDisplay");
display.textContent = displayValue;

// functions for buttons, which store the values of the pressed numbers & operators 

const one = document.getElementsByClassName("one")[0];


one.addEventListener("mousedown", () => {
one.style.backgroundColor = "rgb(127, 211, 161)";
});

one.addEventListener("mouseup", () => {
    one.style.backgroundColor = "rgb(192, 248, 214)";
});


one.addEventListener("click", () => {



      if (y!=="0") {
        y = String(y);
        y = Number(y +"1");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 1;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"1");
        display.textContent = x;
     } else if (operator===0) {
        x = 1;
        display.textContent = x;
     };
         console.log(x);
         console.log(y);

});

const two = document.getElementsByClassName("two")[0];

two.addEventListener("mousedown", () => {
two.style.backgroundColor = "rgb(127, 211, 161)";
});

two.addEventListener("mouseup", () => {
    two.style.backgroundColor = "rgb(192, 248, 214)";
});

two.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"2");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 2;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"2");
        display.textContent = x;
     } else if (operator===0) {
        x = 2;
        display.textContent = x;
     };


});

const three = document.getElementsByClassName("three")[0];

three.addEventListener("mousedown", () => {
three.style.backgroundColor = "rgb(127, 211, 161)";
});

three.addEventListener("mouseup", () => {
    three.style.backgroundColor = "rgb(192, 248, 214)";
});


three.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"3");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 3;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"3");
        display.textContent = x;
     } else if (operator===0) {
        x = 3;
        display.textContent = x;
     };

});

const four = document.getElementsByClassName("four")[0];

four.addEventListener("mousedown", () => {
four.style.backgroundColor = "rgb(127, 211, 161)";
});

four.addEventListener("mouseup", () => {
    four.style.backgroundColor = "rgb(192, 248, 214)";
});

four.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"4");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 4;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"4");
        display.textContent = x;
     } else if (operator===0) {
        x = 4;
        display.textContent = x;
     };

});

const five = document.getElementsByClassName("five")[0];


five.addEventListener("mousedown", () => {
five.style.backgroundColor = "rgb(127, 211, 161)";
});

five.addEventListener("mouseup", () => {
    five.style.backgroundColor = "rgb(192, 248, 214)";
});


five.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"5");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 5;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"5");
        display.textContent = x;
     } else if (operator===0) {
        x = 5;
        display.textContent = x;
     };

});

const six = document.getElementsByClassName("six")[0];

six.addEventListener("mousedown", () => {
six.style.backgroundColor = "rgb(127, 211, 161)";
});

six.addEventListener("mouseup", () => {
    six.style.backgroundColor = "rgb(192, 248, 214)";
});

six.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"6");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 6;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"6");
        display.textContent = x;
     } else if (operator===0) {
        x = 6;
        display.textContent = x;
     };

});

const seven = document.getElementsByClassName("seven")[0];

seven.addEventListener("mousedown", () => {
    seven.style.backgroundColor = "rgb(127, 211, 161)";
    });
    
    seven.addEventListener("mouseup", () => {
        seven.style.backgroundColor = "rgb(192, 248, 214)";
    });

seven.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"7");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 7;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"7");
        display.textContent = x;
     } else if (operator===0) {
        x = 7;
        display.textContent = x;
     };

});

const eight = document.getElementsByClassName("eight")[0];

eight.addEventListener("mousedown", () => {
    eight.style.backgroundColor = "rgb(127, 211, 161)";
    });
    
    eight.addEventListener("mouseup", () => {
        eight.style.backgroundColor = "rgb(192, 248, 214)";
    });

eight.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"8");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 8;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"8");
        display.textContent = x;
     } else if (operator===0) {
        x = 8;
        display.textContent = x;
     };


});

const nine = document.getElementsByClassName("nine")[0];

nine.addEventListener("mousedown", () => {
nine.style.backgroundColor = "rgb(127, 211, 161)";
});

nine.addEventListener("mouseup", () => {
    nine.style.backgroundColor = "rgb(192, 248, 214)";
});

nine.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"9");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 9;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"9");
        display.textContent = x;
     } else if (operator===0) {
        x = 9;
        display.textContent = x;
     };

});

const zero = document.getElementsByClassName("zero")[0];

zero.addEventListener("mousedown", () => {
zero.style.backgroundColor = "rgb(127, 211, 161)";
});

zero.addEventListener("mouseup", () => {
    zero.style.backgroundColor = "rgb(192, 248, 214)";
});


zero.addEventListener("click", () => {
    if (y!=="0") {
        y = String(y);
        y = Number(y +"0");
        display.textContent = y;
    } else if (x!=="0" && operator!==0) {
        y = 0;
        display.textContent = y;
     } else if (x!=="0" && operator===0) {
        x = String(x);
        x = Number(x +"0");
        display.textContent = x;
     } else if (operator===0) {
        x = 0;
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

plus.addEventListener("mousedown", () => {
plus.style.backgroundColor = "rgb(140, 140, 236)";
});

plus.addEventListener("mouseup", () => {
        plus.style.backgroundColor = "rgb(187, 187, 243)";
});

plus.addEventListener("click", () => {
        operator = "+";
        plusOperator = true;

        // if construct for avoiding double-zero-error
        if (x ==="0" && y === "0") {
            display.textContent = 0;
        };
        
        // if constructions for inclucding the previous calculations
        if (sum !=="0" && minusOperator === true) {
            sum-= y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
            minusOperator = false;
        } else if (x !=="0" && y !=="0" && minusOperator === true) {
            sum = x-y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
            minusOperator = false;
    
        };

        if (sum !=="0" && dividOperator === true ) {
            sum/= y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
            dividOperator = false;
        } else if (dividOperator === true && x !=="0" && y !=="0") {
            sum = x/y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
            dividOperator = false;
        };

        if (sum !=="0" && multiOperator === true ) {
            sum*= y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
            multiOperator = false;
        } else if (multiOperator === true && x !=="0" && y !=="0") {
            sum = x*y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
            multiOperator = false;
        };

    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
        if (sum !==0 && y ==="0") {
            nothing = "I'm doing nothing except blocking the zero, hihi";
        } else if (sum === 0 && y === "0") {
            nothing ="again?";      
        } else if (sum !=="0") {
            sum+= y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
        } else if (x !=="0" && y !=="0") {
            sum = x+y;
            display.textContent = Math.round(sum *1000) / 1000;
            y = "0";
    
        };

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

    // if construct for avoiding double-zero-error
    if (x ==="0" && y === "0") {
        display.textContent = 0;
    };

    // if constructions for inclucding the previous calculations
    if (sum !=="0" && plusOperator === true ) {
    sum+= y;
    display.textContent = Math.round(sum *1000) / 1000;
    y = "0";
    plusOperator = false;
    } else if (plusOperator === true && x !=="0" && y !=="0") {
        sum = x+y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    };

    if (sum !=="0" && dividOperator === true ) {
        sum/= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        dividOperator = false;
    } else if (dividOperator === true && x !=="0" && y !=="0") {
        sum = x/y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        dividOperator = false;
    };

    if (sum !=="0" && multiOperator === true ) {
        sum*= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        multiOperator = false;
    } else if (multiOperator === true && x !=="0" && y !=="0") {
        sum = x*y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        multiOperator = false;
    };
    
    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "Ich tue nichts, außer die null zu blockieren, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum-= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = x-y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
    
    };

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

    // if construct for avoiding double-zero-error
    if (x ==="0" && y === "0") {
    display.textContent = 0;
    };
     
    // if constructions for inclucding the previous calculations
    if (sum !=="0" && plusOperator === true ) {
        sum+= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    } else if (plusOperator === true && x !=="0" && y !=="0") {
        sum = x+y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    };
     

    if (sum !=="0" && minusOperator === true) {
        sum-= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        minusOperator = false;
    } else if (x !=="0" && y !=="0" && minusOperator === true) {
        sum = x-y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        minusOperator = false;

    };

    if (sum !=="0" && multiOperator === true ) {
        sum*= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        multiOperator = false;
    } else if (multiOperator === true && x !=="0" && y !=="0") {
        sum = x*y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        multiOperator = false;
    };


    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "I'm doing nothing except blocking the zero, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum/= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = x/y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
         
    };

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

    // if construct for avoiding double-zero-error
    if (x ==="0" && y === "0") {
        display.textContent = 0;
    };
          
    // if constructions for inclucding the previous calculations
    if (sum !=="0" && plusOperator === true ) {
        sum+= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    } else if (plusOperator === true && x !=="0" && y !=="0") {
        sum = x+y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    };
          
     
    if (sum !=="0" && minusOperator === true) {
        sum-= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        minusOperator = false;
    } else if (x !=="0" && y !=="0" && minusOperator === true) {
        sum = x-y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        minusOperator = false;
     
    };

    if (sum !=="0" && dividOperator === true ) {
        sum/= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        dividOperator = false;
    } else if (dividOperator === true && x !=="0" && y !=="0") {
        sum = x/y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        dividOperator = false;
    };
     
    
    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "I'm doing nothing except blocking the zero, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum*= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = x*y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
              
    };

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
  
       // if construct for avoiding double-zero-error
       if (x ==="0" && y === "0") {
        display.textContent = 0;
    };
          
    // if constructions for inclucding the previous calculations
    if (sum !=="0" && plusOperator === true ) {
        sum+= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    } else if (plusOperator === true && x !=="0" && y !=="0") {
        sum = x+y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        plusOperator = false;
    };
          
     
    if (sum !=="0" && minusOperator === true) {
        sum-= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        minusOperator = false;
    } else if (x !=="0" && y !=="0" && minusOperator === true) {
        sum = x-y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        minusOperator = false;
     
    };

    if (sum !=="0" && dividOperator === true ) {
        sum/= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        dividOperator = false;
    } else if (dividOperator === true && x !=="0" && y !=="0") {
        sum = x/y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        dividOperator = false;
    };

    if (sum !=="0" && multiOperator === true ) {
        sum*= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        multiOperator = false;
    } else if (multiOperator === true && x !=="0" && y !=="0") {
        sum = x*y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
        multiOperator = false;
    };
     
    
    // if-tree starting with two conditions, which again prevent the double-zero error, then including the calculations associated with the operations-button
    if (sum !==0 && y ==="0") {
        nothing = "I'm doing nothing except blocking the zero, hihi";
    } else if (sum === 0 && y === "0") {
        nothing ="again?";
    } else if (sum !=="0") {
        sum*= y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
    } else if (x !=="0" && y !=="0") {
        sum = x*y;
        display.textContent = Math.round(sum *1000) / 1000;
        y = "0";
              
    };

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


