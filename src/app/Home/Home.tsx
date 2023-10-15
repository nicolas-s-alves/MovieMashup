import { useGetNowPlayingMovieList, useGetPopularMovieList, useGetTopRatedMovieList, useGetUpcomingMovieList } from '@/common/resources/api/movie-lists/hooks'
import { Button } from '@/components/ui/Button';
import { MovieList } from '@/components/ui/MovieList';
import { Pagination } from '@/components/ui/Pagination';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from "next-themes";
import { useState } from 'react';

export const Home = () => {
  const { theme, setTheme } = useTheme()

  const [nowPlayingPage, setNowPlayingPage] = useState<number>(1)
  const [popularPage, setPopularPage] = useState<number>(1)
  const [topRatedPage, setTopRatedPage] = useState<number>(1)
  const [upcomingPage, setUpcomingPage] = useState<number>(1)

  const { data: nowPlayingMovieListData, isLoading: isNowPlayingLoading } = useGetNowPlayingMovieList(nowPlayingPage);
  const { data: popularMovieListData, isLoading: isPopularLoading } = useGetPopularMovieList(popularPage);
  const { data: topRatedMovieListData, isLoading: isTopRatedLoading } = useGetTopRatedMovieList(topRatedPage);
  const { data: upcomingMovieListData, isLoading: isUpcomingLoading } = useGetUpcomingMovieList(upcomingPage);


  return (
    <main className="flex flex-col gap-8 lg:gap-6">
      <div className='flex justify-between items-center'>
        <span className='font-semibold text-xl'>Welcome!</span>
        <Button type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (<SunIcon className='w-4' />) : (<MoonIcon className='w-4' />)}
        </Button>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-lg lg:text-base font-semibold'>Now Playing</span>
        <Pagination
          page={nowPlayingPage}
          totalPages={nowPlayingMovieListData?.total_pages}
          backPage={() => setNowPlayingPage(nowPlayingPage - 1)}
          nextPage={() => setNowPlayingPage(nowPlayingPage + 1)}
        />
      </div>
      <MovieList movies={nowPlayingMovieListData} isLoading={isNowPlayingLoading} />

      <div className='flex justify-between items-center'>
        <span className='text-lg lg:text-base font-semibold'>Popular</span>
        <Pagination
          page={popularPage}
          totalPages={popularMovieListData?.total_pages}
          backPage={() => setPopularPage(popularPage - 1)}
          nextPage={() => setPopularPage(popularPage + 1)}
        />
      </div>
      <MovieList movies={popularMovieListData} isLoading={isPopularLoading} />

      <div className='flex justify-between items-center'>
        <span className='text-lg lg:text-base font-semibold'>Top Rated</span>
        <Pagination
          page={topRatedPage}
          totalPages={topRatedMovieListData?.total_pages}
          backPage={() => setTopRatedPage(topRatedPage - 1)}
          nextPage={() => setTopRatedPage(topRatedPage + 1)}
        />
      </div>
      <MovieList movies={topRatedMovieListData} isLoading={isTopRatedLoading} />

      <div className='flex justify-between items-center'>
        <span className='text-lg lg:text-base font-semibold'> Upcoming</span>
        <Pagination
          page={upcomingPage}
          totalPages={upcomingMovieListData?.total_pages}
          backPage={() => setUpcomingPage(upcomingPage - 1)}
          nextPage={() => setUpcomingPage(upcomingPage + 1)}
        />
      </div>
      <MovieList movies={upcomingMovieListData} isLoading={isUpcomingLoading} />
    </main>
  )
}

