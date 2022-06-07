import Popup from "./Popup";

class PopupWithConfirmDelete extends Popup{
  constructor(popup) {
    super(popup);
  }

  setFormConfirmDeleteSubmit(popupConfirmDelete){
    this._formConfirmDeleteSubmit = popupConfirmDelete;
  }

  setEventListeners() {
    this._elementPopup.addEventListener('submit', evt =>{
      evt.preventDefault();
      this._formConfirmDeleteSubmit()
    })
    super.setEventListeners();
  }

}

export default PopupWithConfirmDelete;
