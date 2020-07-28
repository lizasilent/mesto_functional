//Modals 

let editProfileModal = document.querySelector(".popup_type_edit-profile");
let addCardsModal = document.querySelector(".popup_type_add-cards");
let popup = editProfileModal.querySelector(".popup__container");

//Data etc
let userName = document.querySelector(".profile__name");
let userInformation = document.querySelector(".profile__description");
let inputName = editProfileModal.querySelector(".popup__text_name");
let inputDescription = editProfileModal.querySelector(".popup__text_description");
let inputPlace = addCardsModal.querySelector(".popup__text_place");
let inputImageSource = addCardsModal.querySelector(".popup__source");
let gridTitle = document.querySelector(".grid__text");
let gridImage = document.querySelector(".grid__image");

//Buttons
let addCardButton = document.querySelector('.profile__add-btn');
let likeCardButton = document.querySelector(".grid__like-btn");
let editProfileButton = document.querySelector(".profile__edit-btn");
let closeEditProfileModalButton = editProfileModal.querySelector(".popup__close-btn");
let closeAddCardsModalModalButton = addCardsModal.querySelector(".popup__close-btn");




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

  function addCardSubmitHandler (event) {
    event.preventDefault();
    console.log(inputPlace.value);
    console.log(inputImageSource.value);
    renderCard({name: inputPlace.value, link:inputImageSource.value});
    closePopup2();
    }
  

editProfileButton.addEventListener("click", openPopup);
closeEditProfileModalButton.addEventListener('click', closePopup);
addCardButton.addEventListener("click", openPopup2);
closeAddCardsModalModalButton.addEventListener('click', closePopup2);
popup.addEventListener("submit", saveInfo);

addCardsModal.addEventListener("submit", addCardSubmitHandler);


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
const list = document.querySelector(".grid__template");

function createCard(data) {
  const gridElement = cardTemplate.cloneNode(true);
  const gridText = gridElement.querySelector(".grid__text");
  const gridImage = gridElement.querySelector(".grid__image");
  
  
  gridText.textContent = data.name;
  gridImage.src = data.link;

  return gridElement;
}

function renderCard(data) {
  list.prepend(createCard(data)); 
}


initialCards.forEach((data) => {
  renderCard(data);
})


const gridLikeButton = gridElement.querySelector(".grid__like-btn");
const gridDeleteButton = gridElement.querySelector(".grid__delete-btn");


  // gridLikeButton.addEventListener("click", handler);
  // gridDeleteButton.addEventListener("click", handler);
  // gridImage.addEventListener("click", handler);

  
// likeCardButton.addEventListener("click", (event) => {
//   event.target.classList.toggle("grid__like_active-btn")
// });
