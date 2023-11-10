import { AppBar, Box, Grid } from "@mui/material";
import SignInBox from "./Signin/SignInBox";
import ThemeMui from "./ThemeMui";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import SocialIcons from "./SocialIcons";
import useMediaQuery from "../../hooks/useMediaQuery";
import SearchNavBar from "./Search/SearchNavBar";

const NavBar = () => {
  const { sm, md, lg } = useMediaQuery()

  return (
    <Box>
      <AppBar position="fixed" color="primary">
        <Grid container direction='column'>

          <Grid container item direction='row' height={80} paddingX={sm ? 0 : (md ? 2 : (lg ? 5 : 10))}>
            <Grid item xs={4} sm={1.5} lg={1}>
              <SocialIcons />
            </Grid>
            {!sm &&
              <Grid item sm={3.5} lg={3}>
                <SearchNavBar />
              </Grid>}
            <Grid item xs={4} sm={2} lg={4}>
              <Logo />
            </Grid>
            <Grid item xs={4} sm={4} lg={3}>
              <SignInBox />
            </Grid>
            {!sm &&
              <Grid item sm={1} lg={1}>
                <ThemeMui />
              </Grid>}
          </Grid>

          <Grid container item height={40}>
            <Grid item xs={12}>
              <Menu />
            </Grid>
          </Grid>

        </Grid>
      </AppBar>
    </Box>
  );
}

export default NavBar;