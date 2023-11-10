import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField } from '@mui/material';

const SearchNavBar = () => {
  return (
    <Box display="flex" height='100%' justifyContent='center' alignItems='center'>
      <Box display='flex' width='80%' justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="filled"
          InputLabelProps={{ style: { color: '#fff' } }}
          inputProps={{ style: { color: '#fff' } }}
        />
        <IconButton type="button" sx={{ ml: '-40px' }} aria-label="search">
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchNavBar;