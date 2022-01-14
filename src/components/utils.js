import {addApiElement, addUserProfileAvatar, addUserProfileInfo} from "./api";
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
} from "./constants";
import {closePopUp} from "./modal";
import {inactiveButton} from "./validate";
import {addElement, renderCards} from "./card";

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
  renderCards(elements , addElement(res))
  formAdd.reset()
  closePopUp(popUpAddElement)
}

export function handleSubmitProfile(event){
  event.preventDefault();
  editProfileButton.textContent = 'Сохранение...'
  addUserProfileInfo(nameInput.value, jobInput.value)
    .then(req => updateProfile(req))
    .catch(err => console.log(err))
    .finally(() => {
      editProfileButton.textContent = 'Сохранить'
      inactiveButton(editProfileButton, objectElement)
    })
}

export function handleSubmitAvatar(event){
  event.preventDefault();
  avatarUpdateButton.textContent = 'Сохранение...'
  addUserProfileAvatar(avatarUpdateInput.value)
    .then(resData => updateAvatar(resData))
    .catch(err => console.log(err))
    .finally(() => {
      avatarUpdateButton.textContent = 'Сохранить'
      inactiveButton(avatarUpdateButton, objectElement)
    })
}

export function handleSubmitElement(event){
  event.preventDefault();
  addElementButton.textContent = 'Сохранение...'
  addApiElement(nameInputAdd.value, urlInputAdd.value)
    .then(res => addCard(res))
    .catch(err => console.log(err))
    .finally(() => {
      addElementButton.textContent = 'Сохранить'
      inactiveButton(addElementButton, objectElement)
    })
}


