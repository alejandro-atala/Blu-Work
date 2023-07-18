const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const feedbackError = document.getElementById('feedbackError');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const feedback = feedbackInput.value.trim();
    let isValid = true;

    if (name === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (email === '' || !isValidEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (feedback === '') {
        feedbackError.style.display = 'block';
        isValid = false;
    } else {
        feedbackError.style.display = 'none';
    }

    if (isValid) {
        alert('Formulario enviado');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}