const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupForm = popup.querySelector(".popup__container");
const nameInput = popupForm.querySelector(".popup__input_name");
const jobInput = popupForm.querySelector(".popup__input_job");
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
const popupImage = document.querySelector(".popup-image-scale");
const imageCloseButton = document.querySelector(".popup-image-scale__close-button");
const popupImageTitle = document.querySelector(".popup-image-scale__title");
const popupImageContent = document.querySelector(".popup-image-scale__content");
const popupImageScale = document.querySelector(".popup-image-scale__container");
const elementTemplate = document.querySelector(".element_template").content;


function openedPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

popup.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

let handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
};

popupForm.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", openedPopup);
closeButton.addEventListener("click", closePopup);

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




// create card from arrey
function renderCards(element) {
  const elementTemplate = document.querySelector(".element_template").content;
  const elementCards = elementTemplate.cloneNode(true);
  elementCards.querySelector(".element__title").textContent = element.name;
  elementCards.querySelector(".element__image").setAttribute('alt', element.name);
  elementCards.querySelector(".element__image").src = element.link;
  

  setListeners(elementCards);
  likeButtonToggle(elementCards);
  elements.prepend(elementCards);
};


// render card from arrey func
function render() {
  initialCards.forEach(renderCards);
}


function setListeners (elementCards) {
  elementCards.querySelector(".element__trash-icon").addEventListener("click", deleteCard);
  elementCards.querySelector(".element__image").addEventListener("click", photoUpScale);
}

//create card from popup
const handleCardSubmit = (evt) => {
  evt.preventDefault();
  const elementTemplate = document.querySelector(".element_template").content;
  const elementCards = elementTemplate.cloneNode(true);
  elementCards.querySelector(".element__image").src = imageLinkInput.value;
  elementCards.querySelector(".element__title").textContent = placeTitleInput.value;
  elementCards.querySelector(".element__image").setAttribute('alt', placeTitleInput.value);
  setListeners(elementCards);
  likeButtonToggle(elementCards);
  elements.prepend(elementCards);

  imageLinkInput.value = "";
  placeTitleInput.value = "";
  popupEditToggle();
};




  


// like button func
function likeButtonToggle(elementCards) {
  elementCards.querySelector(".element__group").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__group_active");
    });
}

// popupImage toggle func
function popupImageToggle() {
  popupImage.classList.toggle("popup-image-scale_opened");
}

function photoUpScale(evt) {
  popupImageContent.src = evt.target.closest(".element__image").src;
  popupImageTitle.textContent = evt.target.closest(".element").querySelector(".element__title").textContent;
  popupImageToggle();
}

//remove card from trash icon func
function deleteCard(evt) {
  evt.target.closest(".element").remove();
}




//toogle popup edit func
function popupEditToggle() {
  popupPlace.classList.toggle("popup_opened");
}

popupPlace.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    popupEditToggle();
  }
});

render();

popupImage.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    popupImageToggle();
  }
});

closeButtonEditForm.addEventListener("click", popupEditToggle);
popupPlace.addEventListener("submit", handleCardSubmit);
addButton.addEventListener("click", popupEditToggle);
imageCloseButton.addEventListener("click", popupImageToggle);
