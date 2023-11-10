import { useTheme, IconButton, Box } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeMui = () => {
  const { mode, toggleTheme } = useThemeMode()
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
      </IconButton>
    </Box>
  );
}

export default ThemeMui;