function calculator(a, b, operator){
    switch(operator) {
        case '+':
            return a + b; // Addition
        case '-':
            return a - b; // Subtraction
        case '*':
            return a * b; // Multiplication
        case '/':
            return a / b; // Division
        case '%':
            return a % b; // Modulus
        case '**':
            return a ** b; // Exponentiation
        default:
            return 'Invalid operator'; // Handle invalid operator
    }
}

// Example usage:
console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5