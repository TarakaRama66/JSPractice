function* generator() {
  yield "Step 1";
  yield "Step 2";
  yield "Step 3";
}

let gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);