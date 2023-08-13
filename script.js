let isNightMode = false;
const moonEmoji = "🌙";
const sunEmoji = "☀️";
const chanceOfMoon = 0.02; // 2% chance

function toggleNightMode() {
  const moonButton = document.querySelector(".moon");

  if (!isNightMode) {
    isNightMode = true;
    moonButton.textContent = sunEmoji;
  } else {
    const randomValue = Math.random();
    if (randomValue < chanceOfMoon) {
      moonButton.textContent = "🌚"; // Rare moon variation
    } else {
      moonButton.textContent = moonEmoji;
    }
    isNightMode = false;
  }

  document.body.classList.toggle("night-mode");
}
