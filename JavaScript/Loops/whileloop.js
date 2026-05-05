//whileloop
let a = 0;

while (a < 10) {
  console.log("The number is " + a);
  a++;
}
// while
const cars = ["BMW", "Volvo", "Swift", "Audi"];

let b = 0;
while (cars[b]) {
  console.log(cars[b]);
  b++;
}

//dowhile
let c = 0;

do {
  console.log("The number is " + c);
  c++;
} while (c < 10);

//reverse
let num = 12345;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;          // get last digit
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);    // remove last digit
}

console.log(reverse);
