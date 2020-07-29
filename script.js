//Modals 

let editProfileModal = document.querySelector(".popup_type_edit-profile");
let addCardsModal = document.querySelector(".popup_type_add-cards");
let gridImageModal = document.querySelector(".popup_type_grid-img")
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
let list = document.querySelector(".grid__template");


//Buttons
let addCardButton = document.querySelector('.profile__add-btn');
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


//Лайк в карточке 

let gridLikeButton = document.querySelector(".grid__like-btn");

function handleLikeClick() {
  gridLikeButton.classList.toggle("grid__like_active-btn");
  console.log(123); 
}
gridLikeButton.addEventListener("click", handleLikeClick);


// Удалить карточку

let gridDeleteButton = document.querySelector(".grid__delete-btn");

function handleDeleteClick() {
  event.target.closest(".grid__item").remove();
}
  gridDeleteButton.addEventListener("click", handleDeleteClick);
  

// Картинка 



function handleImageClick() {
  
  gridImage.src = data.link;

}

// gridImage.addEventListener("click", handleImageClick);
  


 

 