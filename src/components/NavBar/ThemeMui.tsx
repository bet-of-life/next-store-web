import { useTheme, IconButton, Box } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { tokens } from "../../themes/theme";

const ThemeMui = () => {
  const { mode, toggleTheme } = useThemeMode()
  const colors = tokens(mode)
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <IconButton onClick={toggleTheme} sx={{ color: colors.grey[100] }}>
        {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
      </IconButton>
    </Box>
  );
}

export default ThemeMui;