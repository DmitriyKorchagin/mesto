let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupForm = popup.querySelector('.popup__container');
let NameInput = popupForm.querySelector('.popup__input_name');
let jobInput = popupForm.querySelector('.popup__input_job');
console.log(profileName.innerHTML);

let togglePopup = () => {
    popup.classList.toggle('popup_opened');

    NameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        togglePopup()
    }
})

/* popupForm.addEventListener('submit', event => {
    event.preventDefault();

    profileName.textContent = NameInput.value;
    profileJob.textContent = jobInput.value;
}) */


let handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = NameInput.value;
    profileJob.textContent = jobInput.value;
}


popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

