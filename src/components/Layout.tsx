import { Box } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const route = router.pathname
  
  return (
    <Box width='100%' height='100vh'>
      <NavBar />
      <Box display='flex' width='100%' height='auto'>
        {children}
      </Box>
     {/* {route !== "/shoppingCart/[...params]" && <Footer /> }  */}
     <Footer />
    </Box>
  );
}

export default Layout;