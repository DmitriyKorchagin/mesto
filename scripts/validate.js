const showInputError = (inputElement, errorMessage) => {
    console.log(inputElement.name, errorMessage);

       const errorElement = inputElement.closest('.popup__container').querySelector('.popup__input-error');

           errorElement.textContent = errorMessage;
           errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (inputElement) => {

    const errorElement = inputElement
        .closest('.popup__container')
        .querySelector('.popup__input-error');

    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');

};

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(inputElement, errorMessage)
    } else {
        hideInputError(inputElement)
    }
    //console.log(isInputNotValid);
};

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);
    console.log(buttonElement);

    if (hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add('popup__submit_inactive');

    }

    else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove('popup__submit_inactive');
}

};


const setEventListeners = (formElement, inputSelector) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector('.popup__submit');

    const inputListIterator = (inputElement) => {
        const handleInput = () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
            console.log(buttonElement);
        }

        inputElement.addEventListener('input', handleInput);
    }

    inputList.forEach(inputListIterator)
    toggleButtonState(inputList, buttonElement);
};




const enableValidation =({
    formSelector, inputSelector
}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formList) => {
        setEventListeners(formList, inputSelector)
    });
};

enableValidation({
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
});