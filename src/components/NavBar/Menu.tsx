import { Box } from "@mui/material";
import Categorias from "./SubMenus/Categorias";
import Acessorios from "./SubMenus/Acessorios";

const Menu = () => {
  return (
    <Box
      display='flex'
      height='50px'
      width='100%'
      borderTop='1px solid #525252'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      <Categorias />
      <Acessorios />
    </Box>
  );
}

export default Menu;