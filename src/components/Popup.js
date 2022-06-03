class Popup {
  constructor(popup) {
    this._elementPopup = document.querySelector(popup);
    this._handleEsc = this._handleEsc.bind(this);
  }

  _handleEsc(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._elementPopup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEsc);
  }

  close() {
    this._elementPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEsc);
  }

  setEventListeners() {
    this._elementPopup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__close-btn")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
