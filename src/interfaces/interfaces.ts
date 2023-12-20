import { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
export interface CartProps {
  id?: number;
  name?: string;
  color?: string;
  price?: string;
  src?: string;
  size?: string;
  quantityShirts?: number
  setQuantityShirts?: Dispatch<SetStateAction<number>>
  handleOpenModal?: () => void
}

export interface ModalSignInProps {
  open: boolean
  toggleModalLogin: () => void
  toggleModalRegister: () => void
}

export interface FormDataLoginProps {
  email: string,
  password: string,
}
export interface InputLoginProps {
  register: UseFormRegister<FormDataLoginProps>;
  errors: FieldErrors<FormDataLoginProps>
}
export interface FormDataRegisterprops {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  cpf: string,
  phone: string
}
export interface InputRegisterProps {
  register: UseFormRegister<FormDataRegisterprops>;
  errors: FieldErrors<FormDataRegisterprops>
  watchPassword?: string
}

export interface FormDataAdressProps {
  road: string,
  houseNumber: string
  complement: string,
  neighborhood: string,
  city: string,
  state: string,
}

export interface InputAdressProps {
  register: UseFormRegister<FormDataAdressProps>;
  errors: FieldErrors<FormDataAdressProps>
}