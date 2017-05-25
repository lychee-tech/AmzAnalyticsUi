export const confirmPasswordMatchPassword=(password, confirmPassword) => {
    password = password||"";
    confirmPassword = confirmPassword || "";

    if (password!=confirmPassword) {
        return "Password and Confirm password don't match"
    } else {
        return undefined;
    }


};