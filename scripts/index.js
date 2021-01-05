let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupForm = popup.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__input_name');
let jobInput = popupForm.querySelector('.popup__input_job');


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
