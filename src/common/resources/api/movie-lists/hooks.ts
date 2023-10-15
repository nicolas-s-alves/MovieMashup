import { MovieListsApi } from '@/common/resources/api/movie-lists';
import { LanguageEnum } from '@/enums/language.enum';
import { MovieListEnum } from '@/enums/movie-list.enum';
import { useQuery } from '@tanstack/react-query';

export function useGetNowPlayingMovieList(page?: number) {
  return useQuery({
    queryKey: ['now-playing-movie-list', page],
    queryFn: () => MovieListsApi.getMovieList(MovieListEnum.NOW_PLAYING, page),
    refetchOnWindowFocus: true,
  });
}

export function useGetPopularMovieList(page?: number) {
  return useQuery({
    queryKey: ['popular-movie-list', page],
    queryFn: () => MovieListsApi.getMovieList(MovieListEnum.POPULAR, page),
    refetchOnWindowFocus: true,
  });
}

export function useGetTopRatedMovieList(page?: number) {
  return useQuery({
    queryKey: ['top-rated-movie-list', page],
    queryFn: () => MovieListsApi.getMovieList(MovieListEnum.TOP_RATED, page),
    refetchOnWindowFocus: true,
  });
}

export function useGetUpcomingMovieList(page?: number) {
  return useQuery({
    queryKey: ['upcoming-movie-list', page],
    queryFn: () => MovieListsApi.getMovieList(MovieListEnum.UPCOMING, page),
    refetchOnWindowFocus: true,
  });
}