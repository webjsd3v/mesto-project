import {addApiElement, addUserProfileAvatar, addUserProfileInfo} from "./Api";
import {
  avatarUpdateButton,
  profileAvatarImage,
  formAvatarUpdate,
  avatarUpdateInput,
  editProfileButton,
  profileName,
  profileSubtitle,
  popUpAvatarUpdate,
  validationConfig as objectElement,
  nameInput,
  jobInput,
  popUpEditProfile,
  elements,
  nameInputAdd,
  urlInputAdd,
  addElementButton, formAdd, popUpAddElement
} from "../utils/constants";
import {closePopUp} from "./modal";
import {inactiveButton} from "./FormValidator";
import {addElement, renderCards} from "./Card";

function updateProfile(res){
  profileName.textContent = res.name;
  profileSubtitle.textContent = res.about;
  closePopUp(popUpEditProfile);
}

function updateAvatar(res){
  profileAvatarImage.src = res.avatar;
  closePopUp(popUpAvatarUpdate);
  formAvatarUpdate.reset();
}

function addCard(res) {
  renderCards(elements , addElement(res), 'POST')
  formAdd.reset()
  closePopUp(popUpAddElement)
}

export function handleSubmitProfile(event){
  event.preventDefault();
  editProfileButton.textContent = 'Сохранение...'
  addUserProfileInfo(nameInput.value, jobInput.value)
    .then(req =>{
      updateProfile(req)
      inactiveButton(editProfileButton, objectElement)
    })
    .catch(err => console.log(err))
    .finally(() => {
      editProfileButton.textContent = 'Сохранить'
    })
}

export function handleSubmitAvatar(event){
  event.preventDefault();
  avatarUpdateButton.textContent = 'Сохранение...'
  addUserProfileAvatar(avatarUpdateInput.value)
    .then(resData =>{
      updateAvatar(resData);
      inactiveButton(avatarUpdateButton, objectElement)
    })
    .catch(err => console.log(err))
    .finally(() => {
      avatarUpdateButton.textContent = 'Сохранить'
    })
}

export function handleSubmitElement(event){
  event.preventDefault();
  addElementButton.textContent = 'Сохранение...'
  addApiElement(nameInputAdd.value, urlInputAdd.value)
    .then(res => {
      addCard(res);
      inactiveButton(addElementButton, objectElement);
    })
    .catch(err => console.log(err))
    .finally(() => {
      addElementButton.textContent = 'Сохранить'
    })
}


