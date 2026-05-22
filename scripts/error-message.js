document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    if (!form || !emailInput || !errorMessage) {
        return;
    }

    const showError = () => {
        errorMessage.classList.add('visible');
        emailInput.setAttribute('aria-invalid', 'true');
    };

    const hideError = () => {
        errorMessage.classList.remove('visible');
        emailInput.setAttribute('aria-invalid', 'false');
    };

    emailInput.addEventListener('input', function () {
        if (emailInput.validity.valid) {
            hideError();
        }
    });

    emailInput.addEventListener('blur', function () {
        if (emailInput.value.trim() !== '' && !emailInput.validity.valid) {
            showError();
        }
    });

    form.addEventListener('submit', function (event) {
        if (!emailInput.validity.valid) {
            event.preventDefault();
            showError();
            emailInput.focus();
        }
    });
});
