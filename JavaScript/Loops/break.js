const fruits = ['Apple', 'Banana', 'Cherry'];
let x = '';
myfavorite: {
  x = fruits[0];
  break myfavorite;
  x = fruits[1];
  x = fruits[2];
}
console.log(x)

//break
for (let g = 0; g < 10; g++) {
  if (g === 3) break;
  console.log("The number is " + g);
}


//days example use switch and break
let day;

switch (new Date().getDay()) {
  case 0: day = "Sunday"; break;
  case 1: day = "Monday"; break;
  case 2: day = "Tuesday"; break;
  case 3: day = "Wednesday"; break;
  case 4: day = "Thursday"; break;
  case 5: day = "Friday"; break;
  case 6: day = "Saturday";
}

console.log("Today is " + day);

//loop1 break
let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop2; }
    text += i;
  }
}
console.log(text);