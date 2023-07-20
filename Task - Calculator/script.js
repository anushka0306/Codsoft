let displayValue = '';

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  let result;
  try {
    result = eval(displayValue);
  } catch (error) {
    result = 'Error';
  }
  updateDisplay(result);
  displayValue = result;
}

function updateDisplay(value) {
  const display = document.getElementById('display');
  if (value) {
    display.value = value;
  } else {
    display.value = displayValue;
  }
}

// Listen for keyboard events
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (/[0-9+\-*/.=]|Enter|Backspace|Delete/i.test(key)) {
    event.preventDefault();
    if (key === 'Enter' || key === '=') {
      calculate();
    } else if (key === 'Backspace' || key === 'Delete') {
      displayValue = displayValue.slice(0, -1);
      updateDisplay();
    } else {
      appendValue(key);
    }
  }
});
