function isEven(num) {
    if(typeof num !== 'number'){
        return "Input must be a number";
    }
    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isEven(4)); // Even
console.log(isEven(7)); // Odd

const square = function(num = 2){
    if(typeof num !== 'number'){
        return "Input must be a number";
    }
    return num * num;
}

console.log(square(3)); // 9
console.log(square()); // 4 (default value)

const greetUser = (name = 'Sushil') => {
    if (typeof name !== 'string' || name.trim() === '') {
        return "Name must be a non-empty string";
    }
    return `Hello, ${name}!`;
}

console.log(greetUser('Alice')); // Hello, Alice!
console.log(greetUser('')); // Name must be a non-empty string
console.log(greetUser()); // Hello, Sushil!