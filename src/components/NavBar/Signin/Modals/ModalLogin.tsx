import { useState } from 'react';
import { Modal, Typography, Grid, TextField, Button, IconButton } from '@mui/material'
import useThemeMode from '../../../../hooks/useThemeMode'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';

interface ModalLoginProps {
  open: boolean
  handleClose: () => void
}

const ModalLogin: React.FC<ModalLoginProps> = ({ open, handleClose }) => {
  const { mode } = useThemeMode()

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
    width: 330,
    bgcolor: mode == 'dark' ? '#171717' : '#000336',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
            <Typography variant='h6' sx={{ color: 'white' }}>Login</Typography>
          </Grid>
          <Grid item direction='row'>
            <TextField
              id="outlined-basic"
              label="Email"
              variant='filled'
              autoFocus
              InputLabelProps={{ style: { color: '#fff' } }}
              inputProps={{ style: { color: '#fff', backgroundColor: mode == 'dark' ? '#171717' : '#000336' } }}
              fullWidth
            />
            <IconButton sx={{ ml: '-40px', mt: '7px' }}>
              <MailIcon sx={{ color: 'white' }} />
            </IconButton>
          </Grid>
          <Grid item direction='row'>
            <TextField
              id="outlined-basic1"
              label="Password"
              variant='filled'
              type={showPassword ? 'text' : 'password'}
              InputLabelProps={{ style: { color: '#fff' } }}
              inputProps={{
                style: { color: '#fff', backgroundColor: mode == 'dark' ? '#171717' : '#000336' },
              }}
              fullWidth
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ ml: '-40px', mt: '7px', color: 'white' }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              fullWidth
              sx={{ bgcolor: '#1a237e', mt: '10px' }}
            >
              <Typography>
                Login
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalLogin;