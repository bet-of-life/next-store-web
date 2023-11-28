import { useState } from "react";
import {
  Modal,
  Typography,
  Grid,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";
import useThemeMode from "../../../../../hooks/useThemeMode";
import useMediaQuery from "../../../../../hooks/useMediaQuery";
import { tokens } from "../../../../../themes/theme";
import useModal from "../../../../../hooks/useModal";
import { validarEmail } from "../../../../../utils/validateEmail";
import { fetchPostUsers } from "../../../../../config/services/consumers/users";
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInputAndConfirmPassword";
import PhoneAndCpfInput from "./components/PhoneAndCpfInput";
import { toast } from "react-toastify";
import { validateCPF } from "../../../../../utils/validateCpf";
import { validatePhoneNumber } from "../../../../../utils/validatePhone";
import { handleSubmit } from "./utils";

interface ModalRegisterProps {
  open: boolean;
  handleClose: () => void;
}
interface UserRegisterErrorState {
  errorName: boolean;
  errorEmail: boolean;
  errorPassword: boolean;
  errorConfirmPassowrd: boolean;
  errorPhone: boolean;
  errorCpf: boolean;
  errorMessage: string;
}
const ModalRegister: React.FC<ModalRegisterProps> = ({ open, handleClose }) => {
  const { mode } = useThemeMode();
  const { sm } = useMediaQuery();
  const { toggleModalLogin, toggleModalRegister } = useModal();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const colors = tokens(mode);

  const [errorRegisterUser, setErroRegisterUser] =
    useState<UserRegisterErrorState>({
      errorName: false,
      errorEmail: false,
      errorPassword: false,
      errorConfirmPassowrd: false,
      errorPhone: false,
      errorCpf: false,
      errorMessage: "",
    });
  const [userLogin, setUserLogin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cpf: "",
  });

  const handleClodeModal = () => {
    toggleModalRegister();
    toggleModalLogin();
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: sm ? 330 : 450,
    bgcolor: colors.black[900],
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Grid container sx={style} direction="column" gap={1}>
          <Grid item display="flex" justifyContent="center">
            <Typography variant="h6" sx={{ color: colors.grey[100] }}>
              Criar sua Conta
            </Typography>
          </Grid>
          <NameInput
            setErroRegisterUser={setErroRegisterUser}
            errorRegisterUser={errorRegisterUser}
            setUserLogin={setUserLogin}
            userLogin={userLogin}
          />
          <EmailInput
            setErroRegisterUser={setErroRegisterUser}
            errorRegisterUser={errorRegisterUser}
            setUserLogin={setUserLogin}
            userLogin={userLogin}
          />
          <PasswordInput
            setErroRegisterUser={setErroRegisterUser}
            errorRegisterUser={errorRegisterUser}
            setUserLogin={setUserLogin}
            userLogin={userLogin}
          />

          <PhoneAndCpfInput
            setErroRegisterUser={setErroRegisterUser}
            errorRegisterUser={errorRegisterUser}
            setUserLogin={setUserLogin}
            userLogin={userLogin}
          />

          <Grid item mt={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={() =>
                handleSubmit({
                  userLogin: userLogin,
                  setErroRegisterUser: setErroRegisterUser,
                  errorRegisterUser: errorRegisterUser,
                  toggleModalRegister: toggleModalLogin,
                  setIsLoading: setIsLoading,
                })
              }
              sx={{ bgcolor: colors.grey[100] }}
            >
              {isLoading ? (
                <CircularProgress size={18} />
              ) : (
                <Typography
                  sx={{ color: colors.grey[900], fontWeight: "bold" }}
                >
                  Criar conta
                </Typography>
              )}
            </Button>
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Typography mt={2}>
              <Link
                onClick={handleClodeModal}
                color={colors.grey[100]}
                sx={{ cursor: "pointer" }}
              >
                Já possui conta ?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ModalRegister;
