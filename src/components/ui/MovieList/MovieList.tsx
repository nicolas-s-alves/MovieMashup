import { MovieData, MovieResult } from "@/common/resources/api/movie-lists/types"
import { MovieCard } from "../MovieCard"
import { useModalContext } from "@/contexts/ModalContext";
import { useCallback } from "react";
import { Button } from "../Button";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";

interface MovieListProps {
  movies: MovieData | undefined;
  isLoading: boolean;
}

export const MovieList = ({ movies, isLoading }: MovieListProps) => {
  if (isLoading) {
    return (
      <div className="flex gap-4 justify-center items-center">
        <span>Carregando...</span>
        <Cog8ToothIcon className="w-6 animate-spin" />
      </div>
    )
  }


  const { openModal } = useModalContext();

  const movieCardFooter = useCallback((overview: string) => {
    return (
      <Button type='button' onClick={() => openModal({ title: 'Overview', content: overview })} intent='primary' fill>
        Overview
      </Button>
    )
  }, [])


  return (
    <div className='flex gap-4 overflow-auto p-4 -m-4'>
      {movies?.results?.map((movie: MovieResult, index: number) => {
        return <MovieCard key={index} movie={movie} footerChildren={movieCardFooter(movie.overview)} />
      })}
    </div>
  )
}