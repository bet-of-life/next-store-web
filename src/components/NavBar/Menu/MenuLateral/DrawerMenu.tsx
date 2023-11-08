import { useState } from 'react'
import { Box, Drawer } from "@mui/material";
import ThemeMui from "../../ThemeMui";
import useDrawerMode from "../../../../hooks/useDrawerMode";
import Roupas from './Roupas';
import SearchDrawer from '../../Search/SearchDrawer';

const DrawerMenu = () => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerMode()

  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} disableScrollLock={true}
      PaperProps={{ sx: { color: 'white' } }}>

      <Box display='flex' flexDirection='column' width={200} height='100%'>
        <Box width={150} height={120} display='flex' justifyContent='center' alignItems='center' padding={2}>
          <SearchDrawer />
        </Box>

        <Box flex={1}>
          <Roupas />
          <Roupas />
          <Roupas />

          <ThemeMui />

        </Box>

      </Box>
    </Drawer>
  );
}

export default DrawerMenu;