import '../pages/index.css';
import {
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
  validationConfig
} from '../components/utils';
import { addElement, renderCards } from '../components/card';
import {openPopUp, closePopUp} from '../components/modal';
import {enableValidation} from '../components/validate'

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

renderCards()

enableValidation(validationConfig);
