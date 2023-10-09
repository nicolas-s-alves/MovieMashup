import { useGetNowPlayingMovies } from '@/common/resources/api/movie-lists/hooks'
import { MovieResult } from '@/common/resources/api/movie-lists/types';

const Home = () => {
  const { data: nowPlayingMoviesData, isLoading } = useGetNowPlayingMovies();

  if (isLoading) {
    return <div>Carregando</div>
  }

  return (
    <main className="flex flex-col">
      {/* {JSON.stringify(nowPlayingMoviesData)} */}

      {/* {nowPlayingMoviesData?.dates.minimum} - {nowPlayingMoviesData?.dates.maximum} */}

      <div className='flex gap-4 overflow-auto p-4'>
        {nowPlayingMoviesData?.results?.map((nowPlayingMovie: MovieResult, index: number) => {
          return <MovieCard key={index} nowPlayingMovie={nowPlayingMovie} />
        })}
      </div>
    </main>
  )
}

interface MovieCardProps {
  nowPlayingMovie: MovieResult
}

const MovieCard = ({ nowPlayingMovie }: MovieCardProps) => {
  return (
    <div className='flex flex-col flex-shrink-0 shadow-md w-[calc(14rem)] rounded'>
      <div className='relative flex justify-center'>
        <span className='absolute shadow-md rounded-full p-2 bg-white text-xs -top-4 font-semibold'>{nowPlayingMovie.title}</span>
      </div>
      <div className='h-[calc(20rem)]'>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${nowPlayingMovie.poster_path}`} alt={nowPlayingMovie.title} className='w-full h-full' />
      </div>
      <div className='flex relative'>
        <span className='absolute rounded-full bg-white shadow font-semibold p-2 w-auto flex justify-center items-center -top-5 -left-1 text-sm'>
          {new Date(nowPlayingMovie.release_date).toLocaleDateString('pt-BR')}
        </span>
        <span className='absolute rounded-full bg-white shadow font-semibold p-2 w-8 h-8 flex justify-center items-center -top-5 -right-1 text-sm'>
          {nowPlayingMovie.vote_average}
        </span>
      </div>
      <div className='p-4'>
        <span className='text-sm'>
          {nowPlayingMovie.overview.substring(0, 100)}...
        </span>
      </div>
    </div>
  )
}

export default Home;
