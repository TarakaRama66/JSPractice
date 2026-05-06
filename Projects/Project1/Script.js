// LOGIN
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("error").innerText = "Fill all fields";
    return;
  }

  localStorage.setItem("user", username);
  window.location.href = "dashboard.html";
}


// DASHBOARD CHECK
if (window.location.pathname.includes("dashboard.html")) {
  let user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("welcome").innerText = "Welcome, " + user;
    document.getElementById("userInfo").innerText = "Username: " + user;
  }
}


// NAVIGATION
function showHome() {
  document.getElementById("homeSection").style.display = "block";
  document.getElementById("profileSection").style.display = "none";
}

function showProfile() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("profileSection").style.display = "block";
}


// LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}