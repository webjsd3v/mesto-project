const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const overlayList = Array.from(document.querySelectorAll('.popup'));

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__title");
const profileSubtitle = profile.querySelector(".profile__subtitle");
const popUpEditProfile =  document.querySelector(".popup_type_edit-profile");
const popUpOpenEdit = profile.querySelector(".profile__edit-button");
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
const nameInputAdd = formAdd.inputTitleAdd;
const urlInputAdd = formAdd.inputUrlAdd;
const popUpImageElement = document.querySelector(".popup_type_image");
const popUpImage = popUpImageElement.querySelector(".popup__figure-image");
const popUpImageCaption = popUpImageElement.querySelector(".popup__caption");
const popUpImageClose = popUpImageElement.querySelector(".popup__close-btn");


const popUpOpenAvatarUpdate = profile.querySelector(".profile__avatar-update");
const popUpAvatarUpdate = document.querySelector(".popup_type_update-avatar");
const popUpCloseAvatarUpdate = popUpAvatarUpdate.querySelector(".popup__close-btn");
const formAvatarUpdate = popUpAvatarUpdate.querySelector('.popup__form');

const popUpConfirm = document.querySelector('.popup_type_confirm');
const popUpCloseConfirm = popUpConfirm.querySelector('.popup__close-btn');
const formConfirm = popUpConfirm.querySelector('.popup__button');





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
  initialCards,
  overlayList,
  popUpAvatarUpdate,
  popUpOpenAvatarUpdate,
  popUpCloseAvatarUpdate,
  formAvatarUpdate,
  popUpConfirm,
  popUpCloseConfirm,
  formConfirm,
}
