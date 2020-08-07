const object = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: ".popup__submit-btn_disabled",
  inputErrorClass: ".form-error",
  errorClass: "popup__error_visible",
};

const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const inputs = formElement.querySelectorAll(inputSelector);
    const buttonSubmit = formElement.querySelectorAll(submitButtonSelector);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        console.log(inputElement.validity)
      });
    });
  });
};

enableValidation(object);