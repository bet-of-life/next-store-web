import { Box, useTheme } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import useMediaQuery from "../hooks/useMediaQuery";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sm, md } = useMediaQuery()

  return (
    <Box width='100%' height='100vh'>
      <NavBar />
      <Box width='100%' height='auto' marginTop={sm ? '70px' : md ? '80px' : '90px'}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;