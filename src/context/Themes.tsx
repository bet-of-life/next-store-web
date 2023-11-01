import { ThemeProvider, createTheme, } from "@mui/material";
import { Roboto } from 'next/font/google';
import { createContext, useMemo, useState } from "react";
import { red } from '@mui/material/colors';

const Themes = createContext({ toggleThemeMode: () => { } })

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


interface ThemeModeProps {
  children: React.ReactNode
}

export const ThemeModeProvider = ({ children }: ThemeModeProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(() => ({
    toggleThemeMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    },
  }), [],)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#fff',
      },
      error: {
        main: red.A400,
      },
      mode: mode,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <Themes.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Themes.Provider>
  )
}

export default Themes;