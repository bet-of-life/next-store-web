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
import SocialIcons from "./SocialIcons";
import { useRouter } from "next/router";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { sm, md, lg } = useMediaQuery();
  const { isOpenLogin, isOpenRegister, toggleModalLogin, toggleModalRegister } = useModal();
  const router = useRouter()
  const sizeWindowWidth = useWindowDimensions();

  const route = router.pathname
  const BoxWidth = sizeWindowWidth.width < 1025 ? '90vw' : '70vw'

  return (
    <Box height={90}>
      <AppBar position="fixed">
        <Grid container width='100%' bgcolor={colors.black[800]} justifyContent='center'>
          <Grid
            container
            item
            direction="row"
            height={90}
            width={BoxWidth}
          >
            <Grid item xs={1}>
              <SocialIcons />
            </Grid>
            <Grid item xs={3} pl={1}>
              {route === '/dashboard' && <>{!md && <SearchNavBar />}</>}
            </Grid>
            <Grid item xs={4}>
              <Logo />
            </Grid>
            <Grid item xs={4}>
              {!md && <SignIn />}
              {md && <SigninSizeSm />}
            </Grid>
          </Grid>
        </Grid>
        {route === '/dashboard' && <>{md && <SearchNavBar />}</>}
      </AppBar>

      <ModalLogin open={isOpenLogin} handleClose={toggleModalLogin} />
      <ModalRegister open={isOpenRegister} handleClose={toggleModalRegister} />
    </Box>
  );
};

export default NavBar;
