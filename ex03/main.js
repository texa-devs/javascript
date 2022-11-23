const s = 'Hello world!';

//toUpperCase is a function, it's needed the empty parentesis to work. You can define range inside the parentesis
console.log(s.toUpperCase());

console.log(s.substring(0, 5));

//you can mix functions too
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''));

const x = 'tech, computers, it, code';

console.log(x.split(', ')); //here you can define the separator a common term in betweeen every term of interest