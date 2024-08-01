const productContainer = document.querySelector(".productContainer");
const productTemplate = document.querySelector(".productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return "Empty";
  }
  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;
  });
};
