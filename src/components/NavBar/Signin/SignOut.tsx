import { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Box, Avatar } from '@mui/material'
import { AuthContext } from "../../../context/AuthContenxt";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
import ThemeMui from "../ThemeMui";
import useMediaQueryAdapter from "../../../hooks/useMediaQuery";

const SignOut = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { mode } = useThemeMode()
  const { signOutUser, user } = useContext(AuthContext)
  const { tablet } = useMediaQueryAdapter()
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
      <Box display='flex' justifyContent='end' alignItems='center' height='100%'>
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
        {tablet && <MenuItem sx={{ color: colors.grey[100], display: 'flex', justifyContent: 'center' }}>{user.name}</MenuItem>}
        <MenuItem onClick={handleLogout} sx={{ color: colors.grey[100], display: 'flex', justifyContent: 'center' }}>Sair</MenuItem>
        <MenuItem sx={{ color: colors.grey[100] }}><ThemeMui /></MenuItem>
      </Menu>
    </>
  );
}

export default SignOut