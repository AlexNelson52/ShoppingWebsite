'use strict';

const redShirtBtn = document.querySelector('.redShirtBtn');

const shoppingCart = [];


class ProductCreator {
   constructor (item, color, price, discount, department){
    this.item = item,
    this.color = color,
    this.price = price,
    this.discount = discount,
    this.department = department
   }
};

redShirtBtn.addEventListener('click', () => {
let redTshirt = new ProductCreator('T-shirt', 'red', 250, 25, 'Clothing');
  shoppingCart.push(redTshirt);
})


console.log(shoppingCart);