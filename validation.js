const object = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputValidClass: ".popup__input_valid",
  inputErrorClass: ".popup__input_invalid",
  submitButtonSelector: "popup__submit-btn",
  inactiveButtonClass: ".popup__submit-btn_disabled",
  errorClass: ".popup__error_visible";
};

const enableValidation = ({
  formSelector,
  inputSelector,
  inputValidClass,
  inputErrorClass,
  submitButtonSelector,
  inactiveButtonClass,
  errorClass;
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
        if (inputElement.validity.valid) {
          inputElement.classlist.remove(inputErrorClass);
          inputElement.classlist.add(inputValidClass);
          errorElement.textContent = "";
          errorElement.classlist.remove(inputErrorClass);
        }
        else {
          inputElement.classlist.remove(inputValidClass);
          inputElement.classlist.add(inputErrorClass);
          errorElement.textContent = inputElement.validationMessage;
          errorElement.classlist.add(inputErrorClass);
        }
        }
      });
    });
  });
};

enableValidation(object);