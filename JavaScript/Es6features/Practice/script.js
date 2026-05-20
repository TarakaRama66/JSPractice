// let and const
let age = 25;
age = 26;

const place = "Palakollu";

console.log("let & const:", age, place);


// Arrow Functions

const add = (a, b) => a + b;

console.log("Arrow Function:", add(50, 50));

// Template Literals

const name = "Gupta";

console.log(`Hello ${name}, Welcome to ES6 Features`);


//Default Parameters

function greet(user = "Guest") {
  console.log(`Hello ${user}`);
}

greet();
greet("Tarak");

//Destructuring
// Array Destructuring
const colors = ["orange", "pink", "Green"];

const [first, second] = colors;

console.log("Array Destructuring:", first, second);


// Object Destructuring
const student = {
  studentname: "Ram",
  marks: 90
};

const { studentname, marks } = student;

console.log("Object Destructuring:", studentname, marks);


//Spread Operator

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];

console.log("Spread Operator:", arr2);


// Rest Parameters

function total(...numbers) {
  return numbers.reduce((sum, num) => sum + num);
}

console.log("Rest Parameter:", total(20, 50, 40));

//Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const p1 = new Person("Tilak", 25);

p1.display();

//Promises

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));


//for...of Loop

const nums = [198, 288, 3789];

for (const value of nums) {
  console.log("for...of:", value);
}


//Map

const map = new Map();

map.set("name", "Gupta");
map.set("age", 25);

console.log("Map:", map.get("name"));


//Set

const set = new Set([1, 2, 2, 3, 4]);

console.log("Set:", set);


//Symbol

const id = Symbol("id");

console.log("Symbol:", id);


// find() and findIndex()

const numbers = [5, 10, 15, 20, 25, 30, 35];

console.log(
  "find:",
  numbers.find(num => num > 15)
);

console.log(
  "findIndex:",
  numbers.findIndex(num => num > 15)
);


// Object.assign()

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = Object.assign({}, obj1, obj2);

console.log("Object.assign:", merged);


// startsWith, endsWith, includes

const text = "JavaScript";

console.log(text.startsWith("Java"));
console.log(text.endsWith("Script"));
console.log(text.includes("ava"));


// Array.from() and Array.of()

console.log(Array.from("12345"));

console.log(Array.of(10, 20, 30));


// Block Scope

{
  let x = 100;
  const y = 200;

  console.log("Block Scope:", x, y);
}


// Enhanced Object Literals

const username = "Kiran";

const user = {
  username,

  greet() {
    console.log("Hello User");
  }
};

console.log(user);

user.greet();


// Generators

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
