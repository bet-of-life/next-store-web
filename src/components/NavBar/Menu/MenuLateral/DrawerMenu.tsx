import { useState } from 'react'
import { Box, Divider, Drawer } from "@mui/material";
import ThemeMui from "../../ThemeMui";
import useDrawerMode from "../../../../hooks/useDrawerMode";
import Roupas from './Roupas';
import useThemeMode from '../../../../hooks/useThemeMode';
import SearchNavBar from '../../Search/SearchNavBar';
import useMediaQueryAdapter from '../../../../hooks/useMediaQuery';

const DrawerMenu = () => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerMode()
  const { mode } = useThemeMode()
  const { sm } = useMediaQueryAdapter()

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawerOpen}
      disableScrollLock={true}
      PaperProps={{ sx: { color: 'white' } }}
      color='secondary'
    >

      <Box
        display='flex'
        flexDirection='column'
        width={sm ? 200 : 250}
        height='100vh' p={1}
        sx={{ backgroundColor: mode == 'dark' ? '#171717' : '#000336' }}
      >

        <Divider sx={{ bgcolor: '#959595' }} />

        <Box flex={1} mt={2}>
          <Roupas />
          <Roupas />
          <Roupas />
        </Box>


      </Box>
    </Drawer>
  );
}

export default DrawerMenu;