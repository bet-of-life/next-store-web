import { useTheme, IconButton } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeMui = () => {
  const theme = useTheme()
  const { toggleThemeMode } = useThemeMode()
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleThemeMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
    </IconButton>
  );
}

export default ThemeMui;