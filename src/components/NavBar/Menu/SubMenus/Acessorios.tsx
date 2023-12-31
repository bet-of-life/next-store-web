import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Acessorios = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        //color="secondary"
        endIcon={<ArrowDropDownIcon />}
      >
        <Typography textTransform='capitalize'>
          Acessórios
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ color: 'white' }}>Profile</MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: 'white' }}>My account</MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: 'white' }}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Acessorios;