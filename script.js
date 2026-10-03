const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  // Temporary prototype login.
  // Real authentication will be added later.
  localStorage.setItem("frostUser", email);

  window.location.href = "dashboard.html";
});
