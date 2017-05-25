import emailValidator from  "email-validator";


export const email = value=> {
    if (!emailValidator.validate(value)) {
        return "invalid email"
    } else {
        return undefined;
    }

};

export const phone = value => {
    return undefined;

};