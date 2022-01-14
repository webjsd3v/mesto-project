import {templateElement} from './constants';
import {idUser} from "./index";
import {openImage} from './modal'
import {addLikeElement, delApiElement, removeLikeElement} from "./api";

function addElement(elements){
  const elementItem = templateElement.querySelector('.element').cloneNode(true);
  const imageElement = elementItem.querySelector('.element__image');
  const titleElement = elementItem.querySelector('.element__title');
  const numberLike = elementItem.querySelector('.element__count');
  const buttonLike = elementItem.querySelector('.element__button-like');
  const buttonTrash = elementItem.querySelector(".element__button-trash");

  titleElement.textContent = elements.name;
  imageElement.src = elements.link;
  imageElement.alt = `Фотография ${elements.name}`;
  numberLike.textContent = elements.likes.length;
  buttonTrash.elements = elements._id;

  if (idUser !== elements.owner._id){
    buttonTrash.remove()
  }else{
    buttonTrash.addEventListener("click",() => {
      delApiElement(buttonTrash.elements)
        .then(() => elementItem.remove())
        .catch(err => console.log(err))
    })
  }

  if(elements.likes.find(like => like._id === idUser)){
    buttonLike.classList.add("element__button-like_active");
  }else {
    buttonLike.classList.remove("element__button-like_active");
  }

  buttonLike.addEventListener("click", () => {
    if(elements.likes.find(like => like._id === idUser)){
      removeLikeElement(elements._id)
        .then(elementData => {
          numberLike.textContent = elementData.likes.length;
          elements.likes = elementData.likes;
        })
        .catch(err => console.log(err))
        .finally(()=>{
          buttonLike.classList.remove("element__button-like_active");
        })
    }else {
      addLikeElement(elements._id)
        .then(elementData => {
          numberLike.textContent = elementData.likes.length;
          elements.likes = elementData.likes;
        })
        .catch(err => console.log(err))
        .finally(()=>{
          buttonLike.classList.add("element__button-like_active");
        })
    }
  })

  imageElement.addEventListener("click", () => openImage(elements.name,elements.link));

  return elementItem;
}

function renderCards(section, element){
  section.prepend(element)
}

export {
  addElement,
  renderCards
}
