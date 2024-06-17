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
    // Prevents all inputs to be red from the start
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

function specifyError() {
    const submitButton = document.getElementById('submitButton');
}

function addEventListeners() {
    revealPassword();
    inputValidation();

};


addEventListeners();