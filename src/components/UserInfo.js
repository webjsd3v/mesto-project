export default class UserInfo{
  constructor({profileName, profileDescription, profileAvater}) {
    this._name = document.querySelector(profileName);
    this._description = document.querySelector(profileDescription);
    this._avatar = document.querySelector(profileAvater);
  }

  getUserInfo(){
    this._userInfo = {};
    this._userInfo.name = this._name.textContent;
    this._userInfo.description = this._description.textContent;
    this._userInfo.avatar = this._avatar.src;
    this._userInfo.id = this._elementId;
    return this._userInfo;
  }

  setUserInfo(elements){
    this._name.textContent = elements.name;
    this._description.textContent = elements.text;
    this._avatar.src = elements.avatar;
    this._avatar.src = `Фотография ${elements.avatar}`;
    this._elementId = elements._id;
  }
}
