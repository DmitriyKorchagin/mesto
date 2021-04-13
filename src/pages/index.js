import './index.css'; 
import {validationSetting, initialCards, editButton, popupProfile, popupPlace, nameInput, jobInput, addButton
} from '../scripts/utils/constants.js';


import Card from "../scripts/components/card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from '../scripts/components/UserInfo.js';


//созданиe экземпляров классов валидации попапов и включение
const popupProfileFormValidator = new FormValidator(validationSetting, popupProfile);
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

//class UserInfo 
//редактирование карточки профиля
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileInfoSelector: '.profile__job'
});

const popupProfileForm = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (inputValues) => {
    userInfo.setUserInfo({name: inputValues.name, info: inputValues.info});
    popupProfileForm.closePopup();
  }
});

//создание карточки пользователем
const popupCard = new PopupWithForm ({
  popupSelector: '.popup_place', handleFormSubmit: (inputValues) => {
    const makeCard = createCard({name:inputValues.title, link:inputValues.link}, '.element_template');
    cardsList.addItem(makeCard);
    popupCard.closePopup();
  }
})


//заполение form profile текущими значениями
function fillInputValue () {
  nameInput.value = userInfo.getUserInfo().profileName;
  jobInput.value = userInfo.getUserInfo().profileInfo;
}

function handleAddCard () {
  popupCard.openPopup();
  popupCardFormValidator.setSubmitToInitial();
  
}

function handleEditUserInfo () {
  popupProfileForm.openPopup();
  popupProfileFormValidator.setSubmitToInitial();
  fillInputValue();
}

popupProfileForm.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

editButton.addEventListener("click", handleEditUserInfo);
addButton.addEventListener("click", handleAddCard);