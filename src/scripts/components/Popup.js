export default class Popup {

    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._closePopup = {
            esc: this._closePopupWithEscape.bind(this),
            click: this._closePopupWithClick.bind(this)
            
            
        }
    }


//метод открытия
    openPopup(){
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopup.esc);

    }

//метод закрытия
    closePopup(){
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopup.esc);
    }

//метод закрытия по esc
    _closePopupWithEscape(evt) {
        if (evt.key === 'Escape') {
        this.closePopup();
        }
    }


    _closePopupWithClick(evt) {
        if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
            this.closePopup();
        }
    }

//слушатели
    setEventListeners(){
        this._popupElement.addEventListener('click', this._closePopup.click);

    }
}

