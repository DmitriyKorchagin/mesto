const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
const popupForm = popup.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__input_name');
let jobInput = popupForm.querySelector('.popup__input_job');
const popupPlace = document.querySelector('.popup[name="popup_place"]');
const addButton = document.querySelector('.profile__add-button');
const closeButtonEditForm = document.querySelector('.popup__close-button_edit-form');

/* let togglePopup = () => {
    popup.classList.toggle('popup_opened');

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
} */

function openedPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup()
    }
})

/* popupForm.addEventListener('submit', event => {
    event.preventDefault();

    profileName.textContent = NameInput.value;
    profileJob.textContent = jobInput.value;
}) */

let handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup()
}

popupForm.addEventListener('submit', handleFormSubmit);
/* editButton.addEventListener('click', togglePopup); */
/* closeButton.addEventListener('click', togglePopup); */
editButton.addEventListener('click', openedPopup);
closeButton.addEventListener('click', closePopup);


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements');


initialCards.forEach(function(element){
    const elementCards = elementTemplate.cloneNode(true)
    elementCards.querySelector('.element__image').src = element.link;
    elementCards.querySelector('.element__title').textContent = element.name;
    elements.append(elementCards);
})

function openedPopupEdit() {
    popupPlace.classList.add('popup_opened');
}

function closePopupEdit() {
    popupPlace.classList.remove('popup_opened');
}

addButton.addEventListener('click', openedPopupEdit);
closeButtonEditForm.addEventListener('click', closePopupEdit);

popupPlace.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopupEdit()
    }
});
