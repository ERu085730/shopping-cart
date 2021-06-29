import * as model from "./model.js";
import carView from "./views/carView.js";
import detailsView from "./views/detailsView.js";
import navView from "./views/navView.js";
import popupView from "./views/popupView.js";

const controlDetails = async function () {
  try {
    let id = window.location.hash.slice(1);
    if (!id) id = "cake";

    // Load Product
    await model.loadProduct(id);

    // Render Nav
    navView.render(id, false);

    // Render Details
    detailsView.render(model.state.details);
  } catch (err) {
    console.error(err);
  }
};

const controlAddToCart = function (id) {
  // Add product to cart
  model.addToCart(id);

  // Render Cart
  carView.render(model.state.product);
};

const controlDeleteFromCart = function (id) {
  // Delete product from cart
  model.deleteFromCart(id);

  // Render Cart
  carView.render(model.state.product);
};

const controlPopup = function (id) {
  // Render Popup
  popupView.render(model.state.product[id - 1]);
};

const init = function () {
  detailsView.addHandlerRender(controlDetails);
  detailsView.addHandlerAddToCart(controlAddToCart);
  detailsView.addHandlerPopup(controlPopup);
  carView.addHandleDeleteFromCart(controlDeleteFromCart);
  popupView.addHandlerClose();
};
init();
