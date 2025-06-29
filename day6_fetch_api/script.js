var users = document.getElementById('userList');
let searchName = document.getElementById('searchName');
let resetBtn = document.getElementById('resetBtn');

let allUsers = []; // Array to hold user data
fetchUsers = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //Promise
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        var data = await response.json(); //Promise
        data.forEach(u => {
            allUsers.push({
                name: u.name,
                email: u.email,
                city: u.address.city,
                zipcode: u.address.zipcode
            });
        });
    }
    catch(e) {
        console.log('Error fetching users:', e);
    }
}

fetchUsers();
searchName.addEventListener('input', () => {
    const searchVal = searchName.value.toLowerCase();
    users.innerHTML = ''; // Clear the user list before displaying filtered results
    allUsers.filter(u => u.name.toLowerCase().includes(searchVal))
        .forEach(u => {
            let li = document.createElement('li');
            li.textContent = `${u.name}, (${u.email}), (${u.city}, ${u.zipcode})`;
            users.appendChild(li);
        })
    if(users.getElementsByTagName('li').length == 0){
        users.innerText = 'No users found'; // Display message if no users match the search criteria
    }
});

resetBtn.addEventListener('click', () => {
    searchName.value = '';
    users.innerHTML = ''; // Clear the user list
});

