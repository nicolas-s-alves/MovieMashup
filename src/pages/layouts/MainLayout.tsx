import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { FilmIcon, ArrowUturnDownIcon, GlobeEuropeAfricaIcon, TrophyIcon } from '@heroicons/react/24/solid'

export default function MainLayout(
  page: ReactElement
) {
  const { pathname } = useRouter();

  return (
    <div className='flex'>
      <div className='w-[10%] h-screen shadow p-4 flex justify-center fixed bg-white'>
        <div className='h-fit flex justify-center items-center gap-2 text-blue-500'>

          <FilmIcon className='w-5 h-5' />

          <span className='font-semibold text-lg'>
            Movie Mashup
          </span>
        </div>
      </div>

      <div className='flex flex-col w-[90%] ml-[10%] p-4'>
        {page}
      </div>
    </div>
  )
} 
