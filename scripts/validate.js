//функц отображения ошибки
const showInputError = (inputElement, errorMessage, formSelector, inputErrorClass, errorClass) => {
    
    const errorElement = inputElement.closest(formSelector).querySelector(inputErrorClass);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
};

//функц скрытия ошибки
const hideInputError = (inputElement, formSelector, inputErrorClass, errorClass) => {

    const errorElement = inputElement
        .closest(formSelector)
        .querySelector(inputErrorClass);

    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
};

// функция валидации формы
const checkInputValidity = (formElement, inputElement, formSelector, inputErrorClass, errorClass) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(inputElement, errorMessage, formSelector, inputErrorClass, errorClass)
    } else {
        hideInputError(inputElement, formSelector, inputErrorClass, errorClass)
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


const setEventListeners = (formElement, inputSelector, submitButtonSelector, formSelector, inputErrorClass, errorClass) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const inputListIterator = (inputElement) => {
        const handleInput = () => {
            checkInputValidity(formElement, inputElement, formSelector, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement);
        }
        inputElement.addEventListener('input', handleInput);
    }
    inputList.forEach(inputListIterator)
    toggleButtonState(inputList, buttonElement);
};

// настройки enableValidation
const enableValidation =({
    formSelector, inputSelector, submitButtonSelector, inputErrorClass, errorClass
}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formList) => {
        setEventListeners(formList, inputSelector, submitButtonSelector, formSelector, inputErrorClass, errorClass)
    });
};

// включение валидации вызовом enableValidation
enableValidation({
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active'
});