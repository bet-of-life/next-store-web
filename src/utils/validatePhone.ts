export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
};
  