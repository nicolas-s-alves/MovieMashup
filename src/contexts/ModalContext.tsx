import { createContext, ReactNode, useState } from 'react';

interface ModalContextValue {
  modalData: {
    open: boolean;
    title?: string;
    content?: string;
  };
  openModal: (payload: { title: string; content: string }) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalData, setModalData] = useState({ open: false });

  const openModal = (payload: { title: string; content: string }) =>
    setModalData({ ...payload, open: true });
  const closeModal = () => setModalData({ ...modalData, open: false });

  return (
    <ModalContext.Provider value={{ modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
