import { useContext } from "react";
import Themes from "../context/Themes";

const useThemeMode = () => useContext(Themes)

export default useThemeMode