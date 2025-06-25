const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const form = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from reloading

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if(name && email){
        const contact = {name, email};
        addContact(contact);
        displayContacts();
        form.reset(); // Clear the form inputs after submission

        sessionStorage.removeItem('draftName'); // Clear the draft from sessionStorage
        sessionStorage.removeItem('draftEmail'); // Clear the draft from sessionStorage
    }
});

addContact = (contact) => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
};

displayContacts = () => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contactList.innerHTML = ''; // Clear the list before displaying

    contacts.forEach((c, i) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${c.name} (${c.email})`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', () => {
            contacts.splice(i, 1); // Remove the contact from the array
            localStorage.setItem('contacts', JSON.stringify(contacts)); // Update localStorage
            displayContacts(); // Refresh the displayed list
        });

        listItem.appendChild(deleteBtn);
        contactList.appendChild(listItem);
    })
}

// Initial display of contacts when the page loads
displayContacts();

nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    if (name)
        sessionStorage.setItem('draftName', name);
})

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    if (email)
        sessionStorage.setItem('draftEmail', email);
})

window.addEventListener('load', () => {
    const draftName = sessionStorage.getItem('draftName');
    const draftEmail = sessionStorage.getItem('draftEmail');

    if (draftName) {
        nameInput.value = draftName;
    }
    if (draftEmail) {
        emailInput.value = draftEmail;
    }
})
