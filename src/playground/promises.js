const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Matt',
      age: 40
    });
    // reject('Something went wrong');
  }, 3000);
});

console.log('before');

// .then() is us registering a callback, which will fire when the promise resolves
promise.then((data) => { // have access to any data that got passed to resolve, so can pass it in the callback here
  console.log('1', data);

  return new Promise((resolve, reject) => { // <- return as success case from prev promise so is available to pass in (as 'str') to next chained promise
    setTimeout(() => {
      resolve('this is my other promise');
    }, 3000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => { // chain on catch to get access to the reject data, so it doesn't show in the console as an uncaught javascript error
  console.log('error: ', error);
});

// alternative to using 'catch' is to pass a 2nd arg into 'then', a 2nd function which would then be used as your catch handler (looks uglier though!)
// promise.then((data) => {
//   console.log('1', data)
// }, (error) => {
//   console.log('error: ', error);
// });

console.log('after');