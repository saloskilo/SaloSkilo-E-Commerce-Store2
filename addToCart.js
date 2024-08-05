import { getCartProductFromLS } from "./getCartProductFromLS.JS";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentElement = document.querySelector(`#card${id}`);

  let quantity = currentElement.querySelector(".productQuantity").innerText;
  let price = currentElement.querySelector(".productPrice").innerText;

  console.log(price, quantity);

  price = price.replace("$", "");

  let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id == id);
  if (existingProd) {
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);
  console.log(price, quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
};
