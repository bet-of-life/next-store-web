import { createContext, useEffect, useState, ReactNode } from "react";
import { setCookie, parseCookies } from "nookies";
import parseJwt from "../utils/parseJwt";
import { singOut } from "../utils/singOut";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import api from "../config/api";

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  gender: string;
  created_at: string;
  updated_at: string;
}

interface AuthContextProps {
  singIn: (credentials: { email: string; password: string }) => Promise<void>;
  isAuthenticated: boolean;
  user: User | undefined;
  signOutUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  singIn: async () => {},
  isAuthenticated: false,
  user: undefined,
  signOutUser: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (token) {
      setUser(parseJwt(token) as User);
      setIsAuthenticated(true);
    } else {
      setUser(undefined);
      setIsAuthenticated(false);
      singOut();
    }
  }, []);

  const signOutUser = () => {
    setUser(undefined);
    setIsAuthenticated(false);
    singOut();
  };

  async function singIn({ email, password }: { email: string; password: string }) {
    try {
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

      router.push("/");
    } catch (err) {
      toast.error(err.response.data?.message, {
        autoClose: 2000,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{ singIn, isAuthenticated, user, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };