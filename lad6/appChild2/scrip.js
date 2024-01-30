const container = document.getElementById("container");
const img = document.createElement("img");
const fruitlist = document.getElementById("fruitlist");

img.src = "download.jpg"
img.alt = "Dargon"

container.appendChild(img);

const fruits = ["Apple","Banana","Mango","Strawberry","Orange"]

fruits.forEach((fruits) =>{
    const li  = document.createElement("p")
    li.textContent= fruits;
    fruitlist.appendChild(li)
})

