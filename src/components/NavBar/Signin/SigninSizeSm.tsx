import { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Box, Avatar } from '@mui/material'
import useModal from "../../../hooks/useModal";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
import ThemeMui from "../ThemeMui";
import { AuthContext } from "../../../context/AuthContenxt";
import SignOut from "./SignOut";

const SigninSizeSm = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggleModalLogin, toggleModalRegister } = useModal()
  const { mode } = useThemeMode()
  const { isAuthenticated, user } = useContext(AuthContext)

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
      {!isAuthenticated &&
        <>
          <Box display='flex' justifyContent='end' alignItems='center' height='100%' ml='40px'>
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
            <MenuItem sx={{ color: colors.grey[100] }}><ThemeMui /></MenuItem>
          </Menu>
        </>
      }
      {isAuthenticated && <SignOut />}
    </>
  );
}

export default SigninSizeSm