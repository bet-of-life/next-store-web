import { AppBar, Box, Grid, useTheme } from "@mui/material";
import SignIn from "./Signin/SignIn";
import Logo from "./Logo";
import SearchNavBar from "./Search/SearchNavBar";
import SigninSizeSm from "./Signin/SigninSizeSm";
import { tokens } from "../../themes/theme";
import SocialIcons from "./SocialIcons";
import { useRouter } from "next/router";
import useMediaQueryAdapter from "../../hooks/useMediaQuery";
import useModal from "../../hooks/useModal";
import ModalLogin from "./Signin/Modals/ModalLogin/ModalLogin";
import ModalRegister from "./Signin/Modals/ModalRegister/ModalRegister";

const NavBar = () => {
  const { isOpenLogin, isOpenRegister, toggleModalLogin, toggleModalRegister } = useModal();
  const { tv, tablet } = useMediaQueryAdapter();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter()
  const route = router.pathname
  const BoxMaxWidth = tv ? 1130 : 1220

  return (
    <>
      <Box height={90}>
        <AppBar position="fixed">
          <Grid container width='100%' bgcolor={colors.black[800]} justifyContent='center'>
            <Grid
              container
              item
              direction="row"
              height={90}
              maxWidth={BoxMaxWidth}
              px={2}
            >
              <Grid item xs={1} >
                <SocialIcons />
              </Grid>
              <Grid item xs={3} pl={1} >
                {route === '/' && <>{!tablet && <SearchNavBar />}</>}
              </Grid>
              <Grid item xs={4} >
                <Logo />
              </Grid>
              <Grid item xs={4} >
                {!tablet && <SignIn />}
                {tablet && <SigninSizeSm />}
              </Grid>
            </Grid>
          </Grid>
          {route === '/' && <>{tablet && <SearchNavBar />}</>}
        </AppBar>
      </Box>
      <ModalLogin open={isOpenLogin} toggleModalLogin={toggleModalLogin} toggleModalRegister={toggleModalRegister} />
      <ModalRegister open={isOpenRegister} toggleModalLogin={toggleModalLogin} toggleModalRegister={toggleModalRegister} />
    </>
  );
};

export default NavBar;
