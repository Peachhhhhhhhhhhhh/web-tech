document.addEventListener("DOMContentLoaded",() => {
    const form = document.getElementById('myForm');
    const resultDiv = document.getElementById('result');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const Name = form.elements["Name"].value;
        const Gender = form.querySelector('input[name="Gender"]:checked').value;
        const Interests = Array.from(form.querySelectorAll('input[name="Interests"]:checked')).map(checkbox => checkbox.value);
        const Country = form.elements["Country"].value;
        
        resultDiv.innerHTML =`<p>Name:${Name}</p><p>Gender:${Gender}</p><p>Interests:${Interests.join(", ")}</p><p>Country:${Country}</p>`
        // event.preventDefault(); 
        // name = document.getElementById('Name').value;
        // Gender = document.getElementById('Gender').value;
        // Interests = document.getElementById('Interests').value;
        // Gender = document.getElementById('Country').value;
        // resultDiv.innerHTML = `<p>Name:${Name}</p><p>Gender:${Gender} </p><p>Interests:${Interests}</p><p>Country${Country}</p>`;
    });
});