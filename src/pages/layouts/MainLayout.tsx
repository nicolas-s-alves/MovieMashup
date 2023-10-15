import { ReactElement } from 'react';
import { FilmIcon } from '@heroicons/react/24/solid'

export default function MainLayout(
  page: ReactElement
) {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[10%] h-auto lg:h-screen shadow p-4 flex flex-col justify-between fixed z-10 dark:bg-gray-900 bg-white'>
        <div className='h-fit flex justify-center items-center gap-2 dark:text-white text-blue-500'>

          <FilmIcon className='w-5 h-5' />

          <span className='font-semibold text-lg'>
            Movie Mashup
          </span>
        </div>
      </div>

      <div className='flex flex-col w-full lg:w-[90%] lg:ml-[10%] p-4 lg:mt-auto mt-16'>
        {page}
      </div>
    </div>
  )
} 
