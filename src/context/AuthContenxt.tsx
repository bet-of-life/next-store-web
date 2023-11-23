import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import axios from "../config/axios";
import parseJwt from "../utils/parseJWT";
import { singOut } from "../utils/singOut";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const isAuthenticated = !!user;
  const router = useRouter();

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
      if (token) {
        setUser(parseJwt(token));
        setIsAuthenticated(true)
      } else {
        setUser(undefined);
        setIsAuthenticated(false)
        singOut();
      }
  }, []);

  const signOutUser = () => {
    setUser(undefined);
    setIsAuthenticated(false);
    singOut();
  };

  async function singIn({ email, password }) {
    try {
      const res = await axios.post("/token", {
        email,
        password,
      });

      const { token } = res.data;

      setCookie(undefined, "nextauth.token", token, {
        //tempo de vida do cookie
        maxAge: 60 * 60 * 24 * 30, //30 dias
        //quais caminhos da aplicação vão ter acessos a esses cookies
        //no caso,esse vai ser usado de forma global
        path: "/",
      });

      setUser(parseJwt(token));
      setIsAuthenticated(true);
      //atulizando o header
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;

      router.push("/");
    } catch (err) {
      toast.error(err.response.data?.message, {
        autoClose: 2000,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{ singIn, isAuthenticated, user, signOutUser}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };