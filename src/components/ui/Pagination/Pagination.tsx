import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import { Button } from '../Button';

interface PaginationProps {
  page: number;
  totalPages?: number;
  backPage: () => void;
  nextPage: () => void;
}

export const Pagination = ({ page, backPage, nextPage }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      <Button type="button" onClick={backPage} disabled={page === 1}>
        <ArrowLeftIcon className="w-4" />
      </Button>

      <span>Page {page}</span>

      <Button type="button" onClick={nextPage}>
        <ArrowRightIcon className="w-4" />
      </Button>
    </div>
  );
};
