import stringChecker from "../shared/validation/stringChecker";


//account is required
export const validateAccount=(value) => {
    if (stringChecker.isBlank(value)) {
        return "account is required";
    } else {
        return undefined;
    }
};


//password is required
export const validatePassword=(value) => {
    if (stringChecker.isBlank(value)) {
        return "password is required";
    } else {
        return undefined;
    }
};