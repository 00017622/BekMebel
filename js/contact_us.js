document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('contact-form');

    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        let hasErrors = false;

        //calling the function to clear the errors from previous submit if they were shown
        clearErrors();

        // validation of email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Please enter a valid email address.');
            hasErrors = true;
        }

        // Validation of phone
        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Please enter a valid phone number.');
            hasErrors = true;
        }

        // validation of message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Please enter your message.');
            hasErrors = true;
        }

        // preventing the submission because of errors occured
        if (hasErrors) {
            event.preventDefault();
        }
    });

    // Function to show error messages
    function showError(inputElement, message) {
        var errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;

        // Adding the erorr class for each input element
        inputElement.classList.add('input-error');

        // Inserting the error message after the input element's parent
        inputElement.parentNode.appendChild(errorElement);
    }

    // Function to clear previous error messages
    function clearErrors() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(element) {
            element.parentNode.removeChild(element);
        });

        var errorInputs = document.querySelectorAll('.input-error');
        errorInputs.forEach(function(element) {
            element.classList.remove('input-error');
        });
    }

});
