import { useState } from "react";
import { IconButton, Menu, MenuItem, Box, Avatar } from '@mui/material'
import useModal from "../../../hooks/useModal";

const SigninSizeSm = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggleModalLogin, toggleModalRegister } = useModal()

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
        <MenuItem onClick={handleCloseLogin} sx={{ color: 'white' }}>Entrar</MenuItem>
        <MenuItem onClick={handleCloseRegister} sx={{ color: 'white' }}>Criar conta</MenuItem>
      </Menu>
    </>
  );
}

export default SigninSizeSm