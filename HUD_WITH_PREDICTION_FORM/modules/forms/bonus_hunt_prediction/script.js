
document.addEventListener('DOMContentLoaded', async () => {
  // Simulated Kick login check using localStorage (replace with real session/token check if needed)
  const kickUsername = localStorage.getItem('kickUsername');
  if (!kickUsername) {
    alert("You must be logged in with Kick to submit a prediction. Redirecting to login...");
    window.location.href = "/index.html"; // Replace with your actual landing/login page
    return;
  }

  // Autofill Kick username into a hidden field or use it in the backend
  const topGameSelect = document.getElementById('topGame');
  const lowGameSelect = document.getElementById('lowestGame');

  try {
    const res = await fetch('http://localhost:5000/api/bonus-hunt-slots');
    const slotNames = await res.json();

    slotNames.forEach(name => {
      const option1 = new Option(name, name);
      const option2 = new Option(name, name);
      topGameSelect.appendChild(option1);
      lowGameSelect.appendChild(option2);
    });
  } catch (err) {
    console.error("Failed to load slot names:", err);
  }

  document.getElementById('predictionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
  });
});
