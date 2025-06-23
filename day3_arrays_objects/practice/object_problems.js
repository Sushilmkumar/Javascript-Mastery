let car = {
    brand: 'Skoda',
    model: 'Kylaq 1.5 TSI',
    year: 2023,
    isElectric: false
}

car.color = 'Lava Blue'; // Add a new property
car['owner'] = 'Sushil Kumar'; // Add another property using bracket notation

for(let key in car) {
    console.log(`${key}: ${car[key]}`); // Print each key-value pair
}

let employee = {
    name: 'Sushil Kumar',
    age: 29,
    position: 'Senior Software Engineer',
    skills: ['JavaScript', 'c#', '.Net Core'],
    isFullTime: true,
    address: {
        street: '123 Main St',
        city: 'Bangalore',
        state: 'Karnataka',
        zip: '560001'
    }
}

console.log('Emplouee city and pincode:', employee.address.city, employee.address.zip); // Access nested properties
console.log('Employee skills:', employee.skills.join(', ')); // Join skills into a string