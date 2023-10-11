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
            <div className='w-[10%] h-screen shadow p-4 flex justify-center'>
                <div className='h-fit flex justify-center items-center gap-2 text-blue-500'>

                    <FilmIcon className='w-5 h-5' />

                    <span className='font-semibold text-lg'>
                        Movie Mashup
                    </span>
                </div>
            </div>

            <div className='flex flex-col w-[90%]'>
                <div className='shadow p-4 flex gap-4 text-gray-700'>
                    <Link href='#' className={clsx('flex items-center gap-1 border-b-2', { 'border-gray-700 font-semibold': pathname === '/' })}>
                        Now Playing
                        <ArrowUturnDownIcon className='w-4 h-4' />
                    </Link>

                    <Link href='#' className={clsx('flex items-center gap-1 border-b-2', { 'border-gray-700 font-semibold': pathname === '/popular' })}>
                        Popular
                        <GlobeEuropeAfricaIcon className='w-4 h-4' />
                    </Link>

                    <Link href='#' className={clsx('flex items-center gap-1 border-b-2', { 'border-gray-700 font-semibold': pathname === '/top-rated' })}>
                        Top Rated
                        <GlobeEuropeAfricaIcon className='w-4 h-4' />
                    </Link>
                </div>

                <div className='p-4'>
                    {page}
                </div>
            </div>
        </div>
    )
}
