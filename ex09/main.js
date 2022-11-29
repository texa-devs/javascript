//Functions

function addNums(num1, num2) {
    console.log(num1 + num2);
}

//now we can call the function
addNums();

//it will give you nan (not a number). because we don't have the numbers set in either our call or in the function defined. The following works.

addNums(1, 2);

//you could do this too:

function addNumbers(number1=1, number2=3) {
    console.log(number1 + number2)
}

addNumbers()

//another way:

function sumNums(n1, n2) {
    return n1 + n2;
}

console.log(sumNums(5, 5))

//arrow function, introduced in ES6 in 2015.

const somatoryNums = (firstNum, secondNum) => firstNum + secondNum;

console.log(somatoryNums(10, 9));

//the thing is, you could do the same as the other functions for arrow functions, but it's not necessary. You wouldn't even need the parentesis in (firstNum, secondNum) if you had one parameter!!

//Given a constructor function:
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}

//Instance object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);

console.log(person2.getFullYear());

//Syntactic sugar is when you write something in a prettier way in your code, in your console, instead of having the functions inside your constructor object, you could have them in the prototype like this:

    Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

//Class
//methods are functions inside of classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}