import validate from "validate.js";

var constraints ={
    account: {
        presence: true
    },
    password: {
        presence:true
    }
};

export const validateAccount=(value) => {
    var result= validate({account:value}, constraints) || {};
    var error =  result["account"];
    console.log(error);
    return error;
};


export const validatePassword=(value) => {
    var result= validate({password:value}, constraints) || {};
    var error =  result["password"];
    console.log(error)
};