/* Mobile Menu */

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
if (menu.classList.contains('show')) {
menu.classList.remove('show');
} else {
menu.classList.add('show');
}
});

/* Form Validation */

const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
const nameValue = name.value.trim();
const emailValue = email.value.trim();
const messageValue = message.value.trim();

if (nameValue === '') {
setErrorFor(name, 'Name cannot be blank');
} else {
setSuccessFor(name);
}

if (emailValue === '') {
setErrorFor(email, 'Email cannot be blank');
} else if (!isEmail(emailValue)) {
setErrorFor(email, 'Email is not valid');
} else {
setSuccessFor(email);
}

if (messageValue === '') {
setErrorFor(message, 'Message cannot be blank');
} else {
setSuccessFor(message);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const errorMessage = formControl.querySelector('small');

formControl.className = 'form-control error';
errorMessage.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;

formControl.className = 'form-control success';
}

function isEmail(email) {
return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}