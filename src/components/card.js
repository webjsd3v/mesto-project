import {templateElement, initialCards, elements} from './utils';
import {openImage} from './modal'

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

function renderCards(){
  initialCards.forEach((arg)=>{
    elements.append(addElement(arg.name, arg.link))
  })
}

export {
  addElement,
  renderCards
}
