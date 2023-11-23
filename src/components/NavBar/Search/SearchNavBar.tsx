import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, TextFieldVariants } from '@mui/material';
import useThemeMode from '../../../hooks/useThemeMode';
import useMediaQuery from '../../../hooks/useMediaQuery';
import SocialIcons from '../../Footer/SocialIcons';

interface SearchNavBarprops {
  width: string,
  variant: TextFieldVariants
}

const SearchNavBar: React.FC<SearchNavBarprops> = ({ width, variant }) => {
  const { mode } = useThemeMode()
  const { sm } = useMediaQuery()

  return (
    <Box display="flex" height='100%' justifyContent='center' alignItems='center' sx={{gap:"1rem"}}>
      <SocialIcons />
      <Box  display='flex' width={width}  justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-basic"
          label="Pesquise..."
          variant={variant}
          InputLabelProps={{ style: { color: '#fff' } }}
          inputProps={{
            style: { color: '#fff', backgroundColor: mode == 'dark' ? '#000' : '#000336'},
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