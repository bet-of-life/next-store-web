import { createTheme } from "@mui/material";
import { cyan, red } from '@mui/material/colors';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
      light: '#111111',
      dark: '#212121',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#212121',
      dark: '#424242',
      light: '#212121',
      contrastText: '#ffffff'
    },
    background: {
      default: '#202124',
      paper: '#000',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});