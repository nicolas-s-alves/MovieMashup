import { api } from "..";
import { MovieData } from '@/common/resources/api/movie-lists/types';

export const MovieListsApi = {
    async getNowPlaying(page = 1, language = 'en-US') {
        const params: { page: number, language: string } = {
            page,
            language
        };

        const { data } = await api.get<MovieData>('/3/movie/now_playing?language=en-US', { params });

        return data;
    },
}  