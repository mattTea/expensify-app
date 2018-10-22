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
database.ref().set({
  name: 'Matt Thompson',
  age: 39,
  isSingle: false,
  location: {
    city: 'London',
    country: 'United Kingdom'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(40); // <- updates just the 'age' part of the database
database.ref('location/city').set('Bristol');
database.ref('attributes').set({ // <- adds and sets new part
  height: 1.75,
  weight: 70
});

// All of the above is of course async so need to integrate Promises to know when calls have completed