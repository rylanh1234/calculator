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
    number1 = Number(number1);
    number2 = Number(number2)
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
function clearCalculator() {
    number1 = "";
    number2 = "";
    operator = "";
    operatorN = "";
    operateAfter = "";
    displayValue.textContent = "0";
    calculationComplete = false;
}
let number1 = "";
let number2 = "";
let operator = "";
let operatorN = "";
let operateAfter = "";
let calculationComplete = false;
const maxLength = 19;
const numericalValues = "1234567890";
const buttons = document.querySelectorAll("button")
const displayValue = document.querySelector(".displayText")
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.id == "clear") {
            clearCalculator()
        }
        else if (numericalValues.includes(button.id) && displayValue.textContent.length < maxLength) {
            if (calculationComplete) {
                clearCalculator()
            }
            if (operator == "") {
                number1 += button.id;
                displayValue.textContent = number1;

            }
            else if (operator !== "" && operatorN == "") {
                if (number2 == undefined) {
                    number2 = button.id;
                    displayValue.textContent += button.id;
                }
                else {
                    number2 += button.id;
                    displayValue.textContent += button.id;
                }

            }
            else if (operatorN !== "") {
                operateAfter += button.id;
                displayValue.textContent += button.id;

            }
        }
        else if (button.classList.contains("operator")
            && numericalValues.includes(displayValue.textContent[displayValue.textContent.length - 1])
            && displayValue.textContent.length < maxLength) {
            if (operator == "") {
                displayValue.textContent += button.innerText;
                operator = button.id;
            }
            else if (operator !== "") {
                displayValue.textContent += button.innerText;
                operatorN = button.id;
                operateAfter += button.innerText;
            }
        }
        else if (button.id == "equals") {
            if (number2 == "" || number2 == undefined) {
                displayValue.textContent = number1;
            }
            else {
                displayValue.textContent = operate(operator, number1, number2) + operateAfter
                number1 = operate(operator, number1, number2)
                if (operateAfter[0] == "+") {
                    operator = "add";
                }
                else if (operateAfter[0] == "-") {
                    operator = "subtract"
                }
                else if (operateAfter[0] == "×") {
                    operator = "multiply"
                }
                else if (operateAfter[0] == "÷") {
                    operator = "divide"
                }
                number2 = operateAfter.split(/[-+×÷]/).filter(Boolean)[0] // - at beginning to ensure interpretation as literal instead of hyphen
                if (number2 !== undefined) {
                    operateAfter = operateAfter.slice(number2.length + 1)
                }
                else if (operateAfter == "") {
                    operatorN = "";
                    operator = "";
                    calculationComplete = true;
                }
            }
        }
    })
})
