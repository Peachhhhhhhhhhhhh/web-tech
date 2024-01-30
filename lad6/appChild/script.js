document.addEventListener('DOMContentLoaded',()=>{

});

const container = document.getElementById('container');

const table = document.getElementById('myTable');

const button  = document.createElement('button');


// const Form = document.getElementById('Form')
button.id = "mybutton"
button.textContent = 'Click me!';
container.appendChild(button);

button.addEventListener('click',(e) =>{
    e.preventDefault();
    const Age = document.getElementById('age');
    const Name = document.getElementById('name');
    
    const myRow = table.insertRow();
    const cell1 = myRow.insertCell(0);
    const cell2 = myRow.insertCell(1);
    
    // cell1.textContent= Form.elements('neme').value;
    // cell2.textContent = Form.elements('Age').value;
    cell1.textContent  = Name.value;
    cell2.textContent = Age.value;

    Name.value = "";
    Age.value ="";
});
