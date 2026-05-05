function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

step1()
  .then(res => {
    console.log(res);
    return step2();
  })
  .then(res => {
    console.log(res);
  });