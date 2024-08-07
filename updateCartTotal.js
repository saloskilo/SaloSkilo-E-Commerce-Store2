import { getCartProductFromLS } from "./getCartProductFromLS.JS";
let localCartProducts = getCartProductFromLS();

let initialValue = 0;

export const updateCartTotal = () => {

    let subTotal = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');

    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue)
    console.log(totalProductPrice);


    subTotal.innerText = totalProductPrice;
    productFinalTotal.innerText = `$${totalProductPrice + 50}`;

}