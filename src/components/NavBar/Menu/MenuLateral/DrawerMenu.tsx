import { useState } from 'react'
import { Box, Divider, Drawer } from "@mui/material";
import ThemeMui from "../../ThemeMui";
import useDrawerMode from "../../../../hooks/useDrawerMode";
import Roupas from './Roupas';
import useThemeMode from '../../../../hooks/useThemeMode';
import SearchNavBar from '../../Search/SearchNavBar';
import useMediaQuery from '../../../../hooks/useMediaQuery';

const DrawerMenu = () => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerMode()
  const { mode } = useThemeMode()
  const { sm } = useMediaQuery()

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawerOpen}
      disableScrollLock={true}
      PaperProps={{ sx: { color: 'white' } }}
      color='secondary'
    >

      <Box display='flex' flexDirection='column' width={sm ? 200 : 250} height='100vh' p={1}>
        <Box width='100%' height={120}>
          <SearchNavBar width='100%' variant='outlined' />
        </Box>

        <Divider sx={{ bgcolor: '#959595' }} />

        <Box flex={1} mt={2}>
          <Roupas />
          <Roupas />
          <Roupas />
        </Box>

        <Box height={60} display='flex' justifyContent='center' alignItems='center' gap={1}>
          <ThemeMui />
          {mode === 'dark' ? 'Dark' : 'Light'}
        </Box>

      </Box>
    </Drawer>
  );
}

export default DrawerMenu;