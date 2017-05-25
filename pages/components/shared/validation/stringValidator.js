
export const required = value => {
    value = (value || "").trim();
    return value===''?"required": undefined;
};


