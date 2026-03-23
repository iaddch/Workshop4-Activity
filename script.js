const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");
const statusText = document.getElementById("statusText");

const greetBtn = document.getElementById("greetBtn");
const clearBtn = document.getElementById("clearBtn");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const countBtn = document.getElementById("countBtn");
const statusBtn = document.getElementById("statusBtn");

// Starter example 1
const formatName = (name) => name.trim();

// Starter example 2
greetBtn.addEventListener("click", () => {
  output.textContent = `Hello, ${formatName(nameInput.value)}!`;
});

// Starter example 3
clearBtn.addEventListener("click", () => {
  output.textContent = "Output will appear here.";
});

subtitle.textContent = "This dashboard";