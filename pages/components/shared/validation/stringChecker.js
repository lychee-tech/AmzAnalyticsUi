function isBlank(value){
    value= (value || "").trim();
    return value==='';
}

export default {
    isBlank: isBlank
}
