let students = [
    { name: 'Alice', score: 85, stipened: 5000 },
    { name: 'Bob', score: 92, stipened: 6000 },
    { name: 'Charlie', score: 78, stipened: 4500 },
    { name: 'David', score: 72, stipened: 4000 },
    { name: 'Eve', score: 95, stipened: 7000 },
]

console.log('Scores above 80:', students.filter(s => s.score > 80).map(s => s.name).join(', '));

console.log('Total Stipened:', students.reduce((t, s) => t + s.stipened, 0));

let countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log('Count of vowels in "Hello World":', countVowels('Hello World'));