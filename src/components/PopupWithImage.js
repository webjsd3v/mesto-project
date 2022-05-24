import Popup from "./Popup";

class PopupWithImage extends Popup{
  constructor(popup) {
    super(popup);
    this._image = this._elementPopup.querySelector('.popup__figure-image');
    this._caption = this._elementPopup.querySelector('.popup__caption');
  }

  open({name,link}) {
    this._image.src = link;
    this._image.alt = `Фотография ${name}`;
    this._caption.textContent = name;
    super.open();
  }
}

export default PopupWithImage
