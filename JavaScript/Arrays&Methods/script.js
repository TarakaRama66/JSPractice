function processData() {
  let numbers = [10, 20, 30, 40, 50];

  let filtered = numbers.filter(num => num > 25);
  let doubled = filtered.map(num => num * 2);

  let list = document.getElementById("list");
  list.innerHTML = "";

  doubled.forEach(num => {
    let li = document.createElement("li");
    li.innerText = num;
    list.appendChild(li);
  });
}