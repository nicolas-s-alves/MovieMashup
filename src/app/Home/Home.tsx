import { useGetNowPlayingMovies } from '@/common/resources/api/movie-lists/hooks'
import { MovieResult } from '@/common/resources/api/movie-lists/types';
import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const Home = () => {
  const { data: nowPlayingMoviesData, isLoading } = useGetNowPlayingMovies();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overview, setOverview] = useState<string>('');

  if (isLoading) {
    return <div>Carregando</div>
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(overview: string) {
    setOverview(overview);
    setIsOpen(true)
  }

  return (
    <main className="flex flex-col">
      <div className='flex gap-4 overflow-auto p-4'>
        {nowPlayingMoviesData?.results?.map((nowPlayingMovie: MovieResult, index: number) => {
          return <MovieCard key={index} nowPlayingMovie={nowPlayingMovie} openModal={() => openModal(nowPlayingMovie.overview)} />
        })}
      </div>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Overview
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {overview}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}

interface MovieCardProps {
  nowPlayingMovie: MovieResult
  openModal: () => void;
}

const MovieCard = ({ nowPlayingMovie, openModal }: MovieCardProps) => {
  return (
    <div className='flex flex-col flex-shrink-0 shadow-md w-[calc(14rem)] rounded'>
      <div className='relative flex justify-center'>
        <span className='absolute shadow-md rounded-full p-2 bg-white text-xs -top-4 font-semibold text-center'>
          {nowPlayingMovie.title}
        </span>
      </div>
      <div className='h-[calc(20rem)]'>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${nowPlayingMovie.poster_path}`} alt={nowPlayingMovie.title} className='w-full h-full' />
      </div>
      <div className='flex relative'>
        <div className='gap-1 absolute rounded-full bg-white shadow font-semibold p-2 w-auto flex justify-center items-center -top-5 -left-1'>
          <CalendarDaysIcon className="h-4 w-4 text-blue-500" />

          <span className=' text-xs'>
            {new Date(nowPlayingMovie.release_date).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <div className='gap-1 absolute rounded-full bg-white shadow font-semibold p-2 w-auto h-8 flex justify-center items-center -top-5 -right-1'>
          <StarIcon className="h-4 w-4 text-amber-500" />

          <span className='text-xs'>
            {nowPlayingMovie.vote_average}
          </span>
        </div>
      </div>
      <div className='p-4 flex justify-center items-center'>
        <button
          type="button"
          onClick={openModal}
          className="transition-all rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Overview
        </button>
      </div>
    </div>


  )
}

