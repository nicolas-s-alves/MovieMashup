import { useGetNowPlayingMovies } from '@/common/resources/api/movie-lists/hooks'
import { MovieResult } from '@/common/resources/api/movie-lists/types';
import Image from 'next/image';

const Home = () => {
  const { data: nowPlayingMoviesData, isLoading } = useGetNowPlayingMovies();

  if (isLoading) {
    return <div>Carregando</div>
  }

  return (
    <main className="flex flex-col px-12">
      {/* {JSON.stringify(nowPlayingMoviesData)} */}

      {nowPlayingMoviesData?.dates.minimum} - {nowPlayingMoviesData?.dates.maximum}

      <div className='flex gap-4 overflow-auto'>
        {nowPlayingMoviesData?.results?.map((nowPlayingMovie: MovieResult, index: number) => {
          return (
            <div key={index} className='flex flex-col flex-shrink-0'>
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${nowPlayingMovie.poster_path}`} alt={nowPlayingMovie.title} className='w-auto' />
              <span>{nowPlayingMovie.title}</span>
              <span>{new Date(nowPlayingMovie.release_date).toLocaleDateString('pt-BR')}</span>
              <span>Nota: {nowPlayingMovie.vote_average}</span>
            </div>)
        })}
      </div>
    </main>
  )
}

export default Home;
