//simple commands
//hit the inspect element, console in your browser and see what each does.

console.log('hello world')
console.error('this is an error')
console.warn('This is a warn')

//var, let, const

//var is globally scopped, meaning works outside the block and can conflict stuff, avoid it

let age = 30;

age = 31

//notice that the age was overwritten by this new attribution

console.log(age);

/*using const

const score = 5; <- try removing the double slashes and run
score = 6;

constants can't be changed, they wouldn't be good for scores in games for example, as those values will not remain the same

*/
