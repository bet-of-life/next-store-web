import { Box, useTheme } from "@mui/material";
import NavBar from "./NavBar/NavBar";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <Box>
      <NavBar />
      <Box>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;