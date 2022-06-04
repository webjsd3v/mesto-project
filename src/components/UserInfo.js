class UserInfo{
  constructor(profileName, profileSubtitle, profileAvatarImage) {
    this._nameInput = document.querySelector(profileName);
    this._aboutInput = document.querySelector(profileSubtitle);
    this._avatarLink = document.querySelector(profileAvatarImage);
  }
  getUserInfo() {
    return {
      name: this._nameInput.textContent,
      about: this._aboutInput.textContent,
      avatarLink: this._avatarLink.src
    }
  }

  setUserInfo(data) {
    if(data.name) this._nameInput.textContent = data.name;
    if(data.about) this._aboutInput.textContent = data.about;
    if(data.avatar) this._avatarLink.src = data.avatar;
  }
}

export default UserInfo
