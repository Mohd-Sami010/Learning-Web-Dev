const input = document.getElementById("input");
const answerText = document.getElementById("ans");

function Calculate() {
  let expression = input.value.trim();

  // Replace accidental double spaces
  expression = expression.replace(/\s+/g, '');

  // Validate: allow only numbers and + - * / . ( )
  if (!/^[0-9+\-*/().]+$/.test(expression)) {
    answerText.textContent = "Invalid Input";
    return;
  }

  try {
    // Use Function constructor (safer than eval)
    const ans = new Function(`return (${expression})`)();
    answerText.textContent = ans;
  } catch {
    answerText.textContent = "Error";
  }
}
