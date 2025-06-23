let person = {
    name: 'Sushil',
    age: 29,
    hobbies: ['reading', 'coding'],
    isStudent: false
};
// Accessing properties
console.log('Name:', person.name); // 'Sushil'
console.log('First Hobby:', person.hobbies[0]);

person.hobbies.push('gaming'); // Add a new hobby
console.log('Updated Hobbies:', person.hobbies);

for(let key in person) {
    console.log(`${key}: ${person[key]}`); // Print each key-value pair
}