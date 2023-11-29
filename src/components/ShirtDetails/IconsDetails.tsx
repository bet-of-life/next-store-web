import { Box, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { tokens } from "../../themes/theme";
import useThemeMode from "../../hooks/useThemeMode";

const IconsDetails = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const handleInstagramClick = (url: string) => {
    window.open(url, "_blank");
  }

  const CustomBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: '1px solid',
    borderRadius: '100px',
    borderColor: colors.grey[500],
    "&:hover": {
      borderColor: 'white'
    }
  }))

  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <CustomBox>
        <FacebookIcon fontSize="small" sx={{ cursor: "pointer", color: colors.grey[100] }} />
      </CustomBox>
      <CustomBox>
        <InstagramIcon fontSize="small"
          onClick={() =>
            handleInstagramClick("https://www.instagram.com/usevetter/")
          }
          sx={{ cursor: "pointer", color: colors.grey[100] }}
        />
      </CustomBox>
      <CustomBox>
        <TwitterIcon fontSize="small" sx={{ cursor: "pointer", color: colors.grey[100] }} />
      </CustomBox>
    </Box>
  );
};

export default IconsDetails;