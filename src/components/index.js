import '../pages/index.css';
import {
  profileName,
  profileSubtitle,
  popUpEditProfile,
  popUpOpenEdit,
  popUpCloseEdit,
  formEdit,
  nameInput,
  jobInput,
  elements,
  popUpAddElement,
  popUpOpenAdd,
  popUpCloseAdd,
  formAdd,
  popUpImageElement,
  popUpImageClose,
  validationConfig,
  popUpAvatarUpdate,
  popUpOpenAvatarUpdate,
  popUpCloseAvatarUpdate,
  formAvatarUpdate,
  profileAvatarImage
} from '../utils/constants';
import { addElement, renderCards } from './card';
import {openPopUp, closePopUp} from './modal';
import {enableValidation} from './validate'
import {handleSubmitAvatar, handleSubmitElement, handleSubmitProfile} from "./utils";

import  Api from "./Api";
import {apiConfigOptions} from "../utils/constants";
const api = new Api(apiConfigOptions);




popUpOpenEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopUp(popUpEditProfile);
})


popUpCloseEdit.addEventListener("click", () => {
  closePopUp(popUpEditProfile);
})

popUpImageClose.addEventListener("click", () => {
  closePopUp(popUpImageElement);
})

popUpOpenAdd.addEventListener("click",() => {
  openPopUp(popUpAddElement);
})

popUpCloseAdd.addEventListener("click", () => {
  closePopUp(popUpAddElement);
})

popUpOpenAvatarUpdate.addEventListener("click",() => {
  openPopUp(popUpAvatarUpdate);
})

popUpCloseAvatarUpdate.addEventListener("click", () => {
  closePopUp(popUpAvatarUpdate);
})

formEdit.addEventListener("submit",(evt)=>{
  handleSubmitProfile(evt)
})

formAdd.addEventListener("submit",(evt)=>{
  handleSubmitElement(evt);
})

formAvatarUpdate.addEventListener("submit", (evt) => {
  handleSubmitAvatar(evt)
})

export let idUser

Promise.all([ api.getUserProfile() , api.getElements()])
  .then(([resData, resElement]) => {
    idUser = resData._id;
    profileName.textContent = resData.name;
    profileSubtitle.textContent = resData.about;
    nameInput.value = resData.name;
    jobInput.value = resData.about;
    profileAvatarImage.src = resData.avatar;
    resElement.forEach(element => renderCards(elements , addElement(element), 'GET'));
  })
  .catch(err =>  console.log(err))

enableValidation(validationConfig);
