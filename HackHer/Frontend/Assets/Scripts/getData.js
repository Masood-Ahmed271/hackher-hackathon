"use strict";

function changeText1(store) {
  document.querySelector(".dropbtn").textContent = `${store}`;
}

class userEntry {
  constructor(food, store, price, sale) {
    this.food = food;
    this.store = store;
    this.price = price;
    this.sale = sale;
  }
}
let entry;

document.addEventListener("click", function () {
  let food = document.querySelector("#username").value;
  let store = document.querySelector(".dropbtn").textContent;
  let price = document.querySelector("#password").value;
  let sale = document.querySelector("#sale").value;
  entry = new userEntry(food, store, price, sale, entry);
  console.log(entry);
});
