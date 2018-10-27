import * as firebase from 'firebase';

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

export { firebase, database as default };