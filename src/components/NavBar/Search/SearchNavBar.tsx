import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, TextFieldVariants } from '@mui/material';
import useThemeMode from '../../../hooks/useThemeMode';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface SearchNavBarprops {
  width: string,
  variant: TextFieldVariants
}

const SearchNavBar: React.FC<SearchNavBarprops> = ({ width, variant }) => {
  const { mode } = useThemeMode()
  const { sm } = useMediaQuery()

  return (
    <Box display="flex" height='100%' justifyContent='center' alignItems='center'>
      <Box display='flex' width={width} justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant={variant}
          InputLabelProps={{ style: { color: '#fff' } }}
          inputProps={{
            style: { color: '#fff', backgroundColor: mode == 'dark' ? '#171717' : '#000336' },
          }}
          fullWidth
        />
        <IconButton type="button" sx={{ ml: '-40px' }} aria-label="search">
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchNavBar;