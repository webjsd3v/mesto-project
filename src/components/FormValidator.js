export default class FormValidator{
  constructor(formElement, objectElement) {
    console.log(formElement)
    this._formElement = formElement;
    this._inputSelector= objectElement.inputSelector;
    this._submitButtonSelector = objectElement.submitButtonSelector;
    this._inactiveButtonClass = objectElement.inactiveButtonClass;
    this._inputErrorClass = objectElement.inputErrorClass;
    this._errorClass = objectElement.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState = (inputList, buttonElement) =>{
    if (this._hasInvalidInput(inputList)){
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    }
    else{
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners = () => {
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    })
    this._setEventListeners();
  }
}
