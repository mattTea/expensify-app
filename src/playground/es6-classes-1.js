class Person {
  constructor(name = 'Anonymous', age = 0) { // name = ... is defining the 'function default'
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      // description = description + ``; // same as shorthand on next line
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveller('Matt Thompson', 39, 'London'); // new instance of class Person (as a function that can take arguments)
console.log(me.getGreeting());
// console.log(me.getDescription());

const other = new Traveller();
console.log(other.getGreeting());
// console.log(other.getDescription());