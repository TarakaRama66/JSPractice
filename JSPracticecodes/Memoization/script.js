function memo(fn) {
  let cache = {};

  return function (n) {
    if (cache[n]) return cache[n];

    let result = fn(n);
    cache[n] = result;
    return result;
  };
}

function square(n) {
  return n * n;
}

let fastSquare = memo(square);

console.log(fastSquare(5));
console.log(fastSquare(5));