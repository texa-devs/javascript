//Types of loops

//For loops

for(let i = 0; i <= 3; i++) {
    console.log(`For Loop number: ${i}`);
}


//While loop

let i = 0;
while(i < 5) {
    console.log(`While loop number: ${i}`);
    i++;
}

//You can use it with arrays too.

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
        isCompleted: false
    }
];

//the .length function will give the number of files in the array, in this case 3. [0, 1, 2].
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

/*if you use <= in this case it will count until there's 4 itens in the array [0, 1, 2, 3]. 
In that case we have NO 4th item in the array and instead, give you an error message, since there's 3 itens. Try it*/

//High order array methods:

//forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.id);
});

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//all the three are the same so...
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

//The text from the completed ones only!
const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompletedText);

