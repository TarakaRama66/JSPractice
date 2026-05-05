function add(a, b) {
  return a + b;
}

function calculate() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  let result = add(n1, n2);

  document.getElementById("result").innerText = "Result: " + result;
}