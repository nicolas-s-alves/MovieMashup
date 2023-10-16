import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import { useCallback } from 'react';
import {
  MovieData,
  MovieResult,
} from '@/common/resources/api/movie-lists/types';
import { useModal } from '@/hooks/useModal';
import { Button } from '../Button';
import { MovieCard } from '../MovieCard';
import { MovieCardSkeleton } from '../MovieCardSkeleton';

interface MovieListProps {
  movies: MovieData | undefined;
  isLoading: boolean;
}

export const MovieList = ({ movies, isLoading }: MovieListProps) => {
  const { openModal } = useModal();

  const movieCardFooter = useCallback((overview: string) => {
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
  }, []);

  if (isLoading) {
    return (
      <div className="-m-4 flex gap-4 overflow-auto p-4">
        {Array(20)
          .fill(true)
          .map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
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
