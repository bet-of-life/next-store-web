import { createTheme, } from "@mui/material";
import { cyan, red } from '@mui/material/colors';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000336',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1a237e',
      dark: '#283593',
      light: '#1a237e',
      contrastText: '#ffffff'
    },
    background: {
      default: '#e6f0ff',
      paper: '#000336'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});