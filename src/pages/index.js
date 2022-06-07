import './index.css';
import {
  validationConfig,
  formSelectors,
  imageSelectors,
  elementsConfig,
  profileSelector,
  apiConfigOptions,
  nameInput,
  jobInput,
  confirmDeleteSelector
} from '../utils/constants';
import Card from '../components/Card';
import Api from "../components/Api";
import FormValidator from "../components/FormValidator";
import UserInfo from "../components/UserInfo";
import Section from "../components/Section"
import PopupWithImage from "../components/PopupWithImage";
import PopupWithConfirmDelete from "../components/PopupWithConfirmDelete";
import PopupWithForm from "../components/PopupWithForm";

const api = new Api(apiConfigOptions);

let idUser = null;

const profileInfo = new UserInfo(
  profileSelector.profileName,
  profileSelector.profileSubtitle,
  profileSelector.profileAvatarImage
);

const profileValidate = new FormValidator(validationConfig, formSelectors.popUpEditProfile);
profileValidate.enableValidation();
const elementValidate = new FormValidator(validationConfig, formSelectors.popUpAddElement);
elementValidate.enableValidation();
const avatarValidate = new FormValidator(validationConfig, formSelectors.popUpAvatarUpdate);
avatarValidate.enableValidation();

const imagePopup =  new PopupWithImage(imageSelectors.popUpImageElement);
imagePopup.setEventListeners();

const popupConfirmDelete = new PopupWithConfirmDelete(confirmDeleteSelector.popupConfirmDelete);
popupConfirmDelete.setEventListeners()

function addElement(data) {
  const element = new Card(
    elementsConfig.templateElement,
    {
      data: { ...data, idUser: idUser },
      handleCardClick: () => imagePopup.open(data),
      handleLikeClick: () => {
        if(element.like()){
          api.removeLikeElement(element.idElement())
            .then(res => element.setLike(res))
            .catch(err => console.log(`Ошибка: ${err}`))
        }else{
          api.addLikeElement(element.idElement())
            .then(res => element.setLike(res))
            .catch(err => console.log(`Ошибка: ${err}`))
        }
      },
      handleDeleteClick: () => {
        popupConfirmDelete.setFormConfirmDeleteSubmit(() => {
          api.delApiElement(element.idElement())
            .then(() => {
              element.delElement()
              popupConfirmDelete.close()
            })
            .catch(err => console.log(`Ошибка: ${err}`))
        })
        popupConfirmDelete.open()
      }
    }
  )
  return element.addElement();
}

const elementList = new Section({
    renderer: element => elementList.addItem(addElement(element))
  }, elementsConfig.elements);

const handleSubmitElement = new PopupWithForm({
  popup: formSelectors.popUpAddElement,
  handleFormSubmit: (data) => {
    handleSubmitElement.loading(true);
    api.addApiElement(data.inputTitleAdd, data.inputUrlAdd)
      .then(data => {
        elementList.addItem(addElement(data));
        handleSubmitElement.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => handleSubmitElement.loading(false))
  }
});
handleSubmitElement.setEventListeners();
document.querySelector(".profile__add-button").addEventListener("click",() => {
  elementValidate.resetValidation();
  handleSubmitElement.open()
});


const handleSubmitProfile = new PopupWithForm({
  popup: formSelectors.popUpEditProfile,
  handleFormSubmit: (data) => {
    handleSubmitProfile.loading(true);
    api.addUserProfileInfo(data.inputTitle, data.inputSubtitle)
      .then(data => {
        profileInfo.setUserInfo({
          name: data.name,
          about: data.about
        })
        handleSubmitProfile.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => handleSubmitProfile.loading(false))
  }
});
handleSubmitProfile.setEventListeners();
document.querySelector(".profile__edit-button").addEventListener('click', () => {
  const profile = profileInfo.getUserInfo();
  nameInput.value = profile.name;
  jobInput.value = profile.about;
  profileValidate.resetValidation();
  handleSubmitProfile.open();
});


const handleSubmitAvatar = new PopupWithForm({
  popup: formSelectors.popUpAvatarUpdate,
  handleFormSubmit: (data) => {
    handleSubmitAvatar.loading(true);
    api.addUserProfileAvatar(data.updateAvatar)
      .then(data => {
        profileInfo.setUserInfo({
          avatar: data.avatar
        })
        handleSubmitAvatar.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => handleSubmitAvatar.loading(false))
  }
});
handleSubmitAvatar.setEventListeners();
document.querySelector(".profile__avatar-update").addEventListener("click",() => {
  avatarValidate.resetValidation()
  handleSubmitAvatar.open()
});

Promise.all([ api.getUserProfile() , api.getElements()])
  .then(([resData, resElement]) => {
    idUser = resData._id;
    profileInfo.setUserInfo(resData);
    elementList.renderCards(resElement.reverse());
  })
  .catch(err =>  console.log(err));
