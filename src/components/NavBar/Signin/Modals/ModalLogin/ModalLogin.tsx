import { useContext } from 'react';
import { Modal, Typography, Grid, Button, Link } from '@mui/material'
import useThemeMode from '../../../../../hooks/useThemeMode'
import { tokens } from '../../../../../themes/theme';
import { AuthContext } from '../../../../../context/AuthContenxt';
import useMediaQueryAdapter from '../../../../../hooks/useMediaQuery';
import { useForm } from 'react-hook-form';
import { FormDataLoginProps, ModalSignInProps } from '../../../../../interfaces/interfaces';
import PasswordInputLogin from './components/PasswordInputLogin';
import EmailInputLogin from './components/EmailInputLogin';

const ModalLogin = ({ open, toggleModalLogin, toggleModalRegister }: ModalSignInProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataLoginProps>()
  const { mode } = useThemeMode()
  const { sm } = useMediaQueryAdapter()
  const { singIn } = useContext(AuthContext);

  const colors = tokens(mode)

  const onSubmit = async (data: FormDataLoginProps) => {
    await singIn(data)
    toggleModalLogin()
  }

  const handleReplaceModal = () => {
    toggleModalLogin()
    toggleModalRegister()
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sm ? 330 : 450,
    bgcolor: colors.black[800],
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
  };

  return (
    <>
      <Modal
        open={open}
        onClose={toggleModalLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Grid container sx={style} direction='column' gap={1}>
          <Grid item display='flex' justifyContent='center'>
            <Typography variant='h6' sx={{ color: colors.grey[100] }}>Entre com sua Conta</Typography>
          </Grid>

          <Grid item container direction='row'>
            <EmailInputLogin register={register} errors={errors} />
          </Grid>

          <Grid container item direction='row' >
            <PasswordInputLogin register={register} errors={errors} />
          </Grid>

          <Grid item mt={1}>
            <Typography variant='body2'>
              <Link color={colors.grey[100]} sx={{ cursor: 'pointer', underline: 'aways' }}>
                Esqueceu a senha ?
              </Link>
            </Typography>
          </Grid>
          <Grid item mt={2}>
            <Button
              variant='contained'
              fullWidth
              sx={{ bgcolor: colors.grey[100] }}
              onClick={handleSubmit(onSubmit)}
            >
              <Typography sx={{ color: colors.grey[900], fontWeight: 'bold' }}>
                Entrar
              </Typography>
            </Button>
          </Grid>
          <Grid item display='flex' justifyContent='center' alignItems='center'>
            <Typography mt={2} >
              <Link onClick={handleReplaceModal} color={colors.grey[100]} sx={{ cursor: 'pointer' }}>
                Não possui uma conta ?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalLogin;