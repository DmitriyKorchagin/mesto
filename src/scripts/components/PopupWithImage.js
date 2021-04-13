import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {

        super(popupSelector);
        this._imageItem = this._popupElement.querySelector('.popup__image-scale');
        this._imageItemTitle = this._popupElement.querySelector('.popup__image-title');
        };


_photoUpScale(name, link) {

    super.openPopup();
    this._imageItem.src = link;
    this._imageItem.alt = `Изображение ${name}`;
    this._imageItemTitle.textContent = name;
    };

}
