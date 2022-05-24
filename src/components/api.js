//import {apiConfigOptions} from "../utils/constants";
/*
function checkApiError(res){
  if (res.ok){
    return res.json()
  }
  return Promise.reject(`Ошибка сервера -- ${res.status}`)
}

export function addApiElement(nameElement, linkElement){
  return fetch(`${apiConfigOptions.baseUrl}/cards`,{
    method: "POST",
    headers: apiConfigOptions.headers,
    body: JSON.stringify({
      name: nameElement,
      link: linkElement
    })
  })
    .then(res => checkApiError(res))
}

export function getElements(){
  return fetch(`${apiConfigOptions.baseUrl}/cards`,{
    method: "GET",
    headers: apiConfigOptions.headers
  })
    .then(res => checkApiError(res))
}

export function delApiElement(idElement){
  return fetch(`${apiConfigOptions.baseUrl}/cards/${idElement}`,{
    method: 'DELETE',
    headers: apiConfigOptions.headers
  })
    .then(res => checkApiError(res))
}

export function addLikeElement(idlike){
  return fetch(`${apiConfigOptions.baseUrl}/cards/likes/${idlike}`,{
    method: "PUT",
    headers: apiConfigOptions.headers
  })
    .then(res => checkApiError(res))
}

export function removeLikeElement(idlike){
  return fetch(`${apiConfigOptions.baseUrl}/cards/likes/${idlike}`,{
    method: "DELETE",
    headers: apiConfigOptions.headers
  })
    .then(res => checkApiError(res))
}

export function getUserProfile(){
  return fetch(`${apiConfigOptions.baseUrl}/users/me`,{
    method: "GET",
    headers: apiConfigOptions.headers
  })
    .then(res => checkApiError(res))
}

export function addUserProfileInfo(profileName, profileSubtitle){
  return fetch(`${apiConfigOptions.baseUrl}/users/me`,{
    method: "PATCH",
    headers: apiConfigOptions.headers,
    body: JSON.stringify({
      name: profileName,
      about: profileSubtitle
    })
  })
    .then(res => checkApiError(res))
}

export function addUserProfileAvatar(userAvatar){
  return fetch(`${apiConfigOptions.baseUrl}/users/me/avatar`,{
    method: "PATCH",
    headers: apiConfigOptions.headers,
    body: JSON.stringify({
      avatar: userAvatar
    })
  })
    .then(res => checkApiError(res))
}
*/

class Api{
  constructor(apiConfigOptions) {
    this._apiConfigOptions = apiConfigOptions
  }

  _checkApiError(res){
    if (res.ok){
      return res.json()
    }
    return Promise.reject(`Ошибка сервера -- ${res.status}`)
  }

  addApiElement(nameElement, linkElement){
    return fetch(`${this._apiConfigOptions.baseUrl}/cards`,{
      method: "POST",
      headers: this._apiConfigOptions.headers,
      body: JSON.stringify({
        name: nameElement,
        link: linkElement
      })
    })
      .then(this._checkApiError)
  }

  getElements(){
    return fetch(`${this._apiConfigOptions.baseUrl}/cards`,{
      method: "GET",
      headers: this._apiConfigOptions.headers
    })
      .then(this._checkApiError)
  }

  delApiElement(idElement){
    return fetch(`${this._apiConfigOptions.baseUrl}/cards/${idElement}`,{
      method: 'DELETE',
      headers: this._apiConfigOptions.headers
    })
      .then(this._checkApiError)
  }

  addLikeElement(idlike){
    return fetch(`${this._apiConfigOptions.baseUrl}/cards/likes/${idlike}`,{
      method: "PUT",
      headers: this._apiConfigOptions.headers
    })
      .then(this._checkApiError)
  }

  removeLikeElement(idlike){
    return fetch(`${this._apiConfigOptions.baseUrl}/cards/likes/${idlike}`,{
      method: "DELETE",
      headers: this._apiConfigOptions.headers
    })
      .then(this._checkApiError)
  }

  getUserProfile(){
    return fetch(`${this._apiConfigOptions.baseUrl}/users/me`,{
      method: "GET",
      headers: this._apiConfigOptions.headers
    })
      .then(this._checkApiError)
  }

  addUserProfileInfo(profileName, profileSubtitle){
    return fetch(`${this._apiConfigOptions.baseUrl}/users/me`,{
      method: "PATCH",
      headers: this._apiConfigOptions.headers,
      body: JSON.stringify({
        name: profileName,
        about: profileSubtitle
      })
    })
      .then(this._checkApiError)
  }

  addUserProfileAvatar(userAvatar){
    return fetch(`${this._apiConfigOptions.baseUrl}/users/me/avatar`,{
      method: "PATCH",
      headers: this._apiConfigOptions.headers,
      body: JSON.stringify({
        avatar: userAvatar
      })
    })
      .then(this._checkApiError)
  }
}

export default Api
