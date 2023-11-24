import { useState } from 'react';
import { Modal, Typography, Grid, TextField, Button, IconButton, Link } from '@mui/material'
import useThemeMode from '../../../../hooks/useThemeMode'
import InputMask from 'react-input-mask';
import PersonIcon from '@mui/icons-material/Person';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { tokens } from '../../../../themes/theme';
import useModal from '../../../../hooks/useModal';

interface ModalRegisterProps {
  open: boolean
  handleClose: () => void
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ open, handleClose }) => {
  const { mode } = useThemeMode()
  const { sm } = useMediaQuery()
  const { toggleModalLogin, toggleModalRegister } = useModal()
  const [showPassword, setShowPassword] = useState(false);
  const colors = tokens(mode)


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClodeModal = () => {
    toggleModalRegister()
    toggleModalLogin()
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sm ? 330 : 450,
    bgcolor: colors.black[900],
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
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
        <Grid container sx={style} direction='column' gap={1}>
          <Grid item display='flex' justifyContent='center'>
            <Typography variant='h6' sx={{ color: colors.grey[100] }}>Criar sua  Conta</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              autoFocus
              required
              label="Usuario"
              variant='filled'
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] } }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic1"
              label="Email"
              variant='filled'
              required
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] }, }}
              fullWidth
            />
          </Grid>
          <Grid container item direction='row'>
            <TextField
              id="outlined-basic2"
              label="Password"
              variant='filled'
              required
              type={showPassword ? 'text' : 'password'}
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] } }}
              fullWidth
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
          <Grid container item direction='row' mt={1} spacing={1}>
            <Grid item xs={6}>
              <InputMask mask="(99) 99999-9999" alwaysShowMask>
                {() => (
                  <TextField
                    id="outlined-basic3"
                    label="Numero de telefone"
                    variant='outlined'
                    required
                    InputLabelProps={{ style: { color: colors.grey[100] } }}
                    inputProps={{ style: { backgroundColor: colors.black[900] } }}
                    fullWidth
                    focused={false}
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={6}>
              <InputMask mask="999-999-999-99" maskChar="_" alwaysShowMask>
                {() => (
                  <TextField
                    id="outlined-basic4"
                    label="CPF"
                    variant='outlined'
                    required
                    InputLabelProps={{ style: { color: colors.grey[100] } }}
                    inputProps={{ style: { backgroundColor: colors.black[900] }, }}
                    fullWidth
                  />
                )}
              </InputMask>
            </Grid>
          </Grid>
          <Grid item mt={2}>
            <Button
              variant='contained'
              fullWidth
              sx={{ bgcolor: colors.grey[100] }}
            >
              <Typography sx={{ color: colors.grey[900], fontWeight: 'bold' }}>
                Criar conta
              </Typography>
            </Button>
          </Grid>
          <Grid item display='flex' justifyContent='center' alignItems='center'>
            <Typography mt={2}>
              <Link onClick={handleClodeModal} color={colors.grey[100]} sx={{ cursor: 'pointer' }}>
                Já possui conta ?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalRegister;