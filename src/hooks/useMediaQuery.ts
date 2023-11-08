import { useContext } from "react";
import MediaQueryContext from "../context/MediaQuery";

const useMediaQuery = () => useContext(MediaQueryContext)

export default useMediaQuery