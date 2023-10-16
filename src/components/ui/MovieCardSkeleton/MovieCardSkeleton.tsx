import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Button } from '../Button';

export const MovieCardSkeleton = () => {
  return (
    <div className="flex w-[calc(14rem)] flex-shrink-0 flex-col rounded shadow-md">
      <div className="grid h-[calc(20rem)] gap-2 bg-white p-4 dark:bg-slate-700">
        {Array(3)
          .fill(true)
          .map((_, i) => (
            <div className="w-full rounded bg-slate-800" key={i}></div>
          ))}
      </div>
      <div className="flex items-center justify-center bg-white p-4 dark:bg-slate-700">
        <Button type="button" disabled fill>
          Loading...
        </Button>
      </div>
    </div>
  );
};
