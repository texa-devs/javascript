//Object literals <- key value pairs

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '50 main st',
        city: 'Belford Roxo',
        state: 'RJ'
    }

}

console.log(person.firstName, person.lastName); //you can get multiple logs using comma space

//logging a value from an array inside an object:
console.log(person.hobbies[1]);

//getting a value from an object inside an object:
console.log(person.adress.city);

//Fun
console.log(person.adress.city, person.adress.state, person.lastName);

//Destructuring <- pulling variables out the objects (e6)
const { firstName, lastName, adress: {city}} = person;

console.log(city);

//you can add more properties to the object
person.email = 'john@gmail.com';

console.log(person);

//Array of objects

const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
];

//to print values from the array
console.log(todos[1].text);

