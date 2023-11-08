import { createContext, useContext, useState, useCallback } from 'react'

interface DrawerContextProps {
  isDrawerOpen: boolean,
  toggleDrawerOpen: () => void
}

interface DrawerProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as DrawerContextProps)

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(prev => !prev)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerContext;