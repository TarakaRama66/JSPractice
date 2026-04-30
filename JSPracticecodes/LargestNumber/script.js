function maxNum(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(maxNum([1, 5, 3, 9, 2]));