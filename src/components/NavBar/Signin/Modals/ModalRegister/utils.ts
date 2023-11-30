import { toast } from "react-toastify";
import { fetchPostUsers } from "../../../../../config/services/consumers/users";
import { validateCPF } from "../../../../../utils/validateCpf";
import { validarEmail } from "../../../../../utils/validateEmail";
import { validatePassowrd } from "../../../../../utils/validatePassword";
import { validatePhoneNumber } from "../../../../../utils/validatePhone";
import { UtilsRegisterProps } from "./interfaces";

export const handleSubmit = async ({
  userLogin,
  setErroRegisterUser,
  errorRegisterUser,
  toggleModalRegister,
  setIsLoading }: UtilsRegisterProps) => {

  setIsLoading(true)
  if (
    !userLogin.email &&
    !userLogin.password &&
    !userLogin.confirmPassword &&
    !userLogin.cpf &&
    !userLogin.name &&
    !userLogin.phone
  ) {
    setErroRegisterUser({
      errorEmail: true,
      errorPassword: true,
      errorName: true,
      errorConfirmPassword: true,
      errorPhone: true,
      errorCpf: true,
      errorMessage: "Por favor, preencha os campos!",
    });
    setIsLoading(false)
  } else if (!userLogin.email) {
    setErroRegisterUser({
      errorEmail: true,
      errorPassword: false,
      errorName: false,
      errorConfirmPassword: false,
      errorPhone: false,
      errorCpf: false,
      errorMessage: "Por favor, insira um e-mail!",
    });
    setIsLoading(false)
  } else if (!userLogin.password) {
    setErroRegisterUser({
      errorEmail: false,
      errorPassword: true,
      errorName: false,
      errorConfirmPassword: false,
      errorPhone: false,
      errorCpf: false,
      errorMessage: "Por favor, insira uma senha!",
    });
    setIsLoading(false)
  } else if (!userLogin.confirmPassword) {
    setErroRegisterUser({
      errorEmail: false,
      errorPassword: false,
      errorName: false,
      errorConfirmPassword: true,
      errorPhone: false,
      errorCpf: false,
      errorMessage: "Por favor, insira uma senha!",
    });
    setIsLoading(false)
  } else if (!userLogin.cpf) {
    console.log(userLogin.cpf)
    setErroRegisterUser({
      errorEmail: false,
      errorPassword: false,
      errorName: false,
      errorConfirmPassword: false,
      errorPhone: false,
      errorCpf: true,
      errorMessage: "Por favor, insira uma senha!",
    });
    setIsLoading(false)
  } else if (!userLogin.phone) {
    setErroRegisterUser({
      errorEmail: false,
      errorPassword: false,
      errorName: false,
      errorConfirmPassword: false,
      errorPhone: true,
      errorCpf: false,
      errorMessage: "Por favor, insira uma senha!",
    });
    setIsLoading(false)
  } else if (!userLogin.name) {
    setErroRegisterUser({
      errorEmail: false,
      errorPassword: false,
      errorName: true,
      errorConfirmPassword: false,
      errorPhone: false,
      errorCpf: false,
      errorMessage: "Por favor, insira uma senha!",
    });
    setIsLoading(false)
  } else {
    if (!validarEmail(userLogin.email) && !validateCPF(userLogin.cpf) && !validatePhoneNumber(userLogin.phone)) {
      setErroRegisterUser({
        ...errorRegisterUser,
        errorEmail: true,
        errorCpf: true,
        errorPhone: true,
        errorMessage: "Por favor, preencha os campos!",
      });
      setIsLoading(false)
    } else if (!validateCPF(userLogin.cpf) && !validatePhoneNumber(userLogin.phone)) {
      setErroRegisterUser({
        ...errorRegisterUser,
        errorCpf: true,
        errorPhone: true,
        errorMessage: "Por favor, preencha os campos!",
      });
      setIsLoading(false)
    }
    else if (!validarEmail(userLogin.email)) {
      setErroRegisterUser({
        ...errorRegisterUser,
        errorEmail: true,
        errorCpf: false,
        errorPhone: false,
        errorMessage: "Por favor, insira um e-mail válido!",
      });
      setIsLoading(false)
    } else if (!validateCPF(userLogin.cpf)) {
      setErroRegisterUser({
        ...errorRegisterUser,
        errorEmail: false,
        errorCpf: true,
        errorPhone: false,
        errorMessage: "Por favor, insira um cpf válido!",
      });
      setIsLoading(false)
    } else if (!validatePhoneNumber(userLogin.phone)) {
      setErroRegisterUser({
        ...errorRegisterUser,
        errorEmail: false,
        errorCpf: false,
        errorPhone: true,
        errorMessage: "Por favor, insira um telefone válido!",
      });
      setIsLoading(false)
    } else if (!validatePassowrd(userLogin.password, userLogin.confirmPassword)) {
      setErroRegisterUser({
        ...errorRegisterUser,
        errorEmail: false,
        errorCpf: false,
        errorPhone: false,
        errorConfirmPassword: true,
        errorPassword: true,
        errorMessage: "Suas senhas precisam ser iguais!",
      });
      setIsLoading(false)
    } else {
      setIsLoading(true)
      const originalString = "+55" + userLogin.phone;
      const stringWithoutPunctuation = originalString.replace(/[()-]/g, ""); // Remove parênteses e traço
      const stringWithoutFirstNine = stringWithoutPunctuation.replace(
        "9",
        ""
      ); // Remove o primeiro dígito 9
      try {
        await fetchPostUsers({ ...userLogin, phone: stringWithoutFirstNine });
        toggleModalRegister();
        toast.success("Usuário cadastrado com sucesso!", {
          autoClose: 2000,
        });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message, {
          autoClose: 2000,
        });
      } finally {
        setIsLoading(false);
      }
    }
  }
};