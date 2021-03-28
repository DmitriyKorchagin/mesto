export default class Card {

    constructor (data, templateSelector, photoUpScale) {
        this._name = data.name;
        this._link = data.link;
        this._selector = templateSelector;
        this._photoUpScale = photoUpScale;
        
    }


    _getTemplateCard() {
    const elementCard = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);

    return elementCard;
}

    _getElementsCard() {

        const elementsCard = {
            elementCardPhoto: this._element.querySelector(".element__image"),
            elementCardTitle: this._element.querySelector(".element__title"),
            elementCardTrashButton: this._element.querySelector(".element__trash-icon"),
            elementCardLikeButton: this._element.querySelector(".element__group"),
        }
        
        return elementsCard;
    }




    _setEventListeners() {
        this._elementsCard.elementCardTrashButton.addEventListener('click', () => this._deleteCard());
        this._elementsCard.elementCardLikeButton.addEventListener('click', () => this._likeCard());
        this._elementsCard.elementCardPhoto.addEventListener('click', () => this._photoUpScale(this._name, this._link))

    }


    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _likeCard() {
        this._elementsCard.elementCardLikeButton.classList.toggle('element__group_active')
    
    }

    createNewCard () {
        
        this._element = this._getTemplateCard();
        this._elementsCard = this._getElementsCard();

        this._elementsCard.elementCardPhoto.src = this._link;
        this._elementsCard.elementCardTitle.textContent = this._name;
        this._elementsCard.elementCardTitle.alt = this._name;
        
        
        this._setEventListeners();

        return this._element;
        

    }






}