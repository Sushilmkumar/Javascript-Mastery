let numArr = [1, 3, 4, 4, 5];

console.log('Square of each number:', numArr.map(n => n*n));
console.log('EVen Numbers:', numArr.filter(n => n%2 === 0));
console.log('sum of all numbers:', numArr.reduce((acc, n) => acc + n, 10));

const namesArr = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log('Reversed array:', namesArr.reverse()); // Reverse the array