class FormValidator {
    static isValidString(str) {
        return /^[A-Za-z]+$/.test(str);
    } 
    static isValidPassword(password) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    }

    static isValidUser(user) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(user);
    }

    static validate(id, value) {
        switch(id) {
            case 'name': 
            case 'lastname':
                return this.isValidString(value);
            case 'password':
                return this.isValidPassword(value);
            case 'user':
                return this.isValidUser(value);
            default:
                return false;
        }
    }
}
export default FormValidator;