'use strict';

const whiteShirtBtn = document.querySelector('.whiteShirtBtn');
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

whiteShirtBtn.addEventListener('click', () => {
let whiteTshirt = new ProductCreator('T-shirt', 'White', 250, 25, 'Clothing');
  shoppingCart.push(whiteTshirt);
})

// redShirtBtn.addEventListener('click', () => {
//   let redTshirt = new ProductCreator('T-shirt', 'Red', 250, 25, 'Clothing');
//     shoppingCart.push(redTshirt);
//   })
  
console.log(shoppingCart);