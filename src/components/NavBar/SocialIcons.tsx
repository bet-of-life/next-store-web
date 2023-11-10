import { Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialIcons = () => {
  return (
    <Box display='flex' gap={1} justifyContent='center' alignItems='center' height={80}>
      <FacebookIcon sx={{ cursor: 'pointer' }} />
      <InstagramIcon sx={{ cursor: 'pointer' }} />
      <TwitterIcon sx={{ cursor: 'pointer' }} />
    </Box>
  );
}

export default SocialIcons;