import { Box, Typography } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import { tokens } from "../../themes/theme";

interface DataDetailsProps {
  name: string,
  price: string,
  oldPrice: string,
}

const DataDetails = ({ name, price, oldPrice }: DataDetailsProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box>
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
            3x de R$ {(parseFloat(price) / 3).toFixed(2)} no cartão
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default DataDetails;