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

const openImage = (name, link) => {
  popUpImage.src = link;
  popUpImage.alt = `Фотография ${name}`;
  popUpImageCaption.textContent = name;
  openPopUp(popUpImageElement);
}

function openPopUp(popup){
  popup.classList.add("popup_opened");
}

function closePopUp(arg){
  arg.classList.remove("popup_opened");
}

popUpOpenEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopUp(popUpEditProfile);
})

popUpCloseEdit.addEventListener("click", () => {
  closePopUp(popUpEditProfile);
})

formEdit.addEventListener("submit",(evt)=>{
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopUp(popUpEditProfile);
})

function addElement(name, link){
  const elementItem = templateElement.querySelector(".element").cloneNode(true);
  const imageElement = elementItem.querySelector(".element__image");
  const titleElement = elementItem.querySelector(".element__title");

  titleElement.textContent = name;
  imageElement.src = link;
  imageElement.alt = `Фотография ${name}`;

  const buttonTrash = elementItem.querySelector(".element__button-trash");
  buttonTrash.addEventListener("click",() => {
    elementItem.remove()
  })

  const buttonLike = elementItem.querySelector(".element__button-like");
  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("element__button-like_active");
  })

  imageElement.addEventListener("click", () => openImage(name,link));

   return elementItem;
}

popUpImageClose.addEventListener("click", () => {
  closePopUp(popUpImageElement)
})

formAdd.addEventListener("submit",(evt)=>{
  evt.preventDefault();
  elements.prepend(addElement(nameInputAdd.value, urlInputAdd.value))
  closePopUp(popUpAddElement);
})


popUpOpenAdd.addEventListener("click",() => {
  nameInputAdd.value = nameInputAdd.textContent;
  urlInputAdd.value = urlInputAdd.textContent;
  openPopUp(popUpAddElement);
})

popUpCloseAdd.addEventListener("click", () => {
  closePopUp(popUpAddElement)
})

function renderCards(){
  initialCards.forEach((arg)=>{
    elements.append(addElement(arg.name, arg.link))
  })
}

renderCards()
