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
const decimal = document.querySelector("#decimal");


// display
let displayNum = "";
let isAwaitingNext = false;
let hasEqualsBeenPressed = false;
let hasOperatorBeenPressed = false;

function updateDisplay(displayNum) {
  if (displayNum == "0") {
    display.textContent = "0";
  } else {
    if (displayNum > 999999999) {
      display.textContent = "too big";
    } else {
      displayNum = displayNum.toString().substring(0, 9);
      display.textContent = displayNum;
    }
  }
}


// buttons
zero.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return          // curb length
  if (displayNum == '') return
  displayNum += "0";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
})

one.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return          // curb length
  displayNum += "1";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

two.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "2";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

three.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "3";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

four.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "4";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

five.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "5";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

six.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "6";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

seven.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "7";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

eight.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "8";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

nine.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  displayNum += "9";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
});

decimal.addEventListener("click", () => {
  if (isAwaitingNext) clearDisplay();
  if (displayNum.length >= 9) return
  if (displayNum.indexOf(".") != -1) return
  displayNum += ".";
  hasOperatorBeenPressed = false;
  updateDisplay(displayNum);
})


// clear
function clearDisplay() {
  displayNum = "";
  updateDisplay("0");
  isAwaitingNext = false;
}

clear.addEventListener("click", () => {
  clearDisplay();
  resetNums();
});

function resetNums() {
  num1 = null;
  num2 = null;
  operator = "";
}


// operator buttons
plus.addEventListener("click", () => {
  // do nothing if an operator is the first thing that is pressed
  if (!num1 && !num2 && (displayNum == '')) return
  // if num + num + operator, perform the operation and update the display
  if ((num1 != null) && (!hasEqualsBeenPressed) && !hasOperatorBeenPressed) {
    num2 = parseFloat(displayNum);
    displayNum = operate(num1, num2, operator);
    updateDisplay(displayNum);
  }
  // set num1 to displayNum and await operation
  if (displayNum == '') displayNum = 0;
  num1 = parseFloat(displayNum);
  operator = "add";
  isAwaitingNext = true;
  hasEqualsBeenPressed = false;
  hasOperatorBeenPressed = true;
})

minus.addEventListener("click", () => {
  if (!num1 && !num2 && (displayNum == '')) return
  if ((num1 != null) && (!hasEqualsBeenPressed) && !hasOperatorBeenPressed) {
    num2 = parseFloat(displayNum);
    displayNum = operate(num1, num2, operator);
    updateDisplay(displayNum);
  }
  if (displayNum == '') displayNum = 0;
  num1 = parseFloat(displayNum);
  operator = "subtract";
  isAwaitingNext = true;
  hasEqualsBeenPressed = false;
  hasOperatorBeenPressed = true;
})

multiplyBtn.addEventListener("click", () => {
  if (!num1 && !num2 && (displayNum == '')) return
  if ((num1 != null) && (!hasEqualsBeenPressed) && !hasOperatorBeenPressed) {
    num2 = parseFloat(displayNum);
    displayNum = operate(num1, num2, operator);
    updateDisplay(displayNum);
  }
  if (displayNum == '') displayNum = 0;
  num1 = parseFloat(displayNum);
  operator = "multiply";
  isAwaitingNext = true;
  hasEqualsBeenPressed = false;
  hasOperatorBeenPressed = true;
})

divideBtn.addEventListener("click", () => {
  if (!num1 && !num2 && (displayNum == '')) return
  if ((num1 != null) && (!hasEqualsBeenPressed) && !hasOperatorBeenPressed) {
    num2 = parseFloat(displayNum);
    displayNum = operate(num1, num2, operator);
    updateDisplay(displayNum);
  }
  if (displayNum == '') displayNum = 0;
  num1 = parseFloat(displayNum);
  operator = "divide";
  isAwaitingNext = true;
  hasEqualsBeenPressed = false;
  hasOperatorBeenPressed = true;
})

equals.addEventListener("click", () => {
  if (!num1) return         // do nothing if no operator
  num2 = parseFloat(displayNum);
  displayNum = operate(num1, num2, operator);
  updateDisplay(displayNum);
  isAwaitingNext = true;
  hasEqualsBeenPressed = true;
})

