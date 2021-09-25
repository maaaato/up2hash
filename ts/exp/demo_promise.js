function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 1), 100);
  });
}

let promise = addPromise(0);
for (let i = 0; i < 3; i++) {
  promise = promise.then((num) => addPromise(num));
}

promise.then((num) => {
  console.log(num);
});
