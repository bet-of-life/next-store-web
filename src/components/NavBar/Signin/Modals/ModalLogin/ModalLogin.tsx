import { ChangeEvent, useContext, useState } from 'react';
import { Modal, Typography, Grid, TextField, Button, IconButton, Link, Box } from '@mui/material'
import useThemeMode from '../../../../../hooks/useThemeMode'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import { tokens } from '../../../../../themes/theme';
import { AuthContext } from '../../../../../context/AuthContenxt';
import useModal from '../../../../../hooks/useModal';
import { validarEmail } from '../../../../../utils/validateEmail';

interface ModalLoginProps {
  open: boolean
  handleClose: () => void
}

interface UserErrorState {
  errorEmail: boolean;
  errorPassword: boolean;
  errorMessage: string;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ open, handleClose }) => {
  const { mode } = useThemeMode()
  const { sm } = useMediaQuery()
  const { singIn, user } = useContext(AuthContext);
  const { toggleModalLogin, toggleModalRegister } = useModal()

  const [showPassword, setShowPassword] = useState(false);
  const [errorUser, setErrorUser] = useState<UserErrorState>({
    errorEmail: false,
    errorPassword: false,
    errorMessage: '',
  })
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  })

  const colors = tokens(mode)


  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorUser({
      ...errorUser,
      errorEmail: false
    })
    e.preventDefault()
    setUserLogin({ ...userLogin, email: e.target.value })
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorUser({
      ...errorUser,
      errorPassword: false
    })
    e.preventDefault()
    setUserLogin({ ...userLogin, password: e.target.value })
  }

  const handleSubmit = () => {
    if (!userLogin.email && !userLogin.password) {
      setErrorUser({
        errorEmail: true,
        errorPassword: true,
        errorMessage: 'Por favor, preencha os campos!'
      })
    } else if (!userLogin.email) {
      setErrorUser({
        errorEmail: true,
        errorPassword: false,
        errorMessage: 'Por favor, insira um e-mail!'
      })
    } else if (!userLogin.password) {
      setErrorUser({
        errorEmail: false,
        errorPassword: true,
        errorMessage: 'Por favor, insira uma senha!'
      })
    } else {
      if (!validarEmail(userLogin.email)) {
        setErrorUser({
          errorEmail: true,
          errorPassword: false,
          errorMessage: 'Por favor, insira um e-mail válido!'
        })
      } else {
        singIn({ email: userLogin.email, password: userLogin.password })
      }
    }
  }

  const handleCloseModal = () => {
    setErrorUser({ ...errorUser, errorEmail: false, errorPassword: false })
    handleClose()
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
  const error = errorUser as { errorEmail: boolean; errorPassword: boolean, errorMessage: string };

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Grid container sx={style} direction='column' gap={1}>
          <Grid item display='flex' justifyContent='center'>
            <Typography variant='h6' sx={{ color: colors.grey[100] }}>Entre com sua Conta</Typography>
          </Grid>
          <Grid item container direction='row'>
            <TextField
              id="outlined-basic"
              label="Email"
              variant='filled'
              autoFocus
              required
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[800] } }}
              fullWidth
              onChange={handleChangeEmail}
              error={error.errorEmail}
              helperText={error.errorEmail && error.errorMessage}
            />
          </Grid>
          <Grid container item direction='row' >
            <TextField
              id="outlined-basic1"
              label="Senha"
              variant='filled'
              required
              type={showPassword ? 'text' : 'password'}
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[800] } }}
              fullWidth
              onChange={handleChangePassword}
              error={error.errorPassword}
              helperText={error.errorPassword && error.errorMessage}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ ml: '-40px', mt: '7px', color: colors.grey[100] }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
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
              onClick={handleSubmit}
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