import { toast } from "react-toastify";
import { fetchPostUsers } from "../../../../../config/services/consumers/users";
import { validateCPF } from "../../../../../utils/validateCpf";
import { validarEmail } from "../../../../../utils/validateEmail";
import { validatePassowrd } from "../../../../../utils/validatePassword";
import { validatePhoneNumber } from "../../../../../utils/validatePhone";

export interface UserRegisterErrorState {
    errorName: boolean;
    errorEmail: boolean;
    errorPassword: boolean;
    errorConfirmPassoword: boolean;
    errorPhone: boolean;
    errorCpf: boolean;
    errorMessage: string;
  }

  export  const handleSubmit = async ({userLogin, setErroRegisterUser, errorRegisterUser, toggleModalRegister, setIsLoading}) => {
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
        errorConfirmPassoword: true,
        errorPhone: true,
        errorCpf: true,
        errorMessage: "Por favor, preencha os campos!",
      });
    } else if (!userLogin.email) {
      setErroRegisterUser({
        errorEmail: true,
        errorPassword: false,
        errorName: false,
        errorConfirmPassoword: false,
        errorPhone: false,
        errorCpf: false,
        errorMessage: "Por favor, insira um e-mail!",
      });
    } else if (!userLogin.password) {
      setErroRegisterUser({
        errorEmail: false,
        errorPassword: true,
        errorName: false,
        errorConfirmPassoword: false,
        errorPhone: false,
        errorCpf: false,
        errorMessage: "Por favor, insira uma senha!",
      });
    } else if (!userLogin.confirmPassword) {
      setErroRegisterUser({
        errorEmail: false,
        errorPassword: false,
        errorName: false,
        errorConfirmPassoword: true,
        errorPhone: false,
        errorCpf: false,
        errorMessage: "Por favor, insira uma senha!",
      });
    } else if (!userLogin.cpf) {
      console.log(userLogin.cpf)
      setErroRegisterUser({
        errorEmail: false,
        errorPassword: false,
        errorName: false,
        errorConfirmPassoword: false,
        errorPhone: false,
        errorCpf: true,
        errorMessage: "Por favor, insira uma senha!",
      });
    } else if (!userLogin.phone) {
      setErroRegisterUser({
        errorEmail: false,
        errorPassword: false,
        errorName: false,
        errorConfirmPassoword: false,
        errorPhone: true,
        errorCpf: false,
        errorMessage: "Por favor, insira uma senha!",
      });
    } else if (!userLogin.name) {
      setErroRegisterUser({
        errorEmail: false,
        errorPassword: false,
        errorName: true,
        errorConfirmPassoword: false,
        errorPhone: false,
        errorCpf: false,
        errorMessage: "Por favor, insira uma senha!",
      });
    } else {
      if(!validarEmail(userLogin.email) && !validateCPF(userLogin.cpf) && !validatePhoneNumber(userLogin.phone)){
        setErroRegisterUser({
          ...errorRegisterUser,
          errorEmail: true,
          errorCpf: true,
          errorPhone: true,
          errorMessage: "Por favor, preencha os campos!",
        });
      }else if(!validateCPF(userLogin.cpf) && !validatePhoneNumber(userLogin.phone)){
        setErroRegisterUser({
          ...errorRegisterUser,
          errorCpf: true,
          errorPhone: true,
          errorMessage: "Por favor, preencha os campos!",
        });
      }
      else if (!validarEmail(userLogin.email)) {
        setErroRegisterUser({
          ...errorRegisterUser,
          errorEmail: true,
          errorCpf: false,
          errorPhone: false,
          errorMessage: "Por favor, insira um e-mail válido!",
        });
      } else if (!validateCPF(userLogin.cpf)){
        setErroRegisterUser({
          ...errorRegisterUser,
          errorEmail: false,
          errorCpf: true,
          errorPhone: false,
          errorMessage: "Por favor, insira um cpf válido!",
        });
      } else if (!validatePhoneNumber(userLogin.phone)){
        setErroRegisterUser({
          ...errorRegisterUser,
          errorEmail: false,
          errorCpf: false,
          errorPhone: true,
          errorMessage: "Por favor, insira um telefone válido!",
        });
      } else if (!validatePassowrd(userLogin.password, userLogin.confirmPassword)){
        setErroRegisterUser({
          ...errorRegisterUser,
          errorEmail: false,
          errorCpf: false,
          errorPhone: false,
          errorConfirmPassoword: true,
          errorPassword: true,
          errorMessage: "Suas senhas precisam ser iguais!",
        });
      }else {
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
        }finally{
          setIsLoading(false);
        }
      }
    }
  };