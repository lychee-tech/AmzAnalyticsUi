import validate from "validate.js";
validate.validators.presence.message = "is required";



export const validateAccount = (value) => {
    var result = validate({account: value}, {account:{presence:true}}, {format: "flat"}) || {};
    return result["account"];
};

//user should enter at least email or phone
export const validateEmail = (email, phone) => {
    email=(email||"").trim();
    phone=(phone||"").trim();


    if (email==='' && phone==='') {
        return "email is required"
    }

    return validate({email: email}, {email: {email: {message:"^invalid email"}}}, {format: "flat"}) || {};
};


export const validatePhone = (email, phone) => {
    email=(email||"").trim();
    phone=(phone||"").trim();


    if (email==='' && phone==='') {
        return "phone is required"
    }
};


export const validatePassword =(value) => {
    let password = (value||"").trim();
    return password===''? "is required": undefined;
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

    return undefined;
};
