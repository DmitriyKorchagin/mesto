import Card from './card.js';
import FormValidator from './FormValidator.js';

//profile const
const popupProfile = document.querySelector(".popup_profile");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupForm = popupProfile.querySelector(".popup__container");
const nameInput = popupForm.querySelector(".popup__input_name");
const jobInput = popupForm.querySelector(".popup__input_job");
//place const
const popupPlace = document.querySelector(".popup_place");
const addButton = document.querySelector(".profile__add-button");
const cardImage = document.querySelector(".element__image");
const cardTitle = document.querySelector(".element__title");
const likeButton = document.querySelector(".element__group");
const elements = document.querySelector(".elements");
const placeTitleInput = document.querySelector(".popup__input_place");
const imageLinkInput = document.querySelector(".popup__input_link");
//image const
const popupImage = document.getElementById("popup_image");
const imageCloseButton = document.querySelector(".popup__close-button_image-scale");
const popupImageTitle = document.querySelector(".popup__image-title");
const popupImageContent = document.querySelector(".popup__image-scale");
const elementTemplate = document.querySelector(".element_template").content;
//validation set
const validationSetting = {
  formSelector: ".popup__container",
  fieldSetSelector: "popup__set",
  inputSelector: ".popup__input",
  submitButtonSelector: '.popup__submit',
  inputErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active',
  popupTypeError: 'popup__input_type-error',
  formLabelSelector: '.popup__field'
};

//созданиe экземпляров классов валидации попапов и включение
const popupProfileFormValidator = new FormValidator(validationSetting, popupProfile);
const popupCardFormValidator = new FormValidator(validationSetting, popupPlace);
popupProfileFormValidator.enableValidation();
popupCardFormValidator.enableValidation();

//card arrey
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


// заполение form profile текущими значениями
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popupProfile);
  
};

//функция открытия popup
function popupOpened(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape); 

  }

//функция закрытия popup
function popupClose(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

//функция редкатирования профиля
function fillInputValue() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }

//create card from popup func
// const handleCardSubmit = evt => {
//   evt.preventDefault();
//   elements.prepend(createNewCard(imageLinkInput.value, placeTitleInput.value));
//   (newCard.generateCard())
//   popupClose(popupPlace);
//   imageLinkInput.value = "";
//   placeTitleInput.value = "";
// }

function handleCardSubmit(evt) {

  evt.preventDefault();
  const newCard = new Card({name:placeTitleInput.value, link:imageLinkInput.value},'.element_template', photoUpScale);
  elements.prepend(newCard.createNewCard());
  popupClose(popupPlace);
  imageLinkInput.value = "";
  placeTitleInput.value = "";
  
}


//create new card func 

// const createNewCard = (image, place) => {
//   const elementCard = elementTemplate.cloneNode(true);
//   const elementCardPhoto = elementCard.querySelector(".element__image");
//   const elementCardTitle = elementCard.querySelector(".element__title");
//   elementCardPhoto.src = image;
//   elementCardPhoto.alt = place;
//   elementCardTitle.textContent = place;
//   setListeners(elementCard);
  
//   return elementCard
// }



//render cards from arrey func
initialCards.forEach((item) => {
  const card = new Card(item, '.element_template', photoUpScale);
  const cardElement = card.createNewCard();
  elements.prepend(cardElement);

});


//remove card from trash icon func
function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

// Image Up Scale func
function photoUpScale(evt) {
  popupImageContent.src = evt.target.closest(".element__image").src;
  popupImageTitle.textContent = evt.target.closest(".element").querySelector(".element__title").textContent;
  popupOpened(popupImage);
}

//Listeners for element card
function setListeners (elementCard) {
  elementCard.querySelector(".element__trash-icon").addEventListener("click", deleteCard);
  elementCard.querySelector(".element__image").addEventListener("click", photoUpScale);
  elementCard.querySelector(".element__group").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__group_active");
    });
}

//функция закрытия модальных окон
const popups = document.querySelectorAll('.popup')

      popups.forEach((popup) => {
          popup.addEventListener('click', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                popupClose(popup)
              }
              if (evt.target.classList.contains('popup__close-button')) {
                popupClose(popup)
              }
          })
      });


popupForm.addEventListener("submit", handleFormSubmit);
editButton.addEventListener('click', () => popupOpened(popupProfile));
closeButton.addEventListener("click", () => popupClose(popupProfile));
addButton.addEventListener("click", () => popupOpened(popupPlace));
popupImageContent.addEventListener("click", () => popupOpened(popupImage));
imageCloseButton.addEventListener("click", () => popupClose(popupImage));
popupPlace.addEventListener("submit", handleCardSubmit);


//слушатель закрытие popup через esc 
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    popupClose(openedPopup);
  }
}


// renderInitialCards();
fillInputValue(popupProfile);




