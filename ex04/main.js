//Arrays - variables that hold multiple values!

const fruits = ['apples', 'oranges', 'pears', 10, true];
//in js you can mix different data types in a single array and don't need to tell how many itens will be there (not statitically typed)

console.log(fruits[1]); 
//every array is 0 based, so you will get oranges from 1, not apples.

fruits[5] = 'grapes';
//not a good method since you don't know how many itens will be in an array, do the following instead:

fruits.push('mangos'); //will be our 7th item, [6].

console.log(fruits);

//but if you want to push the new item to the begining, try this:

fruits.unshift('strawberries');
console.log(fruits); //will be our 1st item in the array

//if you want to get rid of the last item in our array:

fruits.pop();
console.log(fruits);
//mangos are gone =^(

//but how to check if something is in your array? check this out:

console.log(Array.isArray('Dragonfruits'));
//you will get false in console.

//If is wanted, you can check where in the array is your value, try the following command:
console.log(fruits.indexOf('pears'));
