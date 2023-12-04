import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, TextFieldVariants } from '@mui/material';
import useThemeMode from '../../../hooks/useThemeMode';
import useMediaQuery from '../../../hooks/useMediaQuery';
import SocialIcons from '../SocialIcons';
import { tokens } from '../../../themes/theme';

interface SearchNavBarprops {
  width: string,
  variant: TextFieldVariants
}

const SearchNavBar: React.FC<SearchNavBarprops> = ({ width, variant }) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const { sm, lg } = useMediaQuery()

  return (
    <Box  display="flex" height='100%' justifyContent='center' alignItems='center' sx={{ gap: "1rem", width:"100%" }}>
      {!lg && <SocialIcons />}
      { <Box display='flex' width={"100%"} justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-basic"
          label="Pesquise..."
          variant={variant}
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          inputProps={{ style: { backgroundColor: colors.black[800], border: "none" } }}
          InputProps={{
            sx: {border:"none"}
          }}
          fullWidth
        />
        <IconButton type="button" sx={{ ml: '-40px' }} aria-label="search">
          <SearchIcon sx={{ color: colors.grey[100] }} />
        </IconButton>

      </Box>}
    </Box>
  );
}

export default SearchNavBar;