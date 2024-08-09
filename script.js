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
const numericalValues = "1234567890";
const buttons = document.querySelectorAll("button")
const displayValue = document.querySelector(".displayText")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userInput = button.id
        if (button.id == "clear") {
            number1 = 0;
            number2 = 0;
            operator = "";
            userInput = "";
            displayValue.textContent = "0";
        }
        else if (numericalValues.includes(button.id)) {
            displayValue.textContent = button.id;
        }
        else if (button.classList.contains("operator")) {
            displayValue.textContent = button.innerText;
            operator = button.id;
        }
        else if (button.id == "equals") {
            displayValue.textContent = operate(operator,number1,number2)
        }
    })
})
