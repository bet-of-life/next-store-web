import { Box, Button } from "@mui/material";
import Acessorios from "./SubMenus/Acessorios";
import MenuIcon from '@mui/icons-material/Menu';
import useDrawerMode from "../../../hooks/useDrawerMode";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Roupas from "./SubMenus/Roupas";
import Marcas from './SubMenus/Marcas';
import Calcados from './SubMenus/Calcados'
import DrawerMenu from "./MenuLateral/DrawerMenu";

const Menu = () => {
  const { sm } = useMediaQuery()
  const { toggleDrawerOpen } = useDrawerMode()

  return (
    <Box
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Button onClick={toggleDrawerOpen}>
        <MenuIcon sx={{ color: 'white' }} fontSize="large" />
      </Button>

      <DrawerMenu />

    </Box>
  );
}

export default Menu;