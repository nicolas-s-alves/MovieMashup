import { useContext } from 'react';

import { ModalContext } from '@/contexts/ModalContext';

export function useModal() {
  const modalState = useContext(ModalContext);

  if (!modalState) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }

  return modalState;
}
