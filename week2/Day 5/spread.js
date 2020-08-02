const person = {
    firstName: "GUVI",
    lastName: "GEEK",
    age: 3,
    sex: "M"
  }
  
let first = person.firstName;
let  age = person.age;
let sex = person.sex;

console.log(first); // "GUVI"
console.log(age); // 3
console.log(sex); // M

({ firstName, age, sex } = {...person}); // That's it !
  
console.log(firstName) // "GUVI"
console.log(age) // 3
console.log(sex) // M
  
function joinFirstLastName({firstName, lastName}) { // we create firstName and lastName variables by destructuring person parameter
    return firstName + '-' + lastName;
}
  
console.log(joinFirstLastName(person)); // GUVI GEEK

var list = [ 1, 2, 3 ];
var [ a, b ] = list;
[ b, a ] = [ a, b ]
console.log(a, b)