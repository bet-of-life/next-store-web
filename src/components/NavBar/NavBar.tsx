import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import SearchBox from "./SearchBox";
import SignInBox from "./SignInBox";
import ThemeMui from "./ThemeMui";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  const theme = useTheme()
  return (
    <Box>
      <AppBar position="fixed" color="primary" sx={{ height: '160px' }}>
        <Toolbar sx={{ marginLeft: theme.spacing(17), marginRight: theme.spacing(2) }}>
          <SearchBox />
          <Logo />
          <SignInBox />
          <ThemeMui />
        </Toolbar>
        <Menu />
      </AppBar>
    </Box>
  );
}

export default NavBar;