const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const equalsBtn = document.getElementById("equals");
const doubleZeroBtn = document.getElementById("00");

// Add click listeners to all buttons
buttons.forEach((button) => {
  const value = button.getAttribute("data-value");

  button.addEventListener("click", () => {
    if (value) {
      display.value += value;
    }
  });
});

// Double zero button
doubleZeroBtn.addEventListener("click", () => {
  display.value += "00";
});

// Clear display
clearBtn.addEventListener("click", () => {
  display.value = "";
});

// Backspace functionality
backspaceBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

// Evaluate expression on "="
equalsBtn.addEventListener("click", () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => (display.value = ""), 1500);
  }
});

// Keyboard input support
document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789+-*/.";

  if (allowedKeys.includes(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    equalsBtn.click();
  } else if (event.key === "Backspace") {
    backspaceBtn.click();
  } else if (event.key.toLowerCase() === "c") {
    clearBtn.click();
  }
});

