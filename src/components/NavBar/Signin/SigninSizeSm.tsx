import { useState } from "react";
import { IconButton, Menu, MenuItem, Typography, Box, Button } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const SigninSizeSm = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <PermIdentityIcon sx={{ color: 'white' }} />
      </IconButton>

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
      >
        <MenuItem onClick={handleClose} sx={{ color: 'white' }}>Entrar</MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: 'white' }}>Criar conta</MenuItem>
      </Menu>
    </>
  );
}

export default SigninSizeSm