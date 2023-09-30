import { MovieListsApi } from '@/common/resources/api/movie-lists';
import { useQuery } from '@tanstack/react-query';

export function useGetNowPlayingMovies(page?: number) {
    return useQuery({
        queryKey: ['now-playing', page],
        queryFn: () => MovieListsApi.getNowPlaying(page),
        refetchOnWindowFocus: true,
    });
}