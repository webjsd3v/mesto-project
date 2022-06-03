import '../pages/index.css';
import {
  validationConfig,
  formSelectors,
  imageSelectors,
  elementsConfig,
  profileSelector,
  apiConfigOptions,
  nameInput,
  jobInput
} from '../utils/constants';
import Card from './Card';
import Api from "./Api";
import PopupWithImage from "./PopupWithImage";
import FormValidator from "./FormValidator";
import UserInfo from "./UserInfo";
import PopupWithForm from "./PopupWithForm";
import Section from "./Section"

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
        api.delApiElement(element.idElement())
          .then(() => element.delElement())
          .catch(err => console.log(`Ошибка: ${err}`))
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
  elementValidate.inactiveButton();
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
  profileValidate.inactiveButton();
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
  avatarValidate.inactiveButton()
  handleSubmitAvatar.open()
});

Promise.all([ api.getUserProfile() , api.getElements()])
  .then(([resData, resElement]) => {
    idUser = resData._id;
    profileInfo.setUserInfo(resData);
    elementList.renderCards(resElement.reverse());
  })
  .catch(err =>  console.log(err));
