var nameVar = 'Matt';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Katie';
nameLet = 'Leonie';
console.log('nameLet', nameLet);

const nameConst = 'Jonny';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Matt Tea';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);