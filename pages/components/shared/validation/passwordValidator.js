export const confirmedPasswordMatchPassword=(password, confirmedPassword) => {
    password = password||"";
    confirmPassword = confirmPassword || "";

    if (password!=confirmPassword) {
        return "Password and Confirm password don't match"
    } else {
        return undefined;
    }


};