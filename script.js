const submitButton = document.getElementById('submitButton');
const passwordButton = document.querySelector('.icon-eye-off');
console.log(passwordButton);

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
});