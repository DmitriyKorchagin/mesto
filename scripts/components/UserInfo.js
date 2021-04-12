export default class UserInfo {
    constructor ({profileNameSelector, profileInfoSelector}) {

        this._profileName = document.querySelector(profileNameSelector);
        this._profileInfo = document.querySelector(profileInfoSelector);

    }

    getUserInfo(){

        return{
            profileName: this._profileName.textContent,
            profileInfo: this._profileInfo.textContent
        }
    };


    setUserInfo({name, info}) {

    this._profileName.textContent = name;
    this._profileInfo.textContent = info;
    };

}