import View from "./View.js";

class DetailsView extends View {
  _parentElement = document.querySelector(".details__lists");

  addHandlerRender(handler) {
    window.addEventListener("hashchange", handler);
    window.addEventListener("load", handler);
  }

  addHandlerAddToCart(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".details__btn");
      if (!btn) return;
      handler(btn.id);
    });
  }

  addHandlerPopup(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".details__img");
      if (!btn) return;
      handler(btn.id);
    });
  }

  _generateMarkup() {
    return this._data
      .map(
        (result) => `
      <li class="details__list">
        <button class="details__img" id="${result.id}">
          <img src="${result.src}" alt="${result.name} photo" />
        </button>
        <div class="details__item">
          <p class="details__price">$${result.price}</p>
          <button class="details__btn" id="${result.id}">
            <svg class="details__icon">
              <use href="src/img/icon.svg#icon-cart"></use>
            </svg>
          </button>
        </div>
      </li>
    `
      )
      .join("");
  }
}

export default new DetailsView();
