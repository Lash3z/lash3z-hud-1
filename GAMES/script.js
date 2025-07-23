
const correctCode = "42817";
const maxPrize = 42.30;

function submitCode() {
  const input = document.getElementById("codeInput").value;
  const feedback = document.getElementById("feedback");
  const prizeBox = document.getElementById("prizeBox");
  const prizeAmount = document.getElementById("prizeAmount");

  if (input.length !== 5 || isNaN(input)) {
    feedback.textContent = "Please enter a valid 5-digit code.";
    prizeBox.classList.add("hidden");
    return;
  }

  let correctDigits = 0;
  let correctPosition = 0;

  for (let i = 0; i < 5; i++) {
    if (input.includes(correctCode[i])) correctDigits++;
    if (input[i] === correctCode[i]) correctPosition++;
  }

  if (input === correctCode) {
    const prize = Math.random() * (maxPrize - 5) + 5;
    const rounded = Math.round(prize * 100) / 100;
    prizeAmount.textContent = `$${rounded.toFixed(2)}`;
    feedback.textContent = "✅ Vault unlocked!";
    prizeBox.classList.remove("hidden");
  } else {
    feedback.textContent = `${correctDigits} digit(s) correct, ${correctPosition} in correct position.`;
    prizeBox.classList.add("hidden");
  }
}
