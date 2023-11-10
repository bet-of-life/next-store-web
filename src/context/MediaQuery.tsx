import { createContext } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'

interface MediaQueryContextProps {
  sm: boolean, // 600px
  md: boolean, // 900px
  lg: boolean, // 1200px
  xl: boolean  // 1536px
}

interface MediaQueryProviderProps {
  children: React.ReactNode
}

const MediaQueryContext = createContext({} as MediaQueryContextProps)

export const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  const theme = useTheme()

  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme.breakpoints.down('xl'))

  return (
    <MediaQueryContext.Provider value={{ sm, md, lg, xl }}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export default MediaQueryContext;