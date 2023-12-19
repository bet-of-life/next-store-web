import { useCallback, useState } from "react";

const useDrawerMode = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(prev => !prev)
  }, [])

  return {
    isDrawerOpen,
    toggleDrawerOpen
  };
}

export default useDrawerMode;