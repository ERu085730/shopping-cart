import View from "./View.js";

class CartView extends View {
  _parentElement = document.querySelector(".nav__cart__lists");

  addHandleDeleteFromCart(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".nav__cart__btn");
      if (!btn) return;
      handler(btn.id);
    });
  }

  _generateMarkup() {
    let total = 0;
    return (
      this._data
        .map((result) => {
          if (result.IsInCart === true) {
            total += result.price;
            return `<li class="nav__cart__list">
              <img
                src="${result.src}"
                alt=""
                class="nav__cart__img"
              />

              <div class="nav__cart__text">
                <h4 class="heading-4">cupcake</h4>
                <p class="nav__cart__price">${result.price}</p>
              </div>
              <button class="nav__cart__btn" id="${result.id}">
                <svg class="nav__cart__icon">
                  <use href="src/img/icon.svg#icon-trash"></use>
                </svg>
              </button>
            </li>
            `;
          }
        })
        .join("") +
      (total != 0 ? `<p class="nav__cart__total">Total  $${total}</p>` : "")
    );
  }
}

export default new CartView();
