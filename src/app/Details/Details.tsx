import { MovieResult } from '@/common/resources/api/movie-lists/types';

interface DetailsProps {
  movieData: MovieResult;
}

export const Details = ({ movieData }: DetailsProps) => {
  return (
    <div className="flex flex-col">
      <div
        className="relative h-96 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
        }}
      >
        {/* <img
          src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
          alt=""
          className="-mt-4 mr-auto h-96"
        /> */}
        <span className="absolute left-4 top-4">{movieData.title}</span>
      </div>
    </div>
  );
};
