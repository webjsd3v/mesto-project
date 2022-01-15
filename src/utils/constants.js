const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const apiConfigOptions = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
  headers: {
    authorization: "e3d09a4e-aec8-4522-a7d6-72bcc999d7a1",
    'Content-Type': 'application/json'
  }
}

const overlayList = Array.from(document.querySelectorAll('.popup'));

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__title");
const profileSubtitle = profile.querySelector(".profile__subtitle");
const popUpEditProfile =  document.querySelector(".popup_type_edit-profile");
const popUpOpenEdit = profile.querySelector(".profile__edit-button");
const editProfile = document.querySelector(".popup_type_edit-profile");
const editProfileButton = editProfile.querySelector(".popup__button");
const popUpCloseEdit = popUpEditProfile.querySelector(".popup__close-btn");
const formEdit = popUpEditProfile.querySelector(".popup__form");
const nameInput = formEdit.inputTitle;
const jobInput = formEdit.inputSubtitle;
const elements = document.querySelector(".elements");
const templateElement = document.querySelector(".element-template").content;
const popUpAddElement = document.querySelector(".popup_type_add-element");
const popUpOpenAdd = profile.querySelector(".profile__add-button");
const popUpCloseAdd = popUpAddElement.querySelector(".popup__close-btn");
const formAdd = popUpAddElement.querySelector(".popup__form");
const addElementButton = popUpAddElement.querySelector('.popup__button')
const nameInputAdd = formAdd.inputTitleAdd;
const urlInputAdd = formAdd.inputUrlAdd;
const popUpImageElement = document.querySelector(".popup_type_image");
const popUpImage = popUpImageElement.querySelector(".popup__figure-image");
const popUpImageCaption = popUpImageElement.querySelector(".popup__caption");
const popUpImageClose = popUpImageElement.querySelector(".popup__close-btn");

const popUpOpenAvatarUpdate = profile.querySelector(".profile__avatar-update");
const profileAvatarImage = profile.querySelector('.profile__avatar')
const popUpAvatarUpdate = document.querySelector(".popup_type_update-avatar");
const popUpCloseAvatarUpdate = popUpAvatarUpdate.querySelector(".popup__close-btn");
const formAvatarUpdate = popUpAvatarUpdate.querySelector('.popup__form');
const avatarUpdateButton = popUpAvatarUpdate.querySelector('.popup__button')
const avatarUpdateInput = popUpAvatarUpdate.querySelector('.popup__input')

export {
  profile,
  profileName,
  profileSubtitle,
  popUpEditProfile,
  popUpOpenEdit,
  popUpCloseEdit,
  formEdit,
  nameInput,
  jobInput,
  elements,
  templateElement,
  popUpAddElement,
  popUpOpenAdd,
  popUpCloseAdd,
  formAdd,
  nameInputAdd,
  urlInputAdd,
  popUpImageElement,
  popUpImage,
  popUpImageCaption,
  popUpImageClose,
  validationConfig,
  overlayList,
  popUpAvatarUpdate,
  popUpOpenAvatarUpdate,
  popUpCloseAvatarUpdate,
  formAvatarUpdate,
  apiConfigOptions,
  avatarUpdateButton,
  avatarUpdateInput,
  profileAvatarImage,
  editProfileButton,
  addElementButton
}
