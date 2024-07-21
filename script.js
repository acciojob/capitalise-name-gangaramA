document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('fname');

    function convertToUppercase() {
        inputField.value = inputField.value.toUpperCase();
    }

    inputField.onblur = convertToUppercase;
});

