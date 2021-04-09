export default class FormValidator {

    constructor (validationSettings, formElement) {
        this._formElement = formElement;
        this._inputSelector = validationSettings.inputSelector;
        this._fieldSetSelector = validationSettings.fieldSetSelector;
        this._formSelector = validationSettings.formSelector;
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._errorClass = validationSettings.errorClass;
        this._popupTypeError = validationSettings.popupTypeError;
        this._formLabelSelector = validationSettings.formLabelSelector;

        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }


      //метод отображения ошибки
    _showInputError () {
    
        const formSectionElement = this._inputElement.closest(this._formLabelSelector);
        this._errorElement = formSectionElement.querySelector(this._inputErrorClass)
        this._errorElement.textContent = this._inputElement.validationMessage;
        this._errorElement.classList.add(this._errorClass);
        this._inputElement.classList.add(this._popupTypeError);

    };

    //метод скрытия ошибки
    _hideInputError () {
    
        const formSectionElement = this._inputElement.closest(this._formLabelSelector);
        this._errorElement = formSectionElement.querySelector(this._inputErrorClass)
        this._errorElement.textContent = '';
        this._errorElement.classList.remove(this._errorClass);
        this._inputElement.classList.remove(this._popupTypeError);
    
    };

    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    // функция валидации формы
    _checkInputValidity (inputElement) {
        this._inputElement = inputElement;
        if (!this._inputElement.validity.valid) {
            this._errorMessage = inputElement.validationMessage;
            this._showInputError();
        } else {
            this._hideInputError()
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
            inputElement.classList.remove(this._inputErrorClass)
            inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement)
            this._toggleButtonState()
        });
    });
    };

    
    setSubmitToInitial() {
        this._formElement.querySelector(this._submitButtonSelector).setAttribute('disabled', true);
    }

    enableValidation () {
        this._formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        this._toggleButtonState();
    })
        this._setEventListeners();
    }
}

