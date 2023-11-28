import { Box, Button, Typography } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import { tokens } from "../../themes/theme";
import RadioGroupSizes from "./RadioGroupSizes";
import SocialIcons from "../NavBar/SocialIcons";

interface DataDetailsProps {
  name: string,
  price: string,
  oldPrice: string,
}

const DataDetails = ({ name, price, oldPrice }: DataDetailsProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box bgcolor={colors.grey[900]} p={2} borderRadius={3}>
      <Typography variant='h5'>
        {name}
      </Typography>
      <Box bgcolor={colors.grey[800]} mt={4} py={3} px={2} sx={{ borderRadius: 2 }}>
        <Typography sx={{ textDecoration: "line-through" }}>
          R$ {oldPrice}
        </Typography>
        <Box display='flex' gap={1} alignItems='center'>
          <Typography variant="h6" fontWeight='bold'>
            R$ {price}
          </Typography>
          <Typography variant="body2">
            3x de R$ {(parseFloat(price) / 3).toFixed(2)} sem juros no cartão
          </Typography>
        </Box>
      </Box>
      <Box mt={5}>
        <RadioGroupSizes />
      </Box>
      <Button
        variant="contained"
        sx={{ bgcolor: colors.grey[100], mt: '40px' }}
        fullWidth
      >
        <Typography sx={{ color: colors.grey[800], fontWeight: 'bold' }}>
          Comprar
        </Typography>
      </Button>
      <Box display='flex' gap={1} mt={5.5} justifyContent='center' alignItems='center' flexDirection='column'>
        <Typography>
          Compartilhe
        </Typography>
        <SocialIcons />
      </Box>
    </Box>
  );
}

export default DataDetails;