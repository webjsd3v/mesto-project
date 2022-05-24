class FormValidator{
  constructor(validationConfig, popup) {
      this._elementPopup = document.querySelector(popup);
      this._inputSelector = validationConfig.inputSelector;
      this._submitButtonSelector = validationConfig.submitButtonSelector;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._errorClass = validationConfig.errorClass;
  }

  _showInputError(){}

  _hideInputError(){}

  _checkInputValidity(){}

  _toggleButtonState(){}

  _hasInvalidInput(){}

  _setEventListeners(){}

  enableValidation(){}
}


export default FormValidator
