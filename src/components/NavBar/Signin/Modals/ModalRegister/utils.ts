import { toast } from "react-toastify";
import { fetchPostUsers } from "../../../../../config/services/consumers/users";
import { Dispatch, SetStateAction } from "react";

interface handleOnSubmitProps {
  data: {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    cpf: string,
    phone: string
  }
  setIsLoading: Dispatch<SetStateAction<Boolean>>
  toggleModalRegister: () => void
}

export const handleOnSubmit = async ({ data, setIsLoading, toggleModalRegister }: handleOnSubmitProps) => {

  setIsLoading(true)
  const originalString = "+55" + data.phone;
  const stringWithoutPunctuation = originalString.replace(/[()-]/g, ""); // Remove parênteses e traço
  const stringWithoutFirstNine = stringWithoutPunctuation.replace(
    "9",
    ""
  ); // Remove o primeiro dígito 9
  try {
    await fetchPostUsers({ data, phone: stringWithoutFirstNine });
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
};