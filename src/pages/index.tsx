import Head from 'next/head';

import { Home } from '@/app/Home';

import MainLayout from './layouts/MainLayout';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Movie Mashup</title>
      </Head>
      <Home />;
    </>
  );
};

HomePage.getLayout = MainLayout;

export default HomePage;
