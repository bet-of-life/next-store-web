import { destroyCookie } from "nookies";
import Router from "next/router";
const singOut = () => {
  destroyCookie(undefined, "nextauth.token");
  window.location.reload()
  Router.push('/')
};

export { singOut };