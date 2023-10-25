import { FilmIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="fixed z-10 flex h-auto w-full flex-col justify-between bg-white p-4 shadow dark:bg-gray-900 lg:h-screen lg:w-[10%]">
        <div className="flex h-fit items-center justify-center gap-2 text-blue-500 dark:text-white">
          <FilmIcon className="h-5 w-5" />
          <span className="text-lg font-semibold">Movie Mashup</span>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col p-4 lg:ml-[10%] lg:mt-auto lg:w-[90%]">
        {children}
      </div>
    </div>
  );
}
