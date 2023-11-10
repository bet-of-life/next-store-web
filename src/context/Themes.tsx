import { ThemeProvider } from "@mui/material";
import { createContext, useState, useCallback, useMemo } from "react";
import { LightTheme } from "../themes/Light";
import { DarkTheme } from "../themes/Dark";
interface ThemesContextProps {
  mode: 'light' | 'dark',
  toggleTheme: () => void
}
interface ThemeModeProviderProps {
  children: React.ReactNode
}

const ThemesContext = createContext({} as ThemesContextProps)

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if (mode === 'light') return LightTheme;

    return DarkTheme

  }, [mode])

  return (
    <ThemesContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  )
}

export default ThemesContext;