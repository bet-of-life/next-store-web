import { createContext, useEffect, useState, ReactNode, useContext, Dispatch, SetStateAction } from "react";
import { setCookie, parseCookies } from "nookies";
import parseJwt from "../utils/parseJwt";
import { singOut } from "../utils/singOut";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import api from "../config/api";
import useModal from "../hooks/useModal";
import ModalContext from "./ModalContext";
import { User } from "../interfaces/interfaces";



interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | undefined;
  signOutUser: () => void;
  setUser:  Dispatch<SetStateAction<object>>,
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}


function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (token) {
      setUser(parseJwt(token) as User);
      setIsAuthenticated(true);
    } else {
      setUser(undefined);
      setIsAuthenticated(false);
    }
  }, []);

  const signOutUser = () => {
    setUser(undefined);
    setIsAuthenticated(false);
    singOut();
  };



  return (
    <AuthContext.Provider
      value={{  isAuthenticated, user, signOutUser, setUser, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };