export default class UserInfo {
    constructor ({profileNameSelector, profileInfoSelector}) {

        this.profileName = document.querySelector(profileNameSelector);
        this.profileInfo = document.querySelector(profileInfoSelector);

    }

    getUserInfo(){

        return{
            profileName: this.profileName.textContent,
            profileInfo: this.profileInfo.textContent
        }
    };


    setUserInfo({name, info}) {

    this._profileName.textContent = name;
    this._profileInfo.textContent = info;
    };

}