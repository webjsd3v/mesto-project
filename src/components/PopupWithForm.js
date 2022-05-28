import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popup, form, handleFormSubmit) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = form;
    this._popupSubmit = this._form.querySelector(".popup__button");
    this._inputs = this._form.querySelector(".popup__input");
  }
  _getInputValues() {
    this._formValue = {};
    this._inputs.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this_formValue;
  }
  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }
  setEventListener() {
    super.setEventListener();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    super.closePopup();
    this._form.reset();
  }
}

export default PopupWithForm;
