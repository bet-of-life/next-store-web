import { Dispatch, SetStateAction } from "react";

export interface AddressErrorProps {
  errorRoad: boolean;
  errorNeighborhood: boolean;
  errorComplement: boolean;
  errorHouseNumber: boolean;
  errorCity: boolean;
  errorState: boolean;
  errorMessage: string;
}
export interface InputProps {
  setErrorAddress: Dispatch<SetStateAction<AddressErrorProps>>;
  errorAddress: AddressErrorProps;
  setAddress: Dispatch<SetStateAction<AddressProps>>;
  address: AddressProps
}

export interface AddressProps {
  road: string,
  neighborhood: string,
  complement: string,
  houseNumber: string,
  city: string,
  state: string
}

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