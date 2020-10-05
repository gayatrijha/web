//1, Write a program to print a series with a 'while' loop.
//0,1,1,2,3,5,8,13,21,..................


let number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); //  0
console.log(n2); //  1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}