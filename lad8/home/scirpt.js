const prices = [
  { "id": "1", "price": "$10" },
  { "id": "2", "price": "$15" },
  { "id": "3", "price": "$12" },
  { "id": "4", "price": "$14" },
  { "id": "5", "price": "$13" },
  { "id": "6", "price": "$11" },
  { "id": "7", "price": "$9" },
  { "id": "8", "price": "$12" },
  { "id": "9", "price": "$16" },
  { "id": "10", "price": "$14" },
  { "id": "11", "price": "$18" },
  { "id": "12", "price": "$12" },
  { "id": "13", "price": "$10" },
  { "id": "14", "price": "$11" },
  { "id": "15", "price": "$10" },
  { "id": "16", "price": "$12" },
  { "id": "17", "price": "$17" },
  { "id": "18", "price": "$13" },
  { "id": "19", "price": "$12" },
  { "id": "20", "price": "$14" },
  { "id": "21", "price": "$20" },
  { "id": "22", "price": "$25" },
  { "id": "23", "price": "$22" },
  { "id": "24", "price": "$24" },
  { "id": "25", "price": "$23" },
  { "id": "26", "price": "$21" },
  { "id": "27", "price": "$19" },
  { "id": "28", "price": "$22" },
  { "id": "29", "price": "$26" },
  { "id": "30", "price": "$24" }
];

let mealQuantities = {};

let totalOrderPrice = 0;

function fetchMealData() {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then(response => response.json())
  .then(data => {
      const meals = data.meals.slice(0, 25); 
      const menuDiv = document.getElementById('menu');
      meals.forEach((meal, index) => {
          const mealPrice = prices[index].price;
          const mealId = meal.idMeal;
          menuDiv.innerHTML += `
              <div class="meal">
                  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                  <h2>${meal.strMeal} - ${mealPrice}</h2>
                  <p>Quantity: <span id="quantity-${mealId}">0</span></p>
                  <button onclick="incrementQuantity('${mealId}', '${mealPrice}')">+</button>
                  <button onclick="decrementQuantity('${mealId}', '${mealPrice}')">-</button> 
              </div>`;
          mealQuantities[mealId] = 0;
      });
  })
  .catch(error => console.error('Error fetching meal:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  fetchMealData();
});

function incrementQuantity(mealId, mealPrice) {
  const priceNumber = parseFloat(mealPrice.replace('$', ''));
  console.log(`Incremented: ${mealId}`);
  mealQuantities[mealId]++;
  updateTotalOrderPrice(priceNumber);
  updateQuantityDisplay(mealId);
}

function decrementQuantity(mealId, mealPrice) {
  const priceNumber = parseFloat(mealPrice.replace('$', ''));
  console.log(`Decremented: ${mealId}`);
  if (mealQuantities[mealId] > 0) {
      mealQuantities[mealId]--;
      updateTotalOrderPrice(-priceNumber);
      updateQuantityDisplay(mealId);
  }
}

function updateTotalOrderPrice(priceDifference) {
  totalOrderPrice += priceDifference;
  const totalOrderDiv = document.getElementById('totalOrder');
  totalOrderDiv.textContent = `Total Order Price: $${totalOrderPrice.toFixed(2)}`;
}

function updateQuantityDisplay(mealId) {
  const quantitySpan = document.getElementById(`quantity-${mealId}`);
  quantitySpan.textContent = mealQuantities[mealId];
}



