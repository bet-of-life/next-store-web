import { useState } from "react";
import { Button, Menu, MenuItem } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const SigninSizeSm = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="secondary"
        variant="text"
        sx={{ borderRadius: '100%' }}

      >
        <PermIdentityIcon sx={{ marginBottom: '2px' }} />
      </Button>
      <Menu
        id="basic-menu"
        color="primary"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Entrar</MenuItem>
        <MenuItem onClick={handleClose}>Criar conta</MenuItem>
      </Menu>
    </div>
  );
}

export default SigninSizeSm