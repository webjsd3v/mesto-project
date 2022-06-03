export const formSelectors = {
  popUpEditProfile: ".popup_type_edit-profile",
  popUpAvatarUpdate: ".popup_type_update-avatar",
  popUpAddElement: ".popup_type_add-element"
}

export const elementsConfig = {
  elements: '.elements',
  templateElement : ".element-template"
}

export const profileSelector = {
   profileName : ".profile__title",
   profileSubtitle : ".profile__subtitle",
   profileAvatarImage : ".profile__avatar"
}

export const imageSelectors = {
  popUpImageElement : '.popup_type_image',
}

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const apiConfigOptions = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
  headers: {
    authorization: "e3d09a4e-aec8-4522-a7d6-72bcc999d7a1",
    'Content-Type': 'application/json'
  }
}


const popUpEditProfile =  document.querySelector(".popup_type_edit-profile");
const formEdit = popUpEditProfile.querySelector(".popup__form");
export const nameInput = formEdit.inputTitle;
export const jobInput = formEdit.inputSubtitle;





