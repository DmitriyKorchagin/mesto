//функц отображения ошибки
const showInputError = (inputElement, errorMessage, formSelector, inputErrorClass, errorClass, popupTypeError) => {
    
    const formSectionElement = inputElement.closest(formSelector);
    const errorElement = formSectionElement.querySelector(inputErrorClass);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
        inputElement.classList.add(popupTypeError);

};

//функц скрытия ошибки
const hideInputError = (inputElement, formSelector, inputErrorClass, errorClass, popupTypeError) => {

    const formSectionElement = inputElement.closest(formSelector);
    const errorElement = formSectionElement.querySelector(inputErrorClass);

    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
    inputElement.classList.remove(popupTypeError);
};

// функция валидации формы
const checkInputValidity = (formElement, inputElement, formSelector, inputErrorClass, errorClass, popupTypeError) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(inputElement, errorMessage, formSelector, inputErrorClass, errorClass, popupTypeError)
    } else {
        hideInputError(inputElement, formSelector, inputErrorClass, errorClass, popupTypeError)
    }
};

// переключение состояни submit  
const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);
    
    if (hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
    } else {
    buttonElement.removeAttribute("disabled");
}

};


const setEventListeners = (formElement, inputSelector, submitButtonSelector, formSelector, inputErrorClass, errorClass, popupTypeError) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const inputListIterator = (inputElement) => {
        const handleInput = () => {
            checkInputValidity(formElement, inputElement, formSelector, inputErrorClass, errorClass, popupTypeError);
            toggleButtonState(inputList, buttonElement);
        }
        inputElement.addEventListener('input', handleInput);
    }
    inputList.forEach(inputListIterator)
    toggleButtonState(inputList, buttonElement);
};

// настройки enableValidation
const enableValidation =({
    formSelector, inputSelector, submitButtonSelector, inputErrorClass, errorClass, popupTypeError
}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formList) => {
        setEventListeners(formList, inputSelector, submitButtonSelector, formSelector, inputErrorClass, errorClass, popupTypeError)
    });
};

// включение валидации вызовом enableValidation
enableValidation({
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active',
    popupTypeError: "popup__input_type-error"
});

