export default class Card {

    constructor (data, templateSelector, openPopupImg) {
        this._name = data.name;
        this._link = data.link;
        this._selector = templateSelector;
        this._openPopupImg = openPopupImg;
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




    setEventListeners() {
        this._elementsCard.elementCardTrashButton.addEventListener('click', () => this._deleteCard());
        this._elementsCard.elementCardLikeButton.addEventListener('click', () => this._likeCard());

    }


    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    likeCard() {
        this._elementsCard.elementCardLikeButton.classlist.toggle('element__group_active')
    
    }

    createNewCard () {
        this._element = this._getTemplateCard();
        this._elementsCard = this._getElementsCard();

        this._elementsCard.elementCardPhoto.src = this._link;
        this._elementsCard.elementCardTitle.textContent = this._name;
        this._elementsCard.elementCardTitle.alt = this._name;
        
    
        this.setEventListeners();

        return this._element;

    }






}