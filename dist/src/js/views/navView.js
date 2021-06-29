import View from "./View.js";

class NavView extends View {
  _parentElement = document.querySelectorAll(".nav__item");
  _pickElement = document.querySelector(".nav__item--active");

  _generateMarkup() {
    this._pickElement.classList.remove("nav__item--active");
    this._parentElement.forEach((result) => {
      if (result.href.slice(result.href.indexOf("#") + 1) === this._data) {
        result.classList.add("nav__item--active");
        this._pickElement = result;
        return;
      }
    });
  }
}

export default new NavView();
