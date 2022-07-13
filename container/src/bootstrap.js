// import "products/ProductsIndex";
import { mount } from "products/ProductsIndex";
import { mountCarts } from "carts/CartsIndex";

console.log("CONTAINER!!!");

mount(document.querySelector("#my-products"));
mountCarts(document.querySelector("#my-carts"));
