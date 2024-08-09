function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) {
        return "ERROR"
    }
    else {
        return a / b
    }
}

function operate(operator, number1, number2) {
    if (operator == "add") {
        return add(number1, number2)
    }
    else if (operator == "subtract") {
        return subtract(number1, number2)
    }
    else if (operator == "multiply") {
        return multiply(number1, number2)
    }
    else if (operator == "divide") {
        return divide(number1, number2)
    }
}

let number1 = 0;
let number2 = 0;
let operator = "";
let userInput = "";
const buttons = document.querySelectorAll("button")
const displayValue = document.querySelector(".displayText")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userInput = button.id
        displayValue.textContent = Number(userInput);
    })
})
