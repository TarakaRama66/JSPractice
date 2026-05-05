function validate() {
  let email = document.getElementById("email").value;

  if (!email.includes("@gmail.com")) {
    document.getElementById("msg").innerText = "Invalid Email please check again";
  } else {
    document.getElementById("msg").innerText = "Valid Email";
  }
}