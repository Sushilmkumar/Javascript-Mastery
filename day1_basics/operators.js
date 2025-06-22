let a = 10;
let b = 23;
let c = 3;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(b % a); // Modulus
console.log(a ** c); // Exponentiation

let age = 18;
let isAdult = age >= 18; // Comparison operator
console.log(isAdult); // true
age--; // Decrement operator
console.log(age);

let isEven = (age % 2 === 0); // Logical operator
console.log(isEven);

let x = 5, y = "5";
console.log(x == y); // Loose equality (type coercion)
console.log(x === y); // Strict equality (no type coercion)

let isAdmin = true;
let isLoggedIn = false;
console.log(isLoggedIn && isAdmin); // Logical AND
console.log(isLoggedIn || isAdmin); // Logical OR
console.log(!isAdmin); // Logical NOT

let num = 10;
let result = num % 2 ===0?'Even':'Odd'; // Ternary operator
console.log(result); // Even