// import { URL } from "./config.js";
import url from "./product.json";
import { getJSON } from "./helper.js";

export const state = {
  product: {},
  details: {},
  cart: [],
};

export const loadProduct = async function (name) {
  try {
    // const data = await getJSON(URL);
    const data = url;
    state.product = data.product;
    state.details = data.product.filter((result) => result.name === name);
  } catch (err) {
    throw err;
  }
};

export const addToCart = function (id) {
  if (state.product[id - 1].IsInCart === true) return;

  // state.cart.push(id);
  state.product[id - 1].IsInCart = true;
};

export const deleteFromCart = function (id) {
  state.product[id - 1].IsInCart = false;
};
