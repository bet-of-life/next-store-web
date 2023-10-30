import { Box, useTheme } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <Box width='100%' height='100vh'>
      <NavBar />
      <Box marginTop='160px'>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;