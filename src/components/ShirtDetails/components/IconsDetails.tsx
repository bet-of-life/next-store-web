import { Box, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";
import { tokens } from "../../../themes/theme";
import useThemeMode from "../../../hooks/useThemeMode";

const IconsDetails = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const handleClick = (url: string) => {
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
    cursor: 'pointer',
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
        <FacebookIcon fontSize="small" sx={{ color: colors.grey[100] }} />
      </CustomBox>
      <CustomBox>
        <InstagramIcon fontSize="small"
          onClick={() =>
            handleClick("https://www.instagram.com/usevetter/")
          }
          sx={{ cursor: "pointer", color: colors.grey[100] }}
        />
      </CustomBox>
      <CustomBox>
        <FaTiktok
          cursor='pointer'
          onClick={() =>
            handleClick('https://www.tiktok.com/@vetterstreet?_t=8hiEAYGzmGD&_r=1')
          } />
      </CustomBox>
    </Box>
  );
};

export default IconsDetails;