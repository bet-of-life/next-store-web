import { AppBar, Box, Grid, useTheme } from "@mui/material";
import SignIn from "./Signin/SignIn";
import Logo from "./Logo";
import useMediaQuery from "../../hooks/useMediaQuery";
import SearchNavBar from "./Search/SearchNavBar";
import SigninSizeSm from "./Signin/SigninSizeSm";
import useModal from "../../hooks/useModal";
import ModalLogin from "./Signin/Modals/ModalLogin/ModalLogin";
import ModalRegister from "./Signin/Modals/ModalRegister/ModalRegister";
import { tokens } from "../../themes/theme";
import { AuthContext } from "../../context/AuthContenxt";
import { useContext } from "react";

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { sm, md, lg } = useMediaQuery();
  const { isOpenLogin, isOpenRegister, toggleModalLogin, toggleModalRegister } = useModal();
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Box>
      <AppBar position="fixed">
        <Grid
          container
          direction="row"
          height={90}
          paddingX={sm ? 2 : md ? 2 : lg ? 5 : 18}
          bgcolor={colors.black[800]}
        >
          {/* <Grid item xs={2} sm={1}>
            <Menu />
          </Grid> */}
          {/* <Grid item xs={2} sm={2}>
        
          </Grid> */}
          <Grid item xs={2} sm={5}>
            {!sm && <SearchNavBar width="40%" variant="filled" />}
          </Grid>

          <Grid item xs={4} sm={2}>
            <Logo />
          </Grid>

          <Grid item xs={4} sm={5}>
            {!sm && <SignIn />}
            {sm && <SigninSizeSm />}
          </Grid>
          {/* <Grid item xs={2} sm={4}>
           
          </Grid> */}
        </Grid>
      </AppBar>

      <ModalLogin open={isOpenLogin} handleClose={toggleModalLogin} />
      <ModalRegister open={isOpenRegister} handleClose={toggleModalRegister} />
    </Box>
  );
};

export default NavBar;
