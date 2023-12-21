import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { tokens } from "../../themes/theme";
import useThemeMode from "../../hooks/useThemeMode";
import { FaTiktok } from "react-icons/fa";
const SocialIcons = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  }
  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="start"
      alignItems="center"
      height="100%"
    >
      <FacebookIcon sx={{ cursor: "pointer", color: colors.grey[100] }} />

      <InstagramIcon
        onClick={() =>
          handleClick("https://www.instagram.com/usevetter/")
        }
        sx={{ cursor: "pointer", color: colors.grey[100] }}
      />

      <FaTiktok
        cursor='pointer'
        onClick={() =>
          handleClick('https://www.tiktok.com/@vetterstreet?_t=8hiEAYGzmGD&_r=1')
        }
      />
    </Box>
  );
};

export default SocialIcons;
