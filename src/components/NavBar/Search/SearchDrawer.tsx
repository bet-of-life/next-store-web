import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField } from '@mui/material';

const SearchDrawer = () => {
  return (
    <Box display="flex" width='100%' height='100%' justifyContent='center' alignItems='center'>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        InputLabelProps={{ style: { color: '#fff' } }}
        inputProps={{ style: { color: '#fff' } }}
      />
      <IconButton type="button" sx={{ ml: '-40px' }} aria-label="search">
        <SearchIcon sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
}

export default SearchDrawer;