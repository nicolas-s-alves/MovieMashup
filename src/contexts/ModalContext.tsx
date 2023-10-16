import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalContextProps {
  modalData: {
    open: boolean;
    title?: string;
    content?: string;
  };
  openModal: (payload: { title: string; content: string }) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  modalData: {
    open: false,
    title: '',
    content: '',
  },
  openModal: (payload: { title: string; content: string }) => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalData, setModalData] = useState({ open: false });

  const openModal = (payload: { title: string; content: string }) =>
    setModalData({ ...payload, open: true });
  const closeModal = () => setModalData({ ...modalData, open: false });

  return (
    <ModalContext.Provider value={{ modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  return useContext(ModalContext);
};

export { useModalContext, ModalProvider };
