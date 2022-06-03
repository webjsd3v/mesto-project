import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor({popup, handleFormSubmit}) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._elementPopup.querySelector('.popup__form');
    this._btnSubmit = this._elementPopup.querySelector("button[type='submit']");
    this._inputs = this._elementPopup.querySelectorAll(".popup__input")
    this._buttonText = this._btnSubmit.textContent;
  }
  _getInputValues() {
    this._formValue = {};
    this._inputs.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }

  loading(send){
    this._btnSubmit.textContent = send ? 'Сохранение...' : this._buttonText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}

export default PopupWithForm;
