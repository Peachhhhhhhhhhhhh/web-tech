document.addEventListener('DOMContentLoaded', function () {
    form = document.getElementById('mtForm');
    resultDiv = document.getElementById('result');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        name = document.getElementById('name').value;
        email = document.getElementById('email').value;
        resultDiv.innerHTML = `<p>Name:${name}</p><p>Email:${email} </p>`;
    });
});