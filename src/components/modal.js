import {
  popUpImageElement,
  popUpImage,
  popUpImageCaption,
  overlayList
} from './constants';


overlayList.forEach(event => {
  event.addEventListener('click', event => {
    if (event.target === event.currentTarget){
      closePopUp(document.querySelector('.popup_opened'))
    }
  })
})

function closeToEsc(event){
  if(event.key === 'Escape'){
    closePopUp(document.querySelector('.popup_opened'))
  }
}

const openImage = (name, link) => {
  popUpImage.src = link;
  popUpImage.alt = `Фотография ${name}`;
  popUpImageCaption.textContent = name;
  openPopUp(popUpImageElement);
}

function openPopUp(popup){
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeToEsc)
}

function closePopUp(arg){
  arg.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeToEsc);
}

export {
  openImage,
  openPopUp,
  closePopUp
}
