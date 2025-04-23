document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    const resultName = document.getElementById('resultName');

    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const nameInput = document.getElementById('nameInput').value;
            if (nameInput) {
                localStorage.setItem('userName', nameInput);
                window.location.href = 'result.html';
            }
        });
    }

    if (resultName) {
        const name = localStorage.getItem('userName');
        if (name) {
            resultName.textContent = name.toUpperCase();
        }
    }
});