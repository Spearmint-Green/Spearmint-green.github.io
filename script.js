function toggleNightMode() {
  const moonEmoji = "🌙";
  const sunEmoji = "☀️";
  const chanceOfMoon = 0.02; // Very small chance of moon (2%)

  const moonButton = document.querySelector(".moon");
  const isNightMode = document.body.classList.contains("night-mode");

  if (Math.random() < chanceOfMoon) {
    moonButton.textContent = "🌚"; // Rare moon variation
  } else {
    moonButton.textContent = isNightMode ? moonEmoji : sunEmoji;
  }

  document.body.classList.toggle("night-mode");
}
