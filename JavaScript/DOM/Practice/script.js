// DOM + EVENT

let title = document.getElementById("title");

document
  .getElementById("changeBtn")
  .addEventListener("click", function () {

    title.innerHTML = "DOM Manipulated Successfully";

    console.log("Button Click Event Triggered");

  });


// DEBOUNCING

function debounce(func, delay){

  let timer;

  return function(){

    clearTimeout(timer);

    timer = setTimeout(() => {

      func();

    }, delay);

  };

}

let searchInput = document.getElementById("search");

searchInput.addEventListener(

  "keyup",

  debounce(function(){

    console.log("Debouncing API Call");

  }, 1000)

);


// THROTTLING

function throttle(func, delay){

  let lastCall = 0;

  return function(){

    let current = new Date().getTime();

    if(current - lastCall >= delay){

      lastCall = current;

      func();

    }

  };

}

let scrollBox = document.getElementById("scrollBox");

scrollBox.addEventListener(

  "scroll",

  throttle(function(){

    console.log("Throttled Scroll Event");

  }, 1000)

);


