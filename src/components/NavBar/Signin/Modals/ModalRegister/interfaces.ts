import { Dispatch, SetStateAction } from "react";

export interface ModalRegisterProps {
  open: boolean;
  handleClose: () => void;
}

export interface UserRegisterErrorState {
  errorName: boolean;
  errorEmail: boolean;
  errorPassword: boolean;
  errorConfirmPassword: boolean;
  errorPhone: boolean;
  errorCpf: boolean;
  errorMessage: string;
}

export interface UserLoginProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cpf: string
}

export interface DataInputProps {
  setErroRegisterUser: Dispatch<SetStateAction<UserRegisterErrorState>>;
  errorRegisterUser: UserRegisterErrorState;
  setUserLogin: Dispatch<SetStateAction<UserLoginProps>>;
  userLogin: UserLoginProps
}

export interface UtilsRegisterProps {
  userLogin: UserLoginProps;
  setErroRegisterUser: Dispatch<SetStateAction<UserRegisterErrorState>>;
  errorRegisterUser: UserRegisterErrorState;
  toggleModalRegister: () => void
  setIsLoading: Dispatch<SetStateAction<Boolean>>
}
