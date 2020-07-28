//Modals 

let editProfileModal = document.querySelector(".popup");
let addCardsModal = document.querySelector(".popup_type_add-cards");
let popup = editProfileModal.querySelector(".popup__container");

//Data etc
let userName = document.querySelector(".profile__name");
let userInformation = document.querySelector(".profile__description");
let inputName = editProfileModal.querySelector(".popup__text_name");
let inputDescription = editProfileModal.querySelector(".popup__text_description");

//Buttons
let addCardButton = document.querySelector('.profile__add-btn');
let likeCardButton = document.querySelector(".grid__like-btn");
let editProfileButton = document.querySelector(".profile__edit-btn");
let closeModalButton = document.querySelector(".popup__close-btn");



function openPopup () {
  editProfileModal.classList.toggle("popup_is-open");
  inputName.value = userName.textContent;
  inputDescription.value = userInformation.textContent;
}

function closePopup () {
  editProfileModal.classList.remove("popup_is-open");
  }


function openPopup2 () {
  addCardsModal.classList.toggle("popup_is-open");
 
}

function closePopup2 () {
  addCardsModal.classList.remove("popup_is-open");
  
    } 


function saveInfo (event) {
  event.preventDefault();
  userName.textContent = inputName.value;
  userInformation.textContent = inputDescription.value;
  closePopup();
  }

editProfileButton.addEventListener("click", openPopup);
closeModalButton.addEventListener('click', closePopup);
popup.addEventListener("submit", saveInfo);
addCardButton.addEventListener("click", openPopup2);
addCardsModal.addEventListener('click', closePopup2);


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

  // gridLikeButton.addEventListener("click", handler);
  // gridDeleteButton.addEventListener("click", handler);
  // gridImage.addEventListener("click", handler);

  gridText.textContent = data.name;
  gridImage.src = data.link;

  const list = document.querySelector(".grid__template");
  list.prepend(gridElement);
})

// likeCardButton.addEventListener("click", (event) => {
//   event.target.classList.toggle("grid__like_active-btn")
// });



