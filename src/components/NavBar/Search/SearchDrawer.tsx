import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase } from '@mui/material';

const SearchDrawer = () => {
  return (
    <Box display="flex" gap={1} height={120} justifyContent='center' alignItems='center'>
      <Box component="form" noValidate autoComplete="off" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150 }}>
        <InputBase
          sx={{ ml: 1, flex: 1, input: { color: 'white' }, borderBottom: '1px solid', borderColor: 'white' }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search google maps' }}
          color="secondary"
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" color="secondary">
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchDrawer;