import { destroyCookie } from "nookies";
import Router from "next/router";
const singOut = () => {
  destroyCookie(undefined, "nextauth.token");
  Router.push("/dashboard");
};

export { singOut };