import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase } from '@mui/material';

const SearchBox = () => {
  return (
    <Box width='33.33%' height='120px' display="flex" alignItems='center' gap={1}>
      <FacebookIcon sx={{ cursor: 'pointer' }} />
      <InstagramIcon sx={{ cursor: 'pointer' }} />
      <TwitterIcon sx={{ cursor: 'pointer' }} />
      <Box component="form" noValidate autoComplete="off" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}>
        <InputBase
          sx={{ ml: 1, flex: 1, input: { color: 'white' }, borderBottom: '1px solid', borderColor: 'white' }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search google maps' }}
          color="secondary"
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" color="secondary">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchBox;