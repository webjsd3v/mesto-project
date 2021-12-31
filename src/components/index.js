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
  nameInputAdd,
  urlInputAdd,
  popUpImageElement,
  popUpImageClose,
  validationConfig,
  popUpAvatarUpdate,
  popUpOpenAvatarUpdate,
  popUpCloseAvatarUpdate,
  popUpCloseConfirm,
  popUpConfirm,
  formAvatarUpdate, formConfirm
} from './utils';
import { addElement, renderCards } from './card';
import {openPopUp, closePopUp} from './modal';
import {enableValidation} from './validate'

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

popUpImageClose.addEventListener("click", () => {
  closePopUp(popUpImageElement);
})

formAdd.addEventListener("submit",(evt)=>{
  evt.preventDefault();
  elements.prepend(addElement(nameInputAdd.value, urlInputAdd.value))
  formAdd.reset();
  closePopUp(popUpAddElement);
})

popUpOpenAdd.addEventListener("click",() => {
  openPopUp(popUpAddElement);
})

popUpCloseAdd.addEventListener("click", () => {
  formAdd.reset();
  closePopUp(popUpAddElement);
})

popUpOpenAvatarUpdate.addEventListener("click",() => {
  openPopUp(popUpAvatarUpdate);
})

popUpCloseAvatarUpdate.addEventListener("click", () => {
  formAvatarUpdate.reset();
  closePopUp(popUpAvatarUpdate);
})

formAvatarUpdate.addEventListener("submit", (evt) => {
  evt.preventDefault();
  formAvatarUpdate.reset();
  closePopUp(popUpAvatarUpdate);
})

popUpCloseConfirm.addEventListener('click', () => {
  closePopUp(popUpConfirm)
})

renderCards()

enableValidation(validationConfig);


// :TODO
// :FIXME
