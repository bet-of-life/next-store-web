import { Box, Button, Typography } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import useModal from '../../../hooks/useModal';

const SignInBox = () => {
  const { toggleModalLogin, toggleModalRegister } = useModal()

  return (
    <>
      <Box height='100%' display='flex' justifyContent='end' alignItems='center' gap={1} flexDirection='row' px='35px'>
        <Button sx={{ color: 'white' }} onClick={toggleModalLogin}>
          <PermIdentityIcon sx={{ mb: '2px', mr: '6px' }} />
          <Typography textTransform='capitalize'>Entrar</Typography>
        </Button>
        |
        <Button sx={{ color: 'white' }} onClick={toggleModalRegister}>
          <Typography textTransform='capitalize'>Criar conta</Typography>
        </Button>
      </Box>
    </>
  );
}

export default SignInBox;