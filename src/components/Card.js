class Card{
  constructor(templateElement,{ data, handleCardClick, handleLikeClick, handleDeleteClick }) {
    this._templateElement = templateElement;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._idElement = data._id;
    this._idOwner = data.owner._id;
    this._idUser = data.idUser;
    this._handleCardClick = handleCardClick;
    this._handleLikeToggle = handleLikeClick;
    this._handleDeleteCard = handleDeleteClick;
  }

  _getTemplate(){
    return document
      .querySelector(this._templateElement)
      .content
      .querySelector('.element')
      .cloneNode(true)
  }

  _updateLike(){
    this._numberLike.textContent = this._likes.length;
    this._buttonLike.classList.toggle('element__button-like_active', this.like())
  }

  _setEventListeners() {
    this._buttonTrash.addEventListener('click', () => this._handleDeleteCard());
    this._buttonLike.addEventListener('click', () => this._handleLikeToggle());
    this._imageElement.addEventListener('click', () => this._handleCardClick());
  }

  like() {
    return Boolean(this._likes.find(element => element._id === this._idUser));
  }

  setLike(data) {
    this._likes = data.likes;
    this._updateLike();
  }

  idElement() {
    return this._idElement;
  }

  delElement() {
    this._elementItem.remove();
  }

  addElement(){
    this._elementItem = this._getTemplate()
    this._imageElement = this._elementItem.querySelector('.element__image');
    this._titleElement = this._elementItem.querySelector('.element__title');
    this._numberLike = this._elementItem.querySelector('.element__count');
    this._buttonLike = this._elementItem.querySelector('.element__button-like');
    this._buttonTrash = this._elementItem.querySelector(".element__button-trash");

    if(this._idUser !== this._idOwner) this._buttonTrash.remove();
    const imageElement = this._imageElement;
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._titleElement.textContent = this._name;

    this._setEventListeners();
    this._updateLike();
    return this._elementItem;
  }

}

export default Card;
