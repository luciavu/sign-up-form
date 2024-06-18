function revealPassword() {
    const passwordButton = document.querySelector('.icon-eye-off');
    passwordButton.addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    if (type === 'password') {
        passwordButton.classList.remove('icon-eye-off');
        passwordButton.classList.add('icon-eye');
    } else {
        passwordButton.classList.remove('icon-eye');
        passwordButton.classList.add('icon-eye-off');
    };

})};

function inputValidation() {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input');
    console.log(inputs);


    inputs.forEach(input => {
        input.addEventListener("input", function() {
            if (input.value.trim() === '') {
                input.classList.add('unfilled');
            } else {
                input.classList.remove('unfilled');
            }
        });
    });
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

function specifyError() {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
        //
    })
}

function addEventListeners() {
    revealPassword();
    // Prevent all inputs to be red from the start 
    inputValidation();
    // Check password matches and correct length
    passwordValidation();
};


addEventListeners();

