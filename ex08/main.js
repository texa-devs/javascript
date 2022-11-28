//Equal signs and conditional

//in this case we have a double equal sign. That means that it won't match the data type in the first attribution, meaning it can be even a string and it won't matter.

//works
const x = 10;

if(x == 10) {
    console.log('x is 10')
}

//works
const y = '10';

if(y == 10) {
    console.log('y is 10')
}

//doesn't work
const z = '11';

if(z == 10) {
    console.log('x is 10')
}

//now for triple equals, it checks if the data type is the same, in that case having the following won't result in anything

const w = '12'
if(w === 12) {
    console.log('w is 12')
}

//back to first example.

if(x == 10) {
    console.log('x is 10')
} else {
    console.log('x is NOT 10')
}

//with else condition, you can define the outcome if (in that example) if x is not 10, you can nest those.

//"OR" in conditionals

let i = 6;
let j = 11;

if(i === 21 || j === 11) {
    console.log('either i or j meet the conditions');
}

//AND in conditionals

i = 21

if(i === 21 && j > 10) {
    console.log('both i and j meet the conditions')
}

//ternary operator (?), shorthand if statement. Based on ser conditions, check:
const p = 9

const question = p > 10 ? 'true' : 'false';
console.log(question)

//switches, try blue, red and different colors here!
const color = 'green'

switch(color) {
    case 'red':
        console.log('the color is red');
        break;
    case 'true':
        console.log('the color is blue');
        break;
    default:
        console.log(`it's not blue or red`)
        break;
}