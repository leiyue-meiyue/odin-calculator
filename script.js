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
  return a / b
}

let num1 = null;
let num2 = null;
let operator;

function operate(num1, num2, operator) {
  switch (operator) {
    case "add":
      return add(num1, num2)
      
    case "subtract":
      return subtract(num1, num2)

    case "multiply":
      return multiply(num1, num2)

    case "divide":
      return divide(num1, num2)
  }
}


// selectors
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const clear = document.querySelector("#clear");
const display = document.querySelector(".display");
const equals = document.querySelector("#equals");


// display
let displayNum = "";
let isAwaitingNext = false;

function updateDisplay(displayNum) {
  if (displayNum == "0") {
    display.textContent = "0";
  } else {
    display.textContent = displayNum;
  }
}


// buttons
one.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "1";
  updateDisplay(displayNum);
});

two.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "2";
  updateDisplay(displayNum);
});

three.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "3";
  updateDisplay(displayNum);
});

four.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "4";
  updateDisplay(displayNum);
});

five.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "5";
  updateDisplay(displayNum);
});

six.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "6";
  updateDisplay(displayNum);
});

seven.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "7";
  updateDisplay(displayNum);
});

eight.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "8";
  updateDisplay(displayNum);
});

nine.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  displayNum += "9";
  updateDisplay(displayNum);
});


// clear
function clearDisplay() {
  displayNum = "";
  updateDisplay("0");
  isAwaitingNext = false;
}

clear.addEventListener("click", () => clearDisplay());


// operator buttons
plus.addEventListener("click", () => {
  num1 = parseFloat(displayNum);
  operator = "add";
  isAwaitingNext = true;
})

equals.addEventListener("click", () => {
  num2 = parseFloat(displayNum);
  displayNum = operate(num1, num2, operator);
  updateDisplay(displayNum);
  isAwaitingNext = true;
})


// input first displaynum
// press plus -> num1 becomes displaynum
// when the next button is pressed, clear the display then update it
// press equals = num2 becomes displaynum
// call operate and update display
// next time click number, clear display and update it