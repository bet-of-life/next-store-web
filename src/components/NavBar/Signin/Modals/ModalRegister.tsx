import { useState } from 'react';
import { Modal, Typography, Grid, TextField, Button, IconButton } from '@mui/material'
import useThemeMode from '../../../../hooks/useThemeMode'
import PersonIcon from '@mui/icons-material/Person';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { tokens } from '../../../../themes/theme';

interface ModalRegisterProps {
  open: boolean
  handleClose: () => void
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ open, handleClose }) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const { sm } = useMediaQuery()

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sm ? 330 : 400,
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
        <Grid container sx={style} direction='column' gap={2}>
          <Grid item display='flex' justifyContent='center'>
            <Typography variant='h6' sx={{ color: colors.grey[100] }}>Register</Typography>
          </Grid>
          <Grid container item direction='row'>
            <TextField
              id="outlined-basic1"
              label="Usuario"
              variant='filled'
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] } }}
              fullWidth
            />
            <IconButton sx={{ ml: '-40px', mt: '7px' }}>
              <PersonIcon sx={{ color: colors.grey[100] }} />
            </IconButton>
          </Grid>
          <Grid container item direction='row'>
            <TextField
              id="outlined-basic2"
              label="Email"
              variant='filled'
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] }, }}
              fullWidth
            />
            <IconButton sx={{ ml: '-40px', mt: '7px' }}>
              <MailIcon sx={{ color: colors.grey[100] }} />
            </IconButton>
          </Grid>
          <Grid container item direction='row'>
            <TextField
              id="outlined-basic"
              label="Password"
              variant='filled'
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
          <Grid item>
            <Button
              variant='contained'
              fullWidth
              sx={{ bgcolor: colors.grey[100] }}
            >
              <Typography sx={{ color: colors.grey[900] }}>
                Register
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalRegister;