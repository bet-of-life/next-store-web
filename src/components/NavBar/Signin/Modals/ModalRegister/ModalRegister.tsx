import { useState } from "react";
import { Modal, Typography, Grid, Button, Link, CircularProgress, Box } from "@mui/material";
import useThemeMode from "../../../../../hooks/useThemeMode";
import { tokens } from "../../../../../themes/theme";
import { useForm } from "react-hook-form";
import { handleOnSubmit } from "./utils";
import useMediaQueryAdapter from "../../../../../hooks/useMediaQuery";
import { FormDataRegisterprops, ModalSignInProps } from "../../../../../interfaces/interfaces";
import NameInputRegister from "./components/NameInputRegister";
import EmailInputRegister from "./components/EmailInputRegister";
import PasswordInputRegister from "./components/PasswordInputRegister";
import ConfirmPasswordInputRegister from "./components/ConfirmPasswordInputRegister";
import CpfInputRegister from "./components/CpfInputRegister";
import PhoneInputRegister from "./components/PhoneInputRegister";

const ModalRegister = ({ open, toggleModalLogin, toggleModalRegister }: ModalSignInProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataRegisterprops>()
  const { mode } = useThemeMode();
  const { sm } = useMediaQueryAdapter();

  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const colors = tokens(mode);

  const handleReplaceModal = () => {
    toggleModalRegister();
    toggleModalLogin();
  };

  const onSubmit = async (data: FormDataRegisterprops) => {
    handleOnSubmit({ data: data, setIsLoading: setIsLoading, toggleModalRegister: toggleModalRegister })
  }

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
        onClose={toggleModalRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Grid container sx={style} direction="column" gap={2}>
          <Grid item display="flex" justifyContent="center">
            <Typography variant="h6" sx={{ color: colors.grey[100] }}>
              Criar sua Conta
            </Typography>
          </Grid>
          <Grid item>
            <NameInputRegister register={register} errors={errors} />
          </Grid>
          <Grid item>
            <EmailInputRegister register={register} errors={errors} />
          </Grid>
          <Grid item >
            <PasswordInputRegister register={register} errors={errors} />
          </Grid>
          <Grid item >
            <ConfirmPasswordInputRegister register={register} errors={errors} />
          </Grid>
          <Grid item>
            <Box display='flex' width='100%' gap={1}>
              <PhoneInputRegister register={register} errors={errors} />
              <CpfInputRegister register={register} errors={errors} />
            </Box>
          </Grid>
          <Grid item mt={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: colors.grey[100] }}
              onClick={handleSubmit(onSubmit)}
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
                onClick={handleReplaceModal}
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