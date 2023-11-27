import { Box, Button, Typography, useTheme } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import useModal from "../../../hooks/useModal";
import { tokens } from "../../../themes/theme";
import ThemeMui from "../ThemeMui";
import useThemeMode from "../../../hooks/useThemeMode";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContenxt";
import SignOut from "./SignOut";

const SignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleModalLogin, toggleModalRegister } = useModal();
  const { mode } = useThemeMode();
  const { isAuthenticated, user } = useContext(AuthContext)

  return (
    <>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
        flexDirection="row"
        px="35px"
      >
        {!isAuthenticated &&
          <>
            <Button onClick={toggleModalLogin} sx={{ color: colors.grey[100] }}>
              <PermIdentityIcon sx={{ mb: "2px", mr: "6px" }} />
              <Typography textTransform="capitalize">Entrar</Typography>
            </Button>
            <Typography color={colors.grey[100]}>|</Typography>
            <Button sx={{ color: colors.grey[100] }} onClick={toggleModalRegister}>
              <Typography textTransform="capitalize">Criar conta</Typography>
            </Button>
          </>
        }
        {isAuthenticated &&
          <>
            {user.name}
            <SignOut />
          </>
        }
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <ThemeMui />
          <Typography color={colors.grey[100]}>{mode === "dark" ? "Dark" : "Light"}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
