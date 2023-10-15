import { MovieResult } from "@/common/resources/api/movie-lists/types";
import { CalendarDaysIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";

type MovieCardProps = {
  movie: MovieResult;
  footerChildren: ReactNode;
}


export const MovieCard = ({ movie, footerChildren, }: MovieCardProps) => {
  return (
    <div className='flex flex-col flex-shrink-0 shadow-md w-[calc(14rem)] rounded'>
      <div className='relative flex justify-center'>
        <span className='absolute shadow-md rounded-full p-2 dark:bg-slate-700 bg-white text-xs -top-4 font-semibold text-center'>
          {movie.title}
        </span>
      </div>
      <div className='h-[calc(20rem)]'>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} className='w-full h-full' />
      </div>
      <div className='flex relative'>
        <div className='gap-1 absolute rounded-full dark:bg-slate-700 bg-white shadow font-semibold p-2 w-auto flex justify-center items-center -top-5 -left-1'>
          <CalendarDaysIcon className="h-4 w-4 text-blue-500" />

          <span className=' text-xs'>
            {new Date(movie.release_date).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <div className='gap-1 absolute rounded-full dark:bg-slate-700 bg-white shadow font-semibold p-2 w-auto h-8 flex justify-center items-center -top-5 -right-1'>
          <StarIcon className="h-4 w-4 text-amber-500" />

          <span className='text-xs'>
            {movie.vote_average}
          </span>
        </div>
      </div>
      <div className='p-4 flex justify-center items-center dark:bg-slate-700 bg-white'>
        {footerChildren}
      </div>
    </div>
  )
}
