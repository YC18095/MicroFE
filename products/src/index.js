import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situasition 1:
// - We are running this file in development in isolation
// - We are using ourr local indexedDB.html file
// - Which defenily has an element with an id of 'dev-products'
// - We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  //Asumming our container element does not have an element with id dev-products
  if (el) {
    mount(el);
  }
}

// Context/Situation 2:
// - We are running this file in development or production
// - through the Container app.
// - No GUARANTEE that an element with an id of 'dev-products'
// - We DO NOT WANT try to immediately render the app.
export { mount };
