import '@/app/globals.css'
import clsx from 'clsx';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { ReactElement } from 'react';


export default function Layout(
    page: ReactElement
) {

    const { pathname } = useRouter();

    return (
        <div className='flex'>


            <div className='h-screen shadow p-4 flex justify-center w-[10%]'>
                <span className='font-semibold'>
                    Movie Mashup
                </span>
            </div>

            <div className='flex flex-col w-[90%]'>
                <div className='shadow p-4 flex gap-4'>
                    <Link href='/' className={clsx('border-b-2', { 'border-black font-semibold': pathname === '/' })}>
                        Now Playing
                    </Link>

                    <Link href='/' className={clsx('border-b-2', { 'border-black font-semibold': pathname === '/popular' })}>
                        Popular
                    </Link>

                    <Link href='/' className={clsx('border-b-2', { 'border-black font-semibold': pathname === '/top-rated' })}>
                        Top Rated
                    </Link>
                </div>

                <div className='p-4'>


                    {page}
                </div>
            </div>
        </div>
    )
}
