import faker from "faker";

const mountCarts = (el) => {
  let carts = `<div>you have  ${faker.random.number()} item </div>`;
  el.innerHTML = carts;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-carts");
  //Asumming our container element does not have an element with id dev-products
  if (el) {
    mountCarts(el);
  }
}

export { mountCarts };
