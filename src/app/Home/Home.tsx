import {
  MoonIcon,
  SunIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  useGetNowPlayingMovieList,
  useGetPopularMovieList,
  useGetTopRatedMovieList,
  useGetUpcomingMovieList,
} from '@/common/resources/api/movie-lists/hooks';
import { Button } from '@/components/ui/Button';
import { MovieList } from '@/components/ui/MovieList';
import { Pagination } from '@/components/ui/Pagination';

export const Home = () => {
  const { theme, setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState<string | undefined>(undefined);

  const [nowPlayingPage, setNowPlayingPage] = useState<number>(1);
  const [popularPage, setPopularPage] = useState<number>(1);
  const [topRatedPage, setTopRatedPage] = useState<number>(1);
  const [upcomingPage, setUpcomingPage] = useState<number>(1);

  const { data: nowPlayingMovieListData, isLoading: isNowPlayingLoading } =
    useGetNowPlayingMovieList(nowPlayingPage);
  const { data: popularMovieListData, isLoading: isPopularLoading } =
    useGetPopularMovieList(popularPage);
  const { data: topRatedMovieListData, isLoading: isTopRatedLoading } =
    useGetTopRatedMovieList(topRatedPage);
  const { data: upcomingMovieListData, isLoading: isUpcomingLoading } =
    useGetUpcomingMovieList(upcomingPage);

  useEffect(() => {
    setActiveTheme(theme);
  }, [theme]);

  const installPWA = () => {
    console.log('Pop install banner');

    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('Install Movie Mashup', {
        body: 'Tap here to install the app',
        icon: '/icon-192x192.png',
        vibrate: [200, 100, 200],
        tag: 'install-notification',
        actions: [
          {
            action: 'install',
            title: 'Install',
          },
        ],
      });
    });
  };

  return (
    <main className="flex flex-col gap-8 lg:gap-6">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">Welcome!</span>

        <div className="flex gap-4">
          <Button onClick={installPWA} type="button">
            Install
          </Button>
          {activeTheme && (
            <Button
              type="button"
              onClick={() =>
                setTheme(activeTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {activeTheme === 'dark' ? (
                <MoonIcon className="w-4" />
              ) : activeTheme === 'light' ? (
                <SunIcon className="w-4" />
              ) : (
                <QuestionMarkCircleIcon className="w-4" />
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold lg:text-base">Now Playing</span>
        <Pagination
          page={nowPlayingPage}
          totalPages={nowPlayingMovieListData?.total_pages}
          backPage={() => setNowPlayingPage(nowPlayingPage - 1)}
          nextPage={() => setNowPlayingPage(nowPlayingPage + 1)}
        />
      </div>
      <MovieList
        movies={nowPlayingMovieListData}
        isLoading={isNowPlayingLoading}
      />

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold lg:text-base">Popular</span>
        <Pagination
          page={popularPage}
          totalPages={popularMovieListData?.total_pages}
          backPage={() => setPopularPage(popularPage - 1)}
          nextPage={() => setPopularPage(popularPage + 1)}
        />
      </div>
      <MovieList movies={popularMovieListData} isLoading={isPopularLoading} />

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold lg:text-base">Top Rated</span>
        <Pagination
          page={topRatedPage}
          totalPages={topRatedMovieListData?.total_pages}
          backPage={() => setTopRatedPage(topRatedPage - 1)}
          nextPage={() => setTopRatedPage(topRatedPage + 1)}
        />
      </div>
      <MovieList movies={topRatedMovieListData} isLoading={isTopRatedLoading} />

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold lg:text-base"> Upcoming</span>
        <Pagination
          page={upcomingPage}
          totalPages={upcomingMovieListData?.total_pages}
          backPage={() => setUpcomingPage(upcomingPage - 1)}
          nextPage={() => setUpcomingPage(upcomingPage + 1)}
        />
      </div>
      <MovieList movies={upcomingMovieListData} isLoading={isUpcomingLoading} />
    </main>
  );
};
