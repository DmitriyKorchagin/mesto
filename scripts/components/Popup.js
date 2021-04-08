export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
    }


//метод открытия
    openPopup(){
        this._popupElement.classList.add('popup_opened');

    }

//метод закрытия
    closePopup(){
        this._popupElement.classList.remove('popup_opened');
    }

//метод закрытия по esc
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
        this.closePopup();
        }
    }
//слушатели
    setEventListeners(){
        this._popupElement.addEventListener('click', this._closePopup);

    }
}

