const  showInputError  = (formElement, inputElement, errorMessage, objectElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectElement.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objectElement.errorClass);
};

const hideInputError = (formElement, inputElement, objectElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectElement.inputErrorClass);
  errorElement.classList.remove(objectElement.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, objectElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objectElement);
  } else {
    hideInputError(formElement, inputElement, objectElement);
  }
};

export function inactiveButton(buttonElement, objectElement){
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(objectElement.inactiveButtonClass);
}

function toggleButtonState(inputList, buttonElement, objectElement){
  if (hasInvalidInput(inputList)){
    inactiveButton(buttonElement, objectElement)
  }
  else{
    buttonElement.classList.remove(objectElement.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

function hasInvalidInput(inputList){
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

const setEventListeners = (formElement, objectElement) => {
  const inputList = Array.from(formElement.querySelectorAll(objectElement.inputSelector));
  const buttonElement = formElement.querySelector(objectElement.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, objectElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, objectElement);
      toggleButtonState(inputList, buttonElement, objectElement);
    });
  });
};

function enableValidation(objectElement){
  const formList = Array.from(document.querySelectorAll(objectElement.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    })
    setEventListeners(formElement, objectElement);
  });
}

export {
  enableValidation
}
