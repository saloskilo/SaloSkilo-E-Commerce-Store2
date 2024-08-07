import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS.JS";
import { incrementDecreament } from "./incrementDecreament";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartTotal } from "./updateCartTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');


const showCartProducts = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    const LSActualData = fetchQuantityFromCartLS(id, price);
    console.log(LSActualData);

    productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productImage').src = image;

    productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;
    productClone.querySelector('.productPrice').textContent = LSActualData.price;


    productClone.querySelector('.stockElement').addEventListener('click', (event) => 
      incrementDecreament(event,id,stock,price));


    productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => removeProductFromCart(id));

    cartElement.appendChild(productClone);

  });
}


// showing the card products 
showCartProducts();

// calculate the total 
updateCartTotal();