 const foods = [
    {
      "name": "ส้มตำ",
      "image": "https://bing.com/th?id=OSK.e64836b0ad4cb3f5d6ce108492b0133e",
      "price": 50
    },
    {
      "name": "ผัดไทย",
      "image": "https://img.kapook.com/u/2015/surauch/cook2/PT2.jpg",
      "price": 60
    },
    {
      "name": "ข้าวผัด",
      "image": "https://th.bing.com/th?id=OSK.40a96adc75e584ec6d6c24c4f0381981&w=164&h=92&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
      "price": 40
    },
    {
      "name": "ต้มยำกุ้ง",
      "image": "https://th.bing.com/th/id/OIP.JJhyHJmvlrJwdn_RYtP3LgHaFS?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "price": 70
    },
    {
      "name": "ก๋วยเตี๋ยว",
      "image": "https://th.bing.com/th/id/OIP.XSakHpfZtuYL8oo9aMFqhgHaFa?rs=1&pid=ImgDetMain",
      "price": 45
    },
    {
      "name": "ไก่ทอด",
      "image": "https://img-global.cpcdn.com/recipes/c7ca13ec31868a6b/1502x1064cq70/%E0%B8%A3%E0%B8%B9%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3-%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%97%E0%B8%AD%E0%B8%94-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%86.jpg",
      "price": 55
    },
    {
      "name": "ผัดซีอิ๊ว",
      "image": "https://th.bing.com/th/id/OIP.T1lJbhOiLn6NXU0W8Ikj1QHaEj?rs=1&pid=ImgDetMain",
      "price": 65
    },
    {
      "name": "ปลาทอด",
      "image": "https://th.bing.com/th/id/OIP.TJo4BWHoXiRlxWox96FA5gAAAA?rs=1&pid=ImgDetMain",
      "price": 75
    },
    {
      "name": "หมูกระทะ",
      "image": "https://th.bing.com/th/id/OIP.dAVe-6XR2Y73pkmLKvUR6AHaE8?rs=1&pid=ImgDetMain",
      "price": 220
    },
    {
      "name": "สลัดผัก",
      "image": "https://th.bing.com/th/id/OIP.MvbRv-Zjl6AI8SkXAsJSswHaEK?rs=1&pid=ImgDetMain",
      "price": 65
    }
  ]

  document.addEventListener("DOMContentLoaded", loadMenu);

  function loadMenu() {
      const menuDiv = document.getElementById("menu");
      menuDiv.innerHTML = ""; 
  
      foods.forEach(food => {
          const foodDiv = document.createElement("div");
          foodDiv.classList.add("food");
  
          const img = document.createElement("img");
          img.src = food.image;
          img.alt = food.name;
          foodDiv.appendChild(img);
  
          const namePara = document.createElement("p");
          namePara.textContent = food.name;
          foodDiv.appendChild(namePara);
  
          const pricePara = document.createElement("p");
          pricePara.textContent = "ราคา: " + food.price + " บาท";
          foodDiv.appendChild(pricePara);
  
          const appButton = document.createElement("button");
          appButton.textContent = "สั่งอาหาร";
          foodDiv.appendChild(appButton);
  
          menuDiv.appendChild(foodDiv);
      });
  }
  
// function saveData(){
    
//     const key = document.getElementById('inputKey').value;
//     const value = document.getElementById('inputValue').value;
//     localStorage.setItem(key,value);
//     loadData();
//     alert("Data saved");
// }

// function loadData(){
//     const container = document.getElementById("data");
//     container.innerHTML="";

//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i); 
//         const value = localStorage.getItem(key); 
//         const div = document.createElement('div')
//         div.textContent = "Key: " + key + ", Value: " + value; 
//         const removeIButton = document.createElement("button");
//         removeIButton.textContent = 'Remove';
//         removeIButton.onclick = function (){
//             localStorage.removeItem(key);
//             loadData();
//         }
//         div.appendChild(removeIButton);
//         container.appendChild(div); 
//     }
// }

// function clarAll(){
//     localStorage.clear();
//     loadData();
// }


