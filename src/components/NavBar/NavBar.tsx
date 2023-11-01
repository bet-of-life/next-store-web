import { AppBar, Box, Theme, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import SearchBox from "./SearchBox";
import SignInBox from "./SignInBox";
import ThemeMui from "./ThemeMui";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const theme = useTheme()
  return (
    <Box>
      <AppBar position="fixed" sx={{ height: smDown ? '100px' : '100px' }}>
        <Toolbar
          sx={{
            marginLeft: (lgDown && smUp) ? theme.spacing(8) : (smDown ? theme.spacing(2) : theme.spacing(17)),
            marginRight: (lgDown && smUp) ? theme.spacing(3) : (smDown ? theme.spacing(3) : theme.spacing(4))
          }}>
          <SearchBox />
          <Logo />
          <SignInBox />
          {smUp && <ThemeMui />}
        </Toolbar>
        <Menu />
      </AppBar>
    </Box>
  );
}

export default NavBar;