import { Box, Button, Typography, useTheme } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import useModal from '../../../hooks/useModal';
import { tokens } from "../../../themes/theme";

const SignInBox = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { toggleModalLogin, toggleModalRegister } = useModal()

  return (
    <>
      <Box height='100%' display='flex' justifyContent='end' alignItems='center' gap={1} flexDirection='row' px='35px'>
        <Button onClick={toggleModalLogin} sx={{ color: 'white' }}>
          <PermIdentityIcon sx={{ mb: '2px', mr: '6px' }} />
          <Typography textTransform='capitalize' >Entrar</Typography>
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