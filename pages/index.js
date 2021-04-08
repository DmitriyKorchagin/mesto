import Card from "../scripts/components/card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from '../scripts/components/UserInfo.js';


import {validationSetting, initialCards, popupForm, editButton, closeButton, popupProfile, popupPlace
} from '../scripts/utils/constants.js';


//созданиe экземпляров классов валидации попапов и включение
const popupProfileFormValidator = new FormValidator(
  validationSetting,
  popupProfile
);
const popupCardFormValidator = new FormValidator(validationSetting, popupPlace);
popupProfileFormValidator.enableValidation();
popupCardFormValidator.enableValidation();

const popupImage = new PopupWithImage('.popup_image');


//рендер карточек из массива
function createCard(item, templateSelector) {
  const newCard = new Card(item, templateSelector, popupImage._photoUpScale.bind(popupImage));

  return newCard.createNewCard();
}

const cardsList = new Section({
  data: initialCards,
  renderer: item => {const makeCard = createCard(item, '.element_template');
    cardsList.addItem(makeCard, true);
  }
},'.elements');

cardsList.renderItems();

//создание карточки пользователем
const popupCard = new PopupWithForm ({
  popupSelector: '.popup_place', handleFormSubmit: (inputValues) => {
    const makeCard = createCard({name:inputValues.title, link:inputValues.link}, '.element_template');
    cardsList.addItem(makeCard);
    popupCard.closePopup();
  }
})






// заполение form profile текущими значениями
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popupProfile);
};

//функция открытия popup
function popupOpened(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

//функция закрытия popup
function popupClose(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

//функция редкатирования профиля
// function fillInputValue() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// }

// function handleAddCard () {
//   popupOpened(popupPlace)
//   popupCardFormValidator.setSubmitToInitial();
  
// }

// function handleCardSubmit(evt) {
//   evt.preventDefault();
//   const newCard = new Card(
//     { name: placeTitleInput.value, link: imageLinkInput.value },".element_template", photoUpScale);
//   elements.prepend(newCard.createNewCard());
//   popupClose(popupPlace);
//   imageLinkInput.value = "";
//   placeTitleInput.value = "";
// }


//render cards from arrey func
// initialCards.forEach((item) => {
//   elements.prepend(createUserCard(item));
// });


// Image Up Scale func
function photoUpScale(name, link) {
  popupImageContent.src = link;
  popupImageContent.alt = `Изображение ${name}`;
  popupImageTitle.textContent = name;
  popupOpened(popupImage);
}

//функция закрытия модальных окон
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      popupClose(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      popupClose(popup);
    }
  });
});

popupForm.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", () => popupOpened(popupProfile));
closeButton.addEventListener("click", () => popupClose(popupProfile));
// addButton.addEventListener("click", () => handleAddCard());
// popupImageContent.addEventListener("click", () => popupOpened(popupImage));
// imageCloseButton.addEventListener("click", () => popupClose(popupImage));
// popupPlace.addEventListener("submit", handleCardSubmit);

//слушатель закрытие popup через esc
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    popupClose(openedPopup);
  }
}

fillInputValue(popupProfile);
