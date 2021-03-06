import { commerce } from "faker";

const mount = (element) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");
  if (element) {
    mount(element);
  }
}

export { mount };
