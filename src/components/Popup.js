class Popup {
  constructor(popup) {
    this._elementPopup = document.querySelector(popup);
    this._handleEsc = this._handleEsc.bind(this);
  }

  _handleEsc(event) {
    event.preventDefault();
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._elementPopup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEsc);
  }

  close() {
    this._elementPopup.classList.remove("popup_closed");
    document.removeEventListener("keydown", this._handleEsc);
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__closed")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
