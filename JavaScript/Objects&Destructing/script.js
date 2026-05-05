function showUser() {
  let user = {
    name: "Gupta",
    age: 25,
    city: "Hyderabad"
  };

  let { name, age } = user;

  document.getElementById("output").innerText =
    `${name} is ${age} years old`;
}