import React from 'react';
import { Button } from '../Button';

export const MovieCardSkeleton = () => {
  return (
    <div className="flex w-[calc(14rem)] flex-shrink-0 flex-col rounded shadow-md">
      <div className="grid h-[calc(20rem)] gap-2 bg-white  p-4 dark:bg-slate-700">
        {Array(3)
          .fill(true)
          .map((_, i) => (
            <div
              className="bg-gradient-animate w-full rounded bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900"
              key={i}
            ></div>
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
