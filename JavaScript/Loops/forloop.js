const cars = ["BMW", "Volvo", "Swift", "Ford"];
let len = cars.length;

for (let i = 0; i < len; i++) {
  console.log(cars[i]);
}
// loopScope
var i = 5;
for (var i = 0; i < 10; i++) {
    // var is not block scoped, the loop overwrites the earlier value
}

console.log(i);

// let is Block scoped
let a = 5;
for(let a=0; a < 10; a++){
    
}
console.log(a);

// example of +=
let b, x = '';
for (b = 0; b <= 5; b++) {
  x += b;
}
console.log(x);

