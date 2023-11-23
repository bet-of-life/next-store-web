import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { tokens } from "../../themes/theme";
import useThemeMode from "../../hooks/useThemeMode";

const SocialIcons = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const handleInstagramClick = (url: string) => {
    window.open(url, "_blank");
  }
  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <FacebookIcon sx={{ cursor: "pointer", color: colors.grey[100] }} />

      <InstagramIcon
        onClick={() =>
          handleInstagramClick("https://www.instagram.com/usevetter/")
        }
        sx={{ cursor: "pointer", color: colors.grey[100] }}
      />

      <TwitterIcon sx={{ cursor: "pointer", color: colors.grey[100] }} />
    </Box>
  );
};

export default SocialIcons;
