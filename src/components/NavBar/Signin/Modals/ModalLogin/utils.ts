import { setCookie } from "nookies";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import api from "../../../../../config/api";
import { User } from "../../../../../interfaces/interfaces";
import parseJwt from "../../../../../utils/parseJwt";

interface SingIn {
    email: string,
    password: string,
    setUser:  Dispatch<SetStateAction<object>>,
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
    toggleModalLogin: () => void,
    setIsLoading:  Dispatch<SetStateAction<boolean>>
}

export const singIn = async ({ email, password, setIsAuthenticated, setUser, toggleModalLogin, setIsLoading }:SingIn) => {
    try {
        setIsLoading(true)
      const res = await api.post("/token", {
        email,
        password,
      });

      const { token } = res.data;
      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setUser(parseJwt(token) as User);
      setIsAuthenticated(true);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      toggleModalLogin();
      toast.success("Você está autenticado!", {
        autoClose: 2000,
      });
    } catch (err) {
      toast.error(err?.response?.data?.error, {
        autoClose: 2000,
      });
    }finally {
      setIsLoading(false);
    }
  }
  