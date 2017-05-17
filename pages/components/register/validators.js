import validate from "validate.js";
validate.validators.presence.message = "is required";

var constraints = {
    account: {
        presence: true,
    },
    email:{
        email:true
    },
    password: {
        presence: true
    },
    confirmPassword: {
        presence: true
    }
};

export const validateAccount = (value) => {
    var result = validate({account: value}, constraints) || {};
    return result["account"];
};

//user should enter at least email or phone
export const validateContact = (email, phone) => {
    email=(email||"").trim();
    phone=(phone||"").trim();
    if (email==='' && phone==='') {
        return "is required"
    }




};


export const validatePassword = (value) => {
    var result = validate({password: value}, constraints) || {};
    return result["password"];
};

export const validateConfirmPassword = (value) => {
    var result = validate({confirmPassword: value}, constraints) || {};
    return result["confirmPassword"];
};


export const validatePasswordAndConfirmPassword = (password, confirmPassword) => {
    return true;
};
