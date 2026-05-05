async function load() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();

  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(user => {
    let li = document.createElement("li");
    li.innerText = user.name;
    list.appendChild(li);
  });
}