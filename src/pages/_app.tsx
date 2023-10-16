import '@/app/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { type NextPage } from 'next';
import { type AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { type ReactElement, type ReactNode } from 'react';

import { queryClient } from '@/common/resources/api';
import { Modal } from '@/components/ui/Modal/Modal';
import { ModalProvider } from '@/contexts/ModalContext';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          {getLayout(<Component {...pageProps} />)}
          <Modal />
        </ModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
