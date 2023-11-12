import type { ReactElement } from 'react';
import { Details } from '@/app/Details';
import Layout from './layout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { MovieResult } from '@/common/resources/api/movie-lists/types';

interface DetailsProps {
  movieData: MovieResult;
}

const DetailsPage: NextPageWithLayout<DetailsProps> = ({
  movieData,
}: DetailsProps) => {
  return (
    <>
      <Head>
        <title>Movie Mashup</title>
      </Head>
      <Details movieData={movieData} />
    </>
  );
};

DetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params } = context;
  const movieId = params?.id;

  const { data: movieData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
      },
    },
  );

  return { props: { movieData } };
};

export default DetailsPage;
