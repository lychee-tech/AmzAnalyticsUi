import stringChecker from "./stringChecker";
import emailValidator from  "email-validator";


function isValidEmail(value) {
    if (stringChecker.isBlank(value)) {
        return true;
    } else {
        return emailValidator.validate(value);
    }
}


export default {
    isValidEmail: isValidEmail
}