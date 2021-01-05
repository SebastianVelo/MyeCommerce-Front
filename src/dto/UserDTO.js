import UserForm from "../form/UserForm";
import FormValidator from "../util/form/formvalidator/FormValidator";

class UserDTO {

    constructor() {
        UserForm.keys.forEach(key => this[key] = "");
    }

    isValid() {
        return FormValidator.isValidUser(this.username) &&
            FormValidator.isValidPassword(this.password) &&
            this.password === this.password2 &&
            FormValidator.isValidString(this.name) &&
            FormValidator.isValidString(this.lastname);
    }

    isValidLogin() {
        return FormValidator.isValidUser(this.username) && FormValidator.isValidPassword(this.password);
    }
}
export default UserDTO;