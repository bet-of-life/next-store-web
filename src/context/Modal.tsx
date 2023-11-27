import { createContext, useState, useCallback } from 'react'
interface ModalContextProps {
  isOpenLogin: boolean
  isOpenRegister: boolean
  toggleModalLogin: () => void
  toggleModalRegister: () => void
}

const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false)
  const [isOpenRegister, setIsOpenRegister] = useState<boolean>(false)

  const toggleModalLogin = useCallback(() => {
    setIsOpenLogin(prev => !prev)
  }, [])

  const toggleModalRegister = useCallback(() => {
    setIsOpenRegister(prev => !prev)
  }, [])

  return (
    <ModalContext.Provider value={{ isOpenLogin, isOpenRegister, toggleModalLogin, toggleModalRegister }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext