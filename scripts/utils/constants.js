//validation set
const validationSetting = {
    formSelector: ".popup__container",
    fieldSetSelector: "popup__set",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inputErrorClass: ".popup__input-error",
    errorClass: "popup__input-error_active",
    popupTypeError: "popup__input_type-error",
    formLabelSelector: ".popup__field",
};

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

//profile const
const popupProfile = document.querySelector(".popup_profile");
const editButton = document.querySelector(".profile__edit-button");//
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupForm = popupProfile.querySelector(".popup__container");//
const nameInput = popupForm.querySelector(".popup__input_name");
const jobInput = popupForm.querySelector(".popup__input_job");
//place const
const popupPlace = document.querySelector(".popup_place");
const addButton = document.querySelector(".profile__add-button");
const elements = document.querySelector(".elements");
const placeTitleInput = document.querySelector(".popup__input_place");
const imageLinkInput = document.querySelector(".popup__input_link");
//image const
const popupImage = document.getElementById("popup_image");
const imageCloseButton = document.querySelector(".popup__close-button_image-scale"
);
const popupImageTitle = document.querySelector(".popup__image-title");
const popupImageContent = document.querySelector(".popup__image-scale");

export {validationSetting, initialCards, closeButton, editButton, popupForm, popupProfile, popupPlace};