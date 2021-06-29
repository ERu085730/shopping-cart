import View from "./View.js";

class PopupView extends View {
  _parentElement = document.querySelector(".popup");

  addHandlerClose() {
    this._parentElement.addEventListener("click", this._close.bind(this));
  }

  _close(e) {
    const btn =
      e.target.closest(".popup__close") || e.target.closest(".overlay");
    if (!btn) return;
    this._parentElement.classList.add("hidden");
  }

  _generateMarkup() {
    this._parentElement.classList.remove("hidden");
    return `
      <div class="popup__content">
        <button class="popup__close">&times;</button>
        <div class="popup__left">
          <img src="${this._data.src}" alt="${this._data.name} photo" class="popup__img" />
        </div>
        <div class="popup__right">
          <h2 class="heading-2">${this._data.name}</h2>
          <p class="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            distinctio et praesentium minima velit quibusdam nostrum quisquam,
            voluptatem placeat harum omnis, unde tempora amet obcaecati quas
            totam minus aut recusandae?
          </p>
        </div>
      </div>
      <div class="overlay"></div>
    `;
  }
}

export default new PopupView();
