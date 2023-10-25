import type { ReactElement } from 'react';
import { Home } from '@/app/Home';
import Layout from './layout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Movie Mashup</title>
      </Head>
      <Home />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
