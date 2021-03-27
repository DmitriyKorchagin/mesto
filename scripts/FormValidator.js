export default class FormValidator {

    constructor (validationSettings, formElement) {
        this._formElement = formElement;
        this._validationSettings = validationSettings;
        this._buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
    }


    //метод отображения ошибки
    _showInputError = (inputElement, errorMessage) => {
    
        // const formSectionElement = inputElement.closest(formSelector);
        const errorElement = this._formElement.querySelector(`${this._validationSettings.inputErrorClass}_type_${inputElement.name}`);
        console.log(errorElement);
            inputElement.classList.add(this._validationSettings.popupTypeError); 
            errorElement.textContent = errorMessage;
            errorElement.classList.add(this._validationSettings.errorClass); 
    
    };

    //метод скрытия ошибки
    _hideInputError = (inputElement) => {
    
        // const formSectionElement = inputElement.closest(formSelector);
        const errorElement = this._formElement.querySelector(`${this._validationSettings.inputErrorClass}_type_${inputElement.name}`);

            inputElement.classList.remove(this._validationSettings.popupTypeError); 
            errorElement.textContent = '';
            errorElement.classList.remove(this._validationSettings.errorClass); 
    
    };

    // функция валидации формы
    _checkInputValidity = (inputElement) => {
        
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage)
        } else {
            this._hideInputError(inputElement)
        }
    };

    // метод переключение состояния submit 
    _toggleButtonState = () => {
                
        if (this._hasNotValidInput = this._inputList.some(inputElement => !inputElement.validity.valid)) {
            this._buttonElement.setAttribute('disabled', true);

        } else {
            this._buttonElement.removeAttribute("disabled");
    }
    
    };

    //слушатели
    _setEventListeners () {

        this._inputList.forEach((inputElement) => {
            inputElement.classList.remove(this._validationSettings.inputErrorClass)
            inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement)
            this._toggleButtonState()
        });
    });
    };

    enableValidation() {

        const formSetList = Array.from(this._formElement.querySelectorAll(this._validationSettings.fieldSetSelector));
        
        formSetList.forEach(() => this._setEventListeners());
    }

    // enableValidation () {
    //     this._formElement.addEventListener('submit', (event) => {
    //       event.preventDefault();
    //       this._toggleButtonState();
    //     })
    //     this._setEventListeners();
    //   }


}

