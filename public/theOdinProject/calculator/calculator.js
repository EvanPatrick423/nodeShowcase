//-----Setting Up EventListener
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const pointButton = document.querySelector("[data-point]");
const screen = document.querySelector("[data-screen]");


let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

//---------------------------------------------------------
//-----EventListener functions
window.addEventListener("keydown", setInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);


//-----Screen Functions
//Add number to screen
function appendNumber(number) {
  //console.log('appendNumber function started')
  if (screen.textContent === "0" || shouldResetScreen) {
    //console.log('screen reset when appending ' + number);
    resetScreen();
  }
  screen.textContent += number;
}
//Clear Screen Text and then resets shouldResetScreen variable
function resetScreen() {
  screen.textContent = "";
  shouldResetScreen = false;
  //console.log('resetScreen currently false');
}
//Clear Screen Function, clears screen and resets screen text
function clear() {
  screen.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

//Add Point to Screen if Not already there
function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (screen.textContent === "") screen.textContent = "0";
  if (screen.textContent.includes(".")) {
    //console.log('already has . on screen')
    return;
  }
  screen.textContent += ".";
}

//Delete last number on screen
function deleteNumber() {
  screen.textContent = screen.textContent.toString().slice(0, -1);
}
//Set operator
function setOperation(operator) {
  console.log(operator);
  if (currentOperation !== null) evaluate(); //if already a operator stored evaluate operation and return result
  firstOperand = screen.textContent;//set first number
  currentOperation = operator;//set operator
  if (operator !== 'x!') {
    shouldResetScreen = true;
    console.log('resetscreen is set to true');
  }
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) {
    console.log('evaluate did nothing');
    return;//if operation is not already set return nothing and wait for operation
  }
  if (currentOperation === "÷" && screen.textContent === "0") {//does it divide by zero check
    alert("You can't divide by 0!");
    clear();//clears all data stored so no divide by zero accidentally
    return;
  }
  //If Passes, Take Second number from screen and do operation
  secondOperand = screen.textContent;
  console.log('secondOperand = ' + secondOperand)
  screen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  //clear variables after operation
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function setInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key ==="x!")
    setOperation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === "/") return "÷";
  if (keyboardOperator === "*") return "×";
  if (keyboardOperator === "-") return "−";
  if (keyboardOperator === "+") return "+";
  if (keyboardOperator === "x!") {
    console.log('x! converted to !');
    return "!";
  }
}
//-----Math Operation Functions
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function factorial(a) {
  console.log('factorial function used');
	if (a == 0) return 1;
	let product = 1;
	for (let i = a; i > 0; i--) {
	  product *= i;
	}
	return product;
}

function power(a, b) {
  console.log('power function used');
  return Math.pow(a, b);
}
//-----Decides What Math Operation to Use
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "−":
      return substract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) {
        return null;
      } else {
        return divide(a, b);
      }
    case "x!":
      console.log('case ! was activated');
      return factorial(a);
    case "x^y":
      console.log('case x^y was activated');
      return power(a,b);
    default:
      return null;
  }
}
