import { getCartProductFromLS } from "./getCartProductFromLS.JS";
import { updateCartTotal } from "./updateCartTotal";

export const incrementDecreament = (event, id, stock, price) => {

    const currentCardElement = document.querySelector(`#card${id}`);
    const productPrice = currentCardElement.querySelector('.productPrice');

    const productQuantity = currentCardElement.querySelector('.productQuantity');

    let quantity = 1;
    let localStoragePrice = 0;

    let localStorageProduct = getCartProductFromLS();

    let existingProd = localStorageProduct.find((curProd) => curProd.id === id);
    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    } else {
        localStoragePrice = price;
        price = price;
    }
    if (event.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity == stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }
    if (event.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    }
    localStoragePrice = price * quantity;
    localStoragePrice=Number(localStoragePrice.toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = localStorageProduct.map((curProd) => {
        return curProd.id == id ? updatedCart : curProd;
    });
    //  console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    productPrice.innerHTML=localStoragePrice;
    productQuantity.innerHTML=quantity;

    updateCartTotal();

};

