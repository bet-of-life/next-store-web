import { Box, Typography } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const SignInBox = () => {
  return (
    <Box display='flex' gap={2} justifyContent='end' alignItems='center' width='33.33%' height='100px' marginRight={7}>
      <Box display='flex' gap={1} alignItems='center' sx={{ cursor: 'pointer' }}>
        <PermIdentityIcon sx={{ marginBottom: '2px' }} />
        <Typography variant="subtitle2" sx={{ '&:hover': { fontWeight: 'bold' } }}>Entrar</Typography>
      </Box>|
      <Typography variant="subtitle2" sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Criar conta</Typography>
      <ShoppingCartCheckoutIcon sx={{ cursor: 'pointer' }} fontSize="large" />
    </Box>
  );
}

export default SignInBox;