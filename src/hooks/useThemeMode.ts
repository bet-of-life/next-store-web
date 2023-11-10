import { useContext } from "react";
import ThemesContext from "../context/Themes";

const useThemeMode = () => useContext(ThemesContext)

export default useThemeMode