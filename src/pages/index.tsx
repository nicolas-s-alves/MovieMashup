import { Home } from '@/app/Home';
import MainLayout from './layouts/MainLayout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Movie Mashup</title>
      </Head>
      <Home />
    </>
  );
};

HomePage.getLayout = MainLayout;

export default HomePage;
