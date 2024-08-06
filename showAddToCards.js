import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS.JS";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => {
    curElem.id === curProd.id;
  });
});
console.log(filterProducts);


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productContainer');


const showCartProducts = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.Content, true);

    productClone.querySelector('#cardvalue').setAttribute('id',`card${id}`);

    productClone.querySelector('.productName').textContent=name;
    productClone.querySelector('.category').textContent=category;
    productClone.querySelector('.productImage').src=image;
    cartElement.appendChild(productClone);

  });
}



showCartProducts();