import { homeQuantityToggle } from "./homeQuantityToggle.js";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
  if (!products) {
    return "Empty";
  }
  products.forEach((curProd) => {
    const { brand,id,category, description,  image, name, price, stock } =
      curProd;


      const productClone=document.importNode(productTemplate.content,true);

      productClone.querySelector('#cardvalue').setAttribute('id',`card${id}`);

      productClone.querySelector('.productName').textContent=name;
      productClone.querySelector('.category').textContent=category;
      productClone.querySelector('.productImage').src=image;
      productClone.querySelector('.productImage').alt=name;
      productClone.querySelector('.productDescription').textContent=description;
      productClone.querySelector('.productPrice').textContent=`$ ${price}`;
      productClone.querySelector('.productStock').textContent=stock;
      productClone.querySelector('.productActualPrice').textContent=`$ ${price*3}`;

      
      productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
        homeQuantityToggle(event,id,stock);
      });

      productContainer.append(productClone);
  });
};
  