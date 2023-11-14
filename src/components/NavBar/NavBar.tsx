import { AppBar, Box, Button, Grid, Avatar } from "@mui/material";
import SignInBox from "./Signin/SignInBox";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import useMediaQuery from "../../hooks/useMediaQuery";
import SearchNavBar from "./Search/SearchNavBar";

const NavBar = () => {
  const { sm, md, lg } = useMediaQuery()

  return (
    <Box>
      <AppBar position="fixed">
        <Grid container direction='column'>
          <Grid container item direction='row' height={90} paddingX={sm ? 2 : (md ? 2 : (lg ? 5 : 18))}>
            <Grid item xs={2} sm={1}>
              <Menu />
            </Grid>
            <Grid item xs={2} sm={4}>
              {!sm && <SearchNavBar width="75%" variant="filled" />}
            </Grid>
            <Grid item xs={4} sm={2}>
              <Logo />
            </Grid>
            <Grid item xs={2} sm={4}>
              {!sm && <SignInBox />}
            </Grid>
            <Grid item xs={2} sm={1} display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="pessoa" />
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}

export default NavBar;