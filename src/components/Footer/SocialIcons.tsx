import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/navigation";

const SocialIcons = () => {
  const router = useRouter();
  const handleInstagramClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <FacebookIcon sx={{ cursor: "pointer" }} />

      <InstagramIcon
        onClick={() =>
          handleInstagramClick("https://www.instagram.com/usevetter/")
        }
        sx={{ cursor: "pointer" }}
      />

      <TwitterIcon sx={{ cursor: "pointer" }} />
    </Box>
  );
};

export default SocialIcons;
