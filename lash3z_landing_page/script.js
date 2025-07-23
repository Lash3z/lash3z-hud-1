
// Simulate checking if user is logged in (replace this with real auth later)
const isLoggedIn = localStorage.getItem("kick_username");

window.onload = () => {
  if (!isLoggedIn) {
    document.getElementById("loginModal").style.display = "block";
  }
};

function loginWithKick() {
  // Redirect to Kick login
  window.location.href = "https://kick.com/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://lash3z.com/auth/kick/callback";
}
