import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const previousButtonDisabled = page === 1;
  const nextButtonDisabled = page === totalPages;
  return (
    <div className="flex items-center justify-between space-x-4 bg-white w-full px-10 py-5 sticky bottom-0 z-50 text-gray-700">
      <button
        className={`${
          page === 1 ? "bg-gray-300" : "bg-gray-200"
        } px-4 py-2 rounded-md flex items-center justify-center w-36 ${
          previousButtonDisabled ? "cursor-not-allowed text-gray-400" : ""
        }`}
        disabled={previousButtonDisabled}
        onClick={() => onPageChange(page - 1)}
      >
        <ArrowLeftCircleIcon className="w-6 h-6 mr-0 md:mr-2" />
        <p className="hidden md:block">Previous</p>
      </button>
      <p>
        Page {page} of {totalPages}
      </p>
      <button
        className={`${
          page === totalPages ? "bg-gray-300" : "bg-gray-200"
        } px-4 py-2 rounded-md flex items-center justify-center w-36 ${
          nextButtonDisabled ? "cursor-not-allowed text-gray-400" : ""
        }`}
        disabled={nextButtonDisabled}
        onClick={() => onPageChange(page + 1)}
      >
        <p className="hidden md:block">Next</p>
        <ArrowRightCircleIcon className="w-6 h-6 ml-0 md:ml-2" />
      </button>
    </div>
  );
};
