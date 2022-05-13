function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    switch(operator){
        case "add":   return add(a,b); break;
        case "subtract":   return subtract(a,b); break;
        case "multiply":   return multiply(a,b); break;
        case "divide":   return divide(a,b); break;
    }
}

let display = document.getElementById('calculator').querySelector('.calc-screen');

let operators = Array.from(document.querySelectorAll('.operator'));
let numbers = Array.from(document.querySelectorAll('.number'));
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');

let num1 = null
let num2 = null;
let total = null;
let operator = null;
let input = ""

numbers.forEach(number => {
    number.addEventListener("click", () => {
        input += number.textContent;
        display.textContent = input;
    });
});

operators.forEach(op => {
    op.addEventListener('click', () => {
        if (num1===null){
            operator = convertHTML(op.textContent);
            num1 = parseInt(input);
            input = "";
        }
        else {
            if(input === ""){
                operator = convertHTML(op.textContent);
                return;
            }
            else{
                num2 = parseInt(input);
                total = operate(operator, num1, num2);
                operator = convertHTML(op.textContent);
                display.textContent = total;
                num1 = total;
                input = ""
                console.log(`num1: ${num1}`);
                console.log(`num2: ${num2}`);
                console.log(`operator: ${operator}`);
                console.log(`input: ${input}`);
                console.log(`total: ${total}`);
            }
        }
    });
});

function convertHTML(str){
    switch (str){
        case "\xF7": return "divide"; break;
        case "\xD7": return "multiply"; break;
        case "\x2B": return "add"; break;
        case "\u2212": return "subtract"; break;
    }
}

clear.addEventListener('click', () => {
    num1 = null; 
    num2 = null; 
    operator = null; 
    display.textContent = 0;
    input = ""; 
});

del.addEventListener('click', () => {
    display.textContent = "";
    input = "";
});
    

equal.addEventListener('click', () =>{
    if (input === ""){
        return;
    }
    else{
        num2 = parseInt(input);
        total = operate(operator, num1, num2);
        display.textContent = total;
        num1 = total;
        input = ""
        console.log(`num1: ${num1}`);
        console.log(`num2: ${num2}`);
        console.log(`operator: ${operator}`);
        console.log(`input: ${input}`);
        console.log(`total: ${total}`);
    }
});
                
                