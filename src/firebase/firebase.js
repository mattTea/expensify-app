// import this playground file into app.js so it will run to print to console
// --------------------------------------------------------------------------

import * as firebase from 'firebase'; // <- * takes all named exports

const config = {
  apiKey: "AIzaSyDaS8w1Tx9_xnFv6X2dtAuNxanaYh3jk6Q",
  authDomain: "expensified-expenses.firebaseapp.com",
  databaseURL: "https://expensified-expenses.firebaseio.com",
  projectId: "expensified-expenses",
  storageBucket: "expensified-expenses.appspot.com",
  messagingSenderId: "944486510520"
};

firebase.initializeApp(config);

const database = firebase.database();

// ref() method gives referece to a specific part of our app. no args => sets to root of db
// set() always completely wipes whatever is in that part of the db and overwrites
// database.ref().set({
//   name: 'Matt Thompson',
//   age: 40,
//   isSingle: false,
//   location: {
//     city: 'London',
//     country: 'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data is saved.'); // <- runs when set sync is completed ('set' promise resolves)
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   name: 'Katie',
//   age: 37,
//   job: 'Director of awesome', // <- update can also add new fields
//   isSingle: null // <- can also delete nodes
// });

// database.ref().update({
//   job: 'Lord of Awesome',
//   'location/city': 'San Sebastian' // <- weird in quote syntax to allow the backslash to just update nested city
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Delete saved.');
// }).catch((e) => {
//   console.log('Shizzle broke.', e);
// });

// alternative remove method (but remove method is more explicit)
// database.ref('isSingle').set(null);


// Lecture 147 challenge
// ---------------------

// database.ref().set({
//   name: 'Matt Thompson',
//   age: 40,
//   stressLevel: 6,
//   job: {
//     title: 'Pretend Developer',
//     company: 'John Lewis & Partners'
//   },
//   location: {
//     city: 'London',
//     country: 'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// Lecture 148
// -----------

// database.ref() // <- root (all of db)
// database.ref('location') // <- location node
// database.ref('location/city') // <- city nested node
//   .once('value') // <- fetch just once
//   .then((snapshot) => { // <- snapshot is the database data
//     const val = snapshot.val(); // <- .val allows us to extract the object
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().on('value', (snapshot) => { // <- fetch and allows us to listen for changes (requires callback function as second arg to allow us to run some code when value changes)
//   console.log(snapshot.val());
// });

// const onValueChange = database.ref().on('value', (snapshot) => { // <- set above up as a const so we can call to unsubscribe
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('age').set(44);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange); // <- doesn't need an arg passed if want to unsubscribe to all subscriptions, bit can add one if want to unsubscribe to just one
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(45);
// }, 10500);

// Lecture 148 challenge
// ---------------------

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

setTimeout(() => {
  database.ref().update({
    'job/company': 'Amazon'
  });
}, 3500);
