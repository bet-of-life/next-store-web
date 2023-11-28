export const validateCPF = (cpf: string): boolean => {
    const cpfRegex = /^(\d{3}\.){2}\d{3}-\d{2}$|^\d{11}$/;
    return cpfRegex.test(cpf);
};
  
