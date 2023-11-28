import { ChangeEvent } from "react";

export const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setErroRegisterUser: (object: object) => object,
  errorData: object,
  setUserLogin: (object: object) => object,
  userData: object
) => {
  setErroRegisterUser(errorData);
  e.preventDefault();
  setUserLogin(userData);
};
