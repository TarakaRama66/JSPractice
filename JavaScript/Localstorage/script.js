function storeUserName() {
  let userInput = prompt("Enter your name:");

  if (!userInput || userInput.trim() === "") {
    console.log("Please enter a valid name");
    return;
  }

  localStorage.setItem("userNameKey", userInput);

  let savedName = localStorage.getItem("userNameKey");

  console.log("Saved Name:", savedName);
}

storeUserName();