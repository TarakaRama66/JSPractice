// setTimeout + clearTimeout

let timeout;

document
  .getElementById("startTimeout")
  .addEventListener("click", function(){

    timeout = setTimeout(() => {

      console.log("setTimeout Executed After 3 Seconds");

    }, 3000);

  });


document
  .getElementById("stopTimeout")
  .addEventListener("click", function(){

    clearTimeout(timeout);

    console.log("Timeout Cleared");

  });


// setInterval + clearInterval

let interval;

let count = 0;

document
  .getElementById("startInterval")
  .addEventListener("click", function(){

    interval = setInterval(() => {

      count++;

      console.log("Interval Count :", count);

    }, 1000);

  });


document
  .getElementById("stopInterval")
  .addEventListener("click", function(){

    clearInterval(interval);

    console.log("Interval Stopped");

  });


// ASYNCHRONOUS JAVASCRIPT

console.log("Start");

setTimeout(() => {

  console.log("Asynchronous Task");

}, 2000);

console.log("End");