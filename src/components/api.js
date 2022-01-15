import {apiConfigOptions} from "../utils/constants";

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
