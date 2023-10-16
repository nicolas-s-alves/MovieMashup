import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid';
import React, { ReactNode } from 'react';

import { MovieResult } from '@/common/resources/api/movie-lists/types';

type MovieCardProps = {
  movie: MovieResult;
  footerChildren: ReactNode;
};

export const MovieCard = ({ movie, footerChildren }: MovieCardProps) => {
  return (
    <div className="flex w-[calc(14rem)] flex-shrink-0 flex-col rounded shadow-md">
      <div className="relative flex justify-center">
        <span className="absolute -top-4 rounded-full bg-white p-2 text-center text-xs font-semibold shadow-md dark:bg-slate-700">
          {movie.title}
        </span>
      </div>
      <div className="h-[calc(20rem)]">
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full"
        />
      </div>
      <div className="relative flex">
        <div className="absolute -left-1 -top-5 flex w-auto items-center justify-center gap-1 rounded-full bg-white p-2 font-semibold shadow dark:bg-slate-700">
          <CalendarDaysIcon className="h-4 w-4 text-blue-500" />

          <span className="text-xs">
            {new Date(movie.release_date).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <div className="absolute -right-1 -top-5 flex h-8 w-auto items-center justify-center gap-1 rounded-full bg-white p-2 font-semibold shadow dark:bg-slate-700">
          <StarIcon className="h-4 w-4 text-amber-500" />

          <span className="text-xs">{movie.vote_average}</span>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white p-4 dark:bg-slate-700">
        {footerChildren}
      </div>
    </div>
  );
};
