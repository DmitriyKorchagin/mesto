//profile
const popupProfile = document.querySelector(".popup_profile");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupForm = popupProfile.querySelector(".popup__container");
const nameInput = popupForm.querySelector(".popup__input_name");
const jobInput = popupForm.querySelector(".popup__input_job");
//place
const popupPlace = document.querySelector(".popup_place");
const addButton = document.querySelector(".profile__add-button");
const closeButtonEditForm = document.querySelector(".popup__close-button_edit-form");
const popupCardForm = document.querySelector(".popup-form-place");
const cardImage = document.querySelector(".element__image");
const cardTitle = document.querySelector(".element__title");
const likeButton = document.querySelector(".element__group");
const elements = document.querySelector(".elements");
const placeTitleInput = document.querySelector(".popup__input_place");
const imageLinkInput = document.querySelector(".popup__input_link");
//image
const popupImage = document.getElementById("popup_image");
const imageCloseButton = document.querySelector(".popup__close-button_image-scale");
const popupImageTitle = document.querySelector(".popup__image-title");
const popupImageContent = document.querySelector(".popup__image-scale");
const elementTemplate = document.querySelector(".element_template").content;

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
  popupToggle(popupProfile);
};

// one toggle for popups//
function popupToggle(element) {
  element.classList.toggle('popup_opened'); 
  }

  function fillInputValue() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }

//create card from popup func
const handleCardSubmit = evt => {
  evt.preventDefault();
  elements.prepend(createNewCard(imageLinkInput.value, placeTitleInput.value));
  popupToggle(popupPlace);
}

//create new card func 
const createNewCard = (image, place) => {
  const elementCard = elementTemplate.cloneNode(true);
  const elementCardPhoto = elementCard.querySelector(".element__image");
  const elementCardTitle = elementCard.querySelector(".element__title");
  elementCardPhoto.src = image;
  elementCardPhoto.alt = place;
  elementCardTitle.textContent = place;
  setListeners(elementCard);

  return elementCard
}

// render cards from arrey func
function renderInitialCards () {
  initialCards.forEach(item => elements.append(createNewCard(item.link, item.name)));
}

//remove card from trash icon func
function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

// Image Up Scale func
function photoUpScale(evt) {
  popupImageContent.src = evt.target.closest(".element__image").src;
  popupImageTitle.textContent = evt.target.closest(".element").querySelector(".element__title").textContent;
  popupToggle(popupImage);
}
//Listeners for element card
function setListeners (elementCard) {
  elementCard.querySelector(".element__trash-icon").addEventListener("click", deleteCard);
  elementCard.querySelector(".element__image").addEventListener("click", photoUpScale);
  elementCard.querySelector(".element__group").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__group_active");
    });
}

popupProfile.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    popupToggle(popupProfile);
  }
});

// popupForm.addEventListener("submit", handleFormSubmit);
editButton.addEventListener('click', () => popupToggle(popupProfile));
closeButton.addEventListener("click", () => popupToggle(popupProfile));
closeButtonEditForm.addEventListener("click", () => popupToggle(popupPlace));
addButton.addEventListener("click", () => popupToggle(popupPlace));
popupImageContent.addEventListener("click", () => popupToggle(popupImage));
imageCloseButton.addEventListener("click", () => popupToggle(popupImage));
popupPlace.addEventListener("submit", handleCardSubmit);

popupPlace.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    popupToggle(popupPlace);
  }
});

popupImage.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    popupToggle(popupImage);
  }
});

renderInitialCards();
fillInputValue(popupProfile);





//valid
// const popupForm = popupProfile.querySelector(".popup__container");
const profileSubmitButton = document.querySelector('.popup__submit');
const popupInput = document.getElementById('text-name-input');
const formList = Array.from(document.querySelectorAll('.popup__container'));
const inputList = Array.from(document.querySelectorAll('.popup__input'));

inputList.forEach(inputElement => {
  inputElement.addEventListener("input", (event) => {

  checkInputValidity(inputElement);
  console.log(inputElement.validity.valid);
  

      });
});


const showInputError = (inputElement, errorMessage) => {
  
  const errorElement = inputElement.closest('.popup__container').querySelector('.popup__input-error');

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};



const hideInputError = (inputElement) => {
  console.log(inputElement);
  
const errorElement = inputElement.closest('.popup__container').querySelector('.popup__input-error');
console.log(errorElement);
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
};




const checkInputValidity = (inputElement) => {
  
  const isInputNotValid = !inputElement.validity.valid;
  
  

  if (isInputNotValid) {

    const errorMessage = inputElement.validationMessage;

    showInputError(inputElement, errorMessage);
  }

  else {

    hideInputError(inputElement);
  };



  console.log(isInputNotValid);
};




const setEventListenners = (formElement) => {


};





const enableValidation = () => {

  
  
};


enableValidation();
