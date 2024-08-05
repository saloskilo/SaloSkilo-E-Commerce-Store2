import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS.JS";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => {
    curElem.id === curProd.id;
  });
});
console.log(filterProducts);
