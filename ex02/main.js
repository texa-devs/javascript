//Exercise 


//Strings, Numbers, Boolean, null, undefined

const name = 'john'; //string
const age = 20; //number
const heigth = 1.86; //number
const isCool = true; //boolean
const x = null; //NOT AN OBJECT -- this is bogus, The null has 0 as a typetag and objects are 0 by default, which causes console to log object when it's null.
const y = undefined; //undefined
let z; //undefined

//Try changing the variables (ex. name) to any other defined above in this command and you will get in your console the type of the var.
console.log(typeof name);


//-------------------------------------------------------------------------//


//Concatenation (older method)
console.log('My name is ' + name + ' and I am ' + age); 

//this needs spaces in betweens the adding strings, else it will look like this:
console.log('My name is' + name + 'and I am' + age);

//Template String
const hello = (`My name is ${name} and I'm ${age}`);

console.log(hello);