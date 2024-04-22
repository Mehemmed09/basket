let id = 0;
let car = [];

class cars {
  constructor(image, model, name, price) {
    this.id = id++;
    this.image = image;
    this.model = model;
    this.name = name;
    this.price = price;
  }
}

const BasketItemsList = document.getElementById("BasketItemsList");
const cards = document.getElementById("cards");
const basketItems = [];

if (localStorage.getItem("car")) {
  car = JSON.parse(localStorage.getItem("car"));
} else {
  car = [];
}



function addbasket(id) {
  const target = car.find((carss) => carss.id == id);
  basketItems.push(target);
  renderBasket(basketItems);
}

function renderUI(list) {
  let innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    innerHTML += `
      <div class="card" style="width: 18rem">
        <img class="card-img-top" src="${list[i].image}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${list[i].name}</h5>
          <p class="card-text">${list[i].model}</p>
          <p class="card-text">${list[i].price}</p>
          <button class="btn btn-primary add-to-basket" onclick="addbasket(${list[i].id})">Add Basket</button>
        </div>
      </div>
    `;
  }
  cards.innerHTML = innerHTML;
}

function renderBasket(basketItems) {
  let innerHTML = "";
  for (let i = 0; i < basketItems.length; i++) {
    innerHTML += `
      <tr>
        <td>
          <img width="50px" height="50px" src="${basketItems[i].image}" alt="" />
        </td>
        <td>${basketItems[i].model}</td>
        <td>${basketItems[i].price}</td>
      </tr>
    `;
  }
  BasketItemsList.innerHTML = innerHTML;
}
