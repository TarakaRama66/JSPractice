async function getUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();