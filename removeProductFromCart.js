import { getCartProductFromLS } from "./getCartProductFromLS.JS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {

    let cartProducts = getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    console.log(cartProducts);

    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

    // remove Div on click 
    let removeDiv=document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
    }
    //show toast when product added to the cart
    showToast("delete", id);
    updateCartValue(cartProducts);
}