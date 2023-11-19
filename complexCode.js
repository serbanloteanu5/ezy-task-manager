// Filename: complexCode.js
// Description: An elaborate and complex JavaScript code showcasing a fictional e-commerce website's shopping cart functionality

// Define Class Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Define Class ShoppingCart
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  
  addProduct(product) {
    this.products.push(product);
  }
  
  removeProduct(productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
  
  getTotalQuantity() {
    let totalQuantity = 0;
    for (const product of this.products) {
      totalQuantity += product.quantity;
    }
    return totalQuantity;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.getTotalPrice();
    }
    return totalPrice;
  }

  getFormattedTotalPrice() {
    return `$${this.getTotalPrice().toFixed(2)}`;
  }
}

// Create instance of ShoppingCart
const shoppingCart = new ShoppingCart();

// Create some example products
const product1 = new Product('Product 1', 15.99, 2);
const product2 = new Product('Product 2', 9.99, 1);

// Add products to the shopping cart
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);

// Remove one product from the shopping cart
shoppingCart.removeProduct('Product 2');

// Display shopping cart information
console.log('Shopping Cart:');
console.log('Total Quantity:', shoppingCart.getTotalQuantity());
console.log('Total Price:', shoppingCart.getFormattedTotalPrice());

// Output:
// Shopping Cart:
// Total Quantity: 2
// Total Price: $31.98

// ... (More code continues...)