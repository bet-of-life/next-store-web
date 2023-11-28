import { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Box, Avatar, Typography } from '@mui/material'
import { AuthContext } from "../../../context/AuthContenxt";
import useThemeMode from "../../../hooks/useThemeMode";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { tokens } from "../../../themes/theme";

const SignOut = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { mode, toggleTheme } = useThemeMode()
  const { signOutUser } = useContext(AuthContext)
  const colors = tokens(mode)
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    signOutUser()
    setAnchorEl(null)
  }

  return (
    <>
      <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
        <IconButton onClick={handleClick}>
          <Avatar alt="pessoa" sx={{ bgcolor: colors.grey[100], width: 30, height: 30 }} />
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
        <MenuItem onClick={handleLogout} sx={{ color: colors.grey[100], display: 'flex', justifyContent: 'center' }}>Sair</MenuItem>
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

export default SignOut