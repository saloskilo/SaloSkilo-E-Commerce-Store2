import { getCartProductFromLS } from "./getCartProductFromLS.JS";

export const addToCart=(event,id,stock)=>{

    let arrLocalStorageProduct=getCartProductFromLS();
    const currentElement=document.querySelector(`#card${id}`);

    let quantity=currentElement.querySelector('.productQuantity').innerText;
    let price=currentElement.querySelector('.productPrice').innerText;

    // console.log(price,quantity);

    price=price.replace("$","");
    price=Number(price*quantity);
    quantity=Number(quantity);
    // console.log(price,quantity);

    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));
};