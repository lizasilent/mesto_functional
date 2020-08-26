//Modals
const editProfileModal = document.querySelector(".popup_type_edit-profile");
const addCardsModal = document.querySelector(".popup_type_add-cards");
const imageModal = document.querySelector(".popup_type_grid-img");
const popup = document.querySelector(".popup__form");

//Data etc
const userName = document.querySelector(".profile__name");
const userInformation = document.querySelector(".profile__description");
const inputName = editProfileModal.querySelector(".popup__text_name");
const inputDescription = editProfileModal.querySelector(
  ".popup__text_description"
);
const inputPlace = addCardsModal.querySelector(".popup__text_place");
const inputImageSource = addCardsModal.querySelector(".popup__source");
const list = document.querySelector(".grid__template");
const imageModalSrc = imageModal.querySelector(".popup__image");
const imageModalTitle = imageModal.querySelector(".popup__title");
const addCardsForm = addCardsModal.querySelector(".popup__form_add-cards");


//Buttons
const editProfileButton = document.querySelector(".profile__edit-btn");
const closeEditProfileModalButton = editProfileModal.querySelector(
  ".popup__close-btn"
);
const addCardButton = document.querySelector(".profile__add-btn");
const closeAddCardsModalModalButton = addCardsModal.querySelector(
  ".popup__close-btn"
);
const closeImageModalButton = imageModal.querySelector(".popup__close-btn");

//Открываем и закрываем модалки
function openModalWindow(modalWindow) {
  modalWindow.classList.add("popup_is-open");
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove("popup_is-open");
}

function closeModalByEsc(evt){
  const popupIsOpen = document.querySelector(".popup_is-open");
    if (evt.key === 'Escape') {
      closeModalWindow(popupIsOpen);
    }
  }

function closeModalByOverlay(evt) {
  if (!evt.target.closest('.popup__form')){
    closeModalWindow(evt.target.closest('.popup'));
  } 
}

editProfileModal.addEventListener("click", closeModalByOverlay);
addCardsModal.addEventListener("click", closeModalByOverlay);
imageModal.addEventListener("click", closeModalByOverlay);


//Сохраняем введенную информацию

inputName.value = userName.textContent;
inputDescription.value = userInformation.textContent;


function saveInfo(event) {
  event.preventDefault();
  userName.textContent = inputName.value;
  userInformation.textContent = inputDescription.value;
  closeModalWindow(editProfileModal);
}

function addCardSubmitHandler(event) {
  event.preventDefault();
  renderCard({ name: inputPlace.value, link: inputImageSource.value });
  closeModalWindow(addCardsModal);
  addCardsForm.reset();

}

// Тыкаем на кнопки для модалки edit
editProfileButton.addEventListener("click", () => {
  openModalWindow(editProfileModal);
});
closeEditProfileModalButton.addEventListener("click", () => {
  closeModalWindow(editProfileModal);
});

// Тыкаем на кнопки для модалки addcard
addCardButton.addEventListener("click", () => {
  openModalWindow(addCardsModal);
});
closeAddCardsModalModalButton.addEventListener("click", () => {
  closeModalWindow(addCardsModal);
});


popup.addEventListener("submit", saveInfo);
addCardsModal.addEventListener("submit", addCardSubmitHandler);

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardTemplate = document
  .querySelector(".template-card")
  .content.querySelector(".grid__item");

function handleLikeClick(gridLikeButton) {
  gridLikeButton.classList.toggle("grid__like_active-btn");
}

function handleDeleteClick() {
  event.target.closest(".grid__item").remove();
}

function handleImageOpen(src, textcontent) {
  imageModal.classList.toggle("popup_is-open");
  imageModalSrc.src = src;
  imageModalTitle.textContent = textcontent;
}

function createCard(data) {
  const gridElement = cardTemplate.cloneNode(true);
  const gridText = gridElement.querySelector(".grid__text");
  const gridImage = gridElement.querySelector(".grid__image");
  const gridLikeButton = gridElement.querySelector(".grid__like-btn");
  const gridDeleteButton = gridElement.querySelector(".grid__delete-btn");

  gridText.textContent = data.name;
  gridImage.src = data.link;

  gridLikeButton.addEventListener("click", () => {
    handleLikeClick(gridLikeButton);
  });
  gridDeleteButton.addEventListener("click", () => {
    handleDeleteClick(gridDeleteButton);
  });

  gridImage.addEventListener("click", () => {
    handleImageOpen(data.link, data.name);
  });
  closeImageModalButton.addEventListener("click", handleImageOpen);

  return gridElement;
}

function renderCard(data) {
  list.prepend(createCard(data));
}

initialCards.forEach((data) => {
  renderCard(data);
});


