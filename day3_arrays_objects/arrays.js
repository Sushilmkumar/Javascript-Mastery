let fruits = ['apple', 'jamun', 'banana'];
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}
fruits.push('orange'); // Add an element to the end
fruits.unshift('grapes'); // Add an element to the beginning

console.log('foreach loop:');
fruits.forEach((fruit) => console.log(fruit)); // Print each fruit

fruits.pop(); // Remove the last element
fruits.shift(); // Remove the first element
const [firstFruit, secondFruit, ...remainingFruits] = fruits.map(f => f.trim());
console.log('First fruit:', firstFruit); // 'grapes'
console.log('Second fruit:', secondFruit); // 'apple'
console.log('Remaining fruits:', remainingFruits); // ['jamun', 'banana', 'orange']
remainingFruits.push('kiwi'); // Add kiwi to the remaining fruits
console.log('Remaining fruits after adding kiwi:', remainingFruits);

console.log('After removing banana:', fruits.filter(fruit => fruit !== 'banana'));