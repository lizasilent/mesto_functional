let openModalButton = document.querySelector(".profile__edit-btn");
let modal = document.querySelector(".popup");
let closeModalButton = document.querySelector(".popup__close-btn");
let popup = modal.querySelector(".popup__container");
let userName = document.querySelector(".profile__name");
let userInformation = document.querySelector(".profile__description");
let inputName = modal.querySelector(".popup__name");
let inputDescription = modal.querySelector(".popup__description");

openModalButton.addEventListener("click", () => {

    modal.classList.add("popup_is-open");
})

closeModalButton.addEventListener('click', () => {

    modal.classList.remove("popup_is-open");

     inputName.value = userName.textContent
     inputDescription.value = userInformation.textContent

})

popup.addEventListener("submit", (event) => {

    userName.textContent = inputName.value
    userInformation.textContent = inputDescription.value
    event.preventDefault();

    modal.classList.remove("popup__is-open");
})

