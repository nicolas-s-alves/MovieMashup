import { useGetNowPlayingMovieList, useGetPopularMovieList, useGetTopRatedMovieList, useGetUpcomingMovieList } from '@/common/resources/api/movie-lists/hooks'
import { MovieResult } from '@/common/resources/api/movie-lists/types';
import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/Button';
import { MovieCard } from '@/components/ui/MovieCard';
import { useModalContext } from '@/contexts/ModalContext';

export const Home = () => {

  const { data: nowPlayingMovieListData, isLoading: isNowPlayingLoading } = useGetNowPlayingMovieList(1);
  const { data: popularMovieListData, isLoading: isPopularLoading } = useGetPopularMovieList(1);
  const { data: topRatedMovieListData, isLoading: isTopRatedLoading } = useGetTopRatedMovieList(1);
  const { data: upcomingMovieListData, isLoading: isUpcomingLoading } = useGetUpcomingMovieList(1);

  const { openModal } = useModalContext();

  const movieCardFooter = useCallback((overview: string) => {
    return (
      <Button type='button' onClick={() => openModal({ title: 'Overview', content: overview })} intent='primary' fill>
        Overview
      </Button>
    )
  }, [])


  return (
    <main className="flex flex-col gap-4">
      <div className='flex flex-col gap-4'>
        <span>Now Playing</span>

        <div className='flex gap-4 overflow-auto'>
          {nowPlayingMovieListData?.results?.map((nowPlayingMovie: MovieResult, index: number) => {
            return <MovieCard key={index} nowPlayingMovie={nowPlayingMovie} footerChildren={movieCardFooter(nowPlayingMovie.overview)} />
          })}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <span>Popular</span>

        <div className='flex gap-4 overflow-auto'>
          {popularMovieListData?.results?.map((popularMovie: MovieResult, index: number) => {
            return <MovieCard key={index} nowPlayingMovie={popularMovie} footerChildren={movieCardFooter(popularMovie.overview)} />
          })}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <span>Top Rated</span>

        <div className='flex gap-4 overflow-auto'>
          {topRatedMovieListData?.results?.map((topRatedMovie: MovieResult, index: number) => {
            return <MovieCard key={index} nowPlayingMovie={topRatedMovie} footerChildren={movieCardFooter(topRatedMovie.overview)} />
          })}
        </div></div>

      <div className='flex flex-col gap-4'>
        <span>Upcoming</span>

        <div className='flex gap-4 overflow-auto'>
          {upcomingMovieListData?.results?.map((upcomingMovie: MovieResult, index: number) => {
            return <MovieCard key={index} nowPlayingMovie={upcomingMovie} footerChildren={movieCardFooter(upcomingMovie.overview)} />
          })}
        </div>
      </div>
    </main>
  )
}

