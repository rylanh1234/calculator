function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator,number1,number2) {
    if (operator == "add") {
        return add(number1,number2)
    }
    else if (operator == "subtract") {
        return subtract(number1,number2)
    }
    else if (operator == "multiply") {
        return multiply(number1,number2)
    }
    else if (operator == "divide") {
        return divide(number1,number2)
    }
}

let number1 = button.id;
let number2 = button.id;
let operator = button.id;
