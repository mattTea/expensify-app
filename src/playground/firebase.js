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

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Amazon'
//   });
// }, 3500);


// Lecture 149
// -----------

// Firebase does not support arrays! (But Redux needs an array!)
// converts this to an object structure...
// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another Note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// going to be storing it like this in firebase...
// any time we want an array we switch it up -> we have a unique identifier, and set its value equal to an object, that where we put the "array stuff"
// const firebaseNotes = {
//   notes: {
//     id1234: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     id5678: {
//       title: 'Another Note',
//       body: 'This is my note'
//     }
//   }
// };

// how generate this unique identifier? .push() -> creates a new property on our reference. it will create a random value, and take whatever we pass into push (an object probs) and set it as the "array stuff" -> the attributes on that unique value node
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, JavaScript, Kotlin, CS.'
// });

// database.ref('notes/-LPbVIldfe8RNo8hmtiQ').update({
//   body: 'Buy food'
// });

// database.ref('notes/-LPbVIldfe8RNo8hmtiQ').remove();

// Lecture 149 challenge
// ---------------------

// database.ref('expenses').push({
//   description: 'Bike sundries',
//   note: 'Set up regular payment',
//   amount: 10000,
//   createdAt: 324245345
// });

// database.ref('expenses').push({
//   description: 'Dry cleaning',
//   note: 'Due back on Monday',
//   amount: 1500,
//   createdAt: 324245345
// });

database.ref('expenses').push({
  description: 'Mortgage',
  note: '2018 value',
  amount: 200000,
  createdAt: 324245345
});


// Lecture 150
// -----------

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });

// will need to manipulate the object structure we get back from Firebase so that Redux and our app can work with it (arrays)

// can access forEach on a snapsot to access child snapshots
// iterate over all of the child snapshots and put them into an array using .push() (so we can use in our app)
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => { // forEach function gets called one time for every expense
//       expenses.push({
//         id: childSnapshot.key, // key (on dataSnapshot) gives us the string value for a specific item in the database
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });
// ^^ above is the exact structure we need to integrate firebase with our application

// Lecture 150 challenge
// ---------------------

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// GOT TO 08.09 in lecture 150. Continue form here...

// setup a few subscribers to watch for specific events...

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added (a bit different to above methods, gets called for existing children as well as those being added)
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});