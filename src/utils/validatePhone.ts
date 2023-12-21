export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;
    return phoneRegex.test(phoneNumber);
};
