fetch("https://nomoreparties.co/v1/plus-cohort-5/cards", {
  headers: {
    authorization: "e3d09a4e-aec8-4522-a7d6-72bcc999d7a1"
  }
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });


fetch("https://nomoreparties.co/v1/plus-cohort-5/users", {
  headers: {
    authorization: "e3d09a4e-aec8-4522-a7d6-72bcc999d7a1"
  }
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
