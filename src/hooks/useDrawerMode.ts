import { useContext } from "react";
import DrawerContext from "../context/Drawer";

const useDrawerMode = () => useContext(DrawerContext)

export default useDrawerMode;