function revealPassword() {
    // Allow users to check their password
    const passwordButton = document.querySelector('.icon-eye-off');

    passwordButton.addEventListener('click', function() {
        // Change input type to text or password depending on current type
        const passwordField = document.getElementById('password');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        
        if (type === 'password') {
            passwordButton.classList.remove('icon-eye-off');
            passwordButton.classList.add('icon-eye');
        } else {
            passwordButton.classList.remove('icon-eye');
            passwordButton.classList.add('icon-eye-off');
        }
    })
};

function inputValidation() {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input');

    // If inputs are empty, don't give red error borders
    inputs.forEach(input => {
        input.addEventListener("input", function() {
            if (input.value.trim() === '') {
                input.classList.add('unfilled');
            } else {
                input.classList.remove('unfilled');
            }
        })
    })
};

function passwordMatches() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    if (password.value.length >= 8) {
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.remove('match');
            confirmPassword.classList.add('nomatch');
        } else {
            confirmPassword.classList.remove('nomatch');
            confirmPassword.classList.add('match');
        }
    } else {
        confirmPassword.classList.remove('match', 'nomatch');
    } 
};

function passwordValidation() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    password.addEventListener('input', passwordMatches);
    confirmPassword.addEventListener('input', passwordMatches);
};

function checkError(e) {
    // Add error message when submitting
    const confirmPassword = document.getElementById('confirm_password');
    let errorMsg = document.querySelector('.error-msg');

    // Password does not match
    if (confirmPassword.classList.contains('nomatch')) {
        e.preventDefault();
        errorMsg.innerHTML = "Passwords do not match";
    } else {
        console.log('Success');
    }
};

function formatPhone() {
    // Format phone: 0123 456 789
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        let trimmedValue = phoneInput.value.replace(/\s/g, ''); // Remove existing spaces
        if (trimmedValue.length > 4 && trimmedValue.length <= 7) {
            trimmedValue = `${trimmedValue.slice(0, 4)} ${trimmedValue.slice(4)}`;
        } else if (trimmedValue.length > 7) {
            trimmedValue = `${trimmedValue.slice(0, 4)} ${trimmedValue.slice(4, 7)} ${trimmedValue.slice(7)}`;
        }
        phoneInput.value = trimmedValue;
    });
}



function addEventListeners() {
    revealPassword();
    // Prevent all inputs to be red from the start 
    inputValidation();
    // Check password matches and correct length
    passwordValidation();
    // Format phone string as user inputs
    formatPhone();
};

addEventListeners();