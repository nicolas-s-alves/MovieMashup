import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import { useCallback } from 'react';

import {
  MovieData,
  MovieResult,
} from '@/common/resources/api/movie-lists/types';
import { useModal } from '@/hooks/useModal';

import { Button } from '../Button';
import { MovieCard } from '../MovieCard';

interface MovieListProps {
  movies: MovieData | undefined;
  isLoading: boolean;
}

export const MovieList = ({ movies, isLoading }: MovieListProps) => {
  const { openModal } = useModal();

  const movieCardFooter = useCallback(
    (overview: string) => {
      return (
        <Button
          type="button"
          onClick={() => openModal({ title: 'Overview', content: overview })}
          intent="primary"
          fill
        >
          Overview
        </Button>
      );
    },
    [openModal],
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-4">
        <span>Carregando...</span>
        <Cog8ToothIcon className="w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="-m-4 flex gap-4 overflow-auto p-4">
      {movies?.results?.map((movie: MovieResult, index: number) => {
        return (
          <MovieCard
            key={index}
            movie={movie}
            footerChildren={movieCardFooter(movie.overview)}
          />
        );
      })}
    </div>
  );
};
