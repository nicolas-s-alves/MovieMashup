import { api } from "..";
import { MovieData } from '@/common/resources/api/movie-lists/types';
import { MovieListEnum } from "@/enums/movie-list.enum";

export const MovieListsApi = {
  async getMovieList(movieList: MovieListEnum, page = 1, language = 'en-US') {
    const params: { page: number, language: string } = {
      page,
      language
    };

    const { data } = await api.get<MovieData>(`/3/movie/${movieList}`, { params });

    return data;
  },
}   