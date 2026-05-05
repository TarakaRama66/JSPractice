function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    let val = obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(obj);
    return acc;
  }, {});
}

let users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
];

console.log(groupBy(users, "age"));