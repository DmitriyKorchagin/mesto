let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let togglePopup = () => {
    popup.classList.toggle('popup_opened');
    NameInput = ('.profile__name').value
    // console.dir(profileName);
    console.dir(NameInput);
    // console.log(profileName.innerText);
}

editButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        togglePopup()
    }
})

let popupForm = popup.querySelector('.popup__container');

popupForm.addEventListener('submit', event => {
    event.preventDefault();

    let NameInput = popupForm.querySelector('.popup__input-name').value
    let jobInput = popupForm.querySelector('.popup__input-job').value

    profileName.textContent = NameInput;
    profileJob.textContent = jobInput;

})












    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


// 