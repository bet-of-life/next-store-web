import { Box, Typography } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SigninSizeSm from "./SigninSizeSm";
import useMediaQuery from "../../../hooks/useMediaQuery";

const SignInBox = () => {
  const { sm } = useMediaQuery()

  return (
    <Box height={80} display='flex' justifyContent='center' alignItems='center' gap={2}>
      {!sm &&
        <>
          <Box display='flex' gap={1} alignItems='center' sx={{ cursor: 'pointer' }}>
            <PermIdentityIcon sx={{ marginBottom: '2px' }} />
            <Typography variant="subtitle2" sx={{ '&:hover': { fontWeight: 'bold' } }}>Entrar</Typography>
          </Box>|
          <Typography variant="subtitle2" sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Criar conta</Typography>
        </>
      }
      {sm &&
        <Box display='flex' gap={1} justifyContent='center' alignItems='center'>
          <SigninSizeSm />
          <ShoppingCartCheckoutIcon sx={{ cursor: 'pointer' }} fontSize="medium" />
        </Box>
      }
    </Box>
  );
}

export default SignInBox;