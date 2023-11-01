import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SigninSizeSm from "./SubMenus/SigninSizeSm";

const SignInBox = () => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  return (
    <Box
      display='flex'
      gap={smDown ? 0 : 2}
      justifyContent='end'
      alignItems='center'
      width={lgDown && smUp ? '300px' : (smDown ? '100px' : '33.3%')}
      marginRight={lgDown ? 2 : 6}
      height='100px'
    >
      {smUp &&
        <>
          <Box display='flex' gap={1} alignItems='center' sx={{ cursor: 'pointer' }}>
            <PermIdentityIcon sx={{ marginBottom: '2px' }} />
            <Typography variant="subtitle2" sx={{ '&:hover': { fontWeight: 'bold' } }}>Entrar</Typography>
          </Box>|
          <Typography variant="subtitle2" sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Criar conta</Typography>
        </>
      }
      {smDown && <SigninSizeSm />}
      <ShoppingCartCheckoutIcon sx={{ cursor: 'pointer' }} fontSize="large" />
    </Box>
  );
}

export default SignInBox;