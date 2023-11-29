import { useState } from "react";
import { IconButton, Menu, MenuItem, Box, Avatar, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useModal from "../../../hooks/useModal";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";

const SigninSizeSm = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggleModalLogin, toggleModalRegister } = useModal()
  const { mode, toggleTheme } = useThemeMode()
  const colors = tokens(mode)

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogin = () => {
    toggleModalLogin()
    handleClose()
  }

  const handleCloseRegister = () => {
    toggleModalRegister()
    handleClose()
  }

  return (
    <>
      <Box display='flex' justifyContent='center' alignItems='center' height='100%' ml='50px'>
        <IconButton onClick={handleClick}>
          <Avatar alt="pessoa" />
        </IconButton>
      </Box>

      <Menu
        id="basic-menu"
        disableScrollLock={true}
        color="primary"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleCloseLogin} sx={{ color: colors.grey[100] }}>Entrar</MenuItem>
        <MenuItem onClick={handleCloseRegister} sx={{ color: colors.grey[100] }}>Criar conta</MenuItem>
        <MenuItem sx={{ color: colors.grey[100] }}>
          <IconButton onClick={toggleTheme} sx={{ color: colors.grey[100] }}>
            {mode === 'dark' ? (
              <>
                <Brightness4Icon fontSize="small" sx={{ mr: '10px' }} />
                <Typography>
                  Light Mode
                </Typography>
              </>
            ) : (
              <>
                <Brightness7Icon fontSize="small" sx={{ mr: '10px' }} />
                <Typography>
                  Dark Mode
                </Typography>
              </>
            )}
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
}

export default SigninSizeSm