import validate from "validate.js";
validate.validators.presence.message = "is required";



export const validateAccount = (value) => {
    var result = validate({account: value}, {account:{presence:true}}, {format: "flat"}) || {};
    return result["account"];
};

//user should enter at least email or phone
export const validateContact = (email, phone) => {
    email=(email||"").trim();
    phone=(phone||"").trim();


    if (email==='' && phone==='') {
        return "is required"
    }

    return validate({email: email}, {email: {email:true}}, {format: "flat"}) || {};

};

export const validatePassword =(value) => {
    var result = validate({password:value}, {password:{presence:true}}, {format: "flat"}) || {};
    return result["password"];
};


export const validateConfirmPassword = (password, confirmPassword) => {
    password = password||"";
    confirmPassword = confirmPassword || "";

    if ( confirmPassword === '') {
        return "is required";
    }


    if (password!=confirmPassword) {
        return "Password and Confirm password don't match"
    }

    return "";
};
