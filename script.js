let openModalButton = document.querySelector(".profile__edit-btn");
let modal = document.querySelector(".popup");
let closeModalButton = document.querySelector(".popup__close-btn");
let popup = modal.querySelector(".popup__container");
let userName = document.querySelector(".profile__name");
let userInformation = document.querySelector(".profile__description");
let inputName = modal.querySelector(".popup__text_name");
let inputDescription = modal.querySelector(".popup__text_description");

function openPopup () {
  modal.classList.add("popup_is-open");
  inputName.value = userName.textContent;
  inputDescription.value = userInformation.textContent;
}

function closePopup () {
  modal.classList.remove("popup_is-open");
  }

function saveInfo (event) {
  event.preventDefault();
  userName.textContent = inputName.value;
  userInformation.textContent = inputDescription.value;
  closePopup ();
  }

openModalButton.addEventListener("click", openPopup);
closeModalButton.addEventListener('click', closePopup);
popup.addEventListener("submit", saveInfo);


const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector(".template-card").content.querySelector(".grid__item");

initialCards.forEach((data) => {
  
  const gridElement = cardTemplate.cloneNode(true);
  const gridText = gridElement.querySelector(".grid__text");
  const gridImage = gridElement.querySelector(".grid__image");
  const gridLikeButton = gridElement.querySelector(".grid__like-btn");
  const gridDeleteButton = gridElement.querySelector(".grid__delete-btn");

  gridText.textContent = data.name;
  gridImage.src = data.link;

  const list = document.querySelector(".grid__template");
  list.prepend(gridElement);



})

