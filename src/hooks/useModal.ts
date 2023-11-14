import { useContext } from 'react'
import ModalContext from '../context/Modal';

const useModal = () => useContext(ModalContext)

export default useModal;