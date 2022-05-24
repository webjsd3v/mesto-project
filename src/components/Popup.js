class Popup{
  constructor(popup) {
    this._elementPopup = document.querySelector(popup);
    this._handleEsc = this._handleEsc.bind(this);
  }

  _handleEsc(event){
    event.preventDefault();
    if (event.key === 'Escape'){
      this.close()
    }
  }

  open(){
    this._elementPopup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEsc)
  }

  close(){
    this._elementPopup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEsc);
  }

  setEventListener(){

  }
}

export default Popup;
