export const addToCart=(event,id,stock)=>{

    const currentElement=document.querySelector(`#card${id}`);

    let quantity=currentElement.querySelector('.productQuantity').innerText;
    let price=currentElement.querySelector('.productPrice').innerText;

    console.log(price,quantity);
};