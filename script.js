let currentNumber;
let previousNumber;
let currentOperator;
let currentValue = 0;


function buttonHandler() {
  const buttonClassList = this.classList;

  // If the button that was clicked is a number button, concatenate numbers as a string until operator btn is pressed
  if (buttonClassList.contains('number')) {
    if (!currentNumber) {
      currentNumber = this.innerHTML;
    } else {
      currentNumber = currentNumber.concat(this.innerHTML);
    }
  // Else if button that was clicked is an operator, capture number string and set prevNum, currNum, and operator
  } else if (buttonClassList.contains('operator')) {
    previousNumber = currentNumber;
    currentNumber = null;
    currentOperator = this.innerHTML;
  };

  currentCalculation(previousNumber, currentNumber, currentOperator);
};


function currentCalculation(previousNum, currentNum, currentOp) {
  // Handle if currentOp is undefined so that no error gets thrown
  currentValue = eval(`${previousNum} ${currentOp} ${currentNum}`);
  console.log(currentValue);
};


// Select all button elements on the page
const buttons = document.querySelectorAll('button');


// Attach click handler to all buttons
for (const button of buttons) {
  button.addEventListener('click', buttonHandler);
};



