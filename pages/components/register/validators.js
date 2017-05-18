import stringChecker from "../shared/validation/stringChecker";
import contactChecker from "../shared/validation/contactChecker";


//account is required
export const validateAccount = (value) => {
    if (stringChecker.isBlank(value)) {
        return "is required";
    } else {
        return undefined;
    }
};

//user should enter at least email or phone
export const validateEmail = (email, phone) => {
    if (stringChecker.isBlank(email) && stringChecker.isBlank(phone)) {
        return "contact is required";
    }

    if (! contactChecker.isValidEmail(email)){
        return "invalid email";
    } else {
        return undefined;
    }
};


export const validatePhone = (email, phone) => {
    if (stringChecker.isBlank(email) && stringChecker.isBlank(phone)) {
        return "contact is required";
    }
};


//password is required
export const validatePassword =(value) => {
    if (stringChecker.isBlank(value)) {
        return "password is required";
    }
};

//confirm password is required, must match password
export const validateConfirmPassword = (password, confirmPassword) => {
    password = password||"";
    confirmPassword = confirmPassword || "";

    if (stringChecker.isBlank(confirmPassword)) {
        return "confirm password is required";
    }


    if (password!=confirmPassword) {
        return "Password and Confirm password don't match"
    } else {
        return undefined;
    }
};
