export const CardSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-md w-full animate-pulse duration-75">
      <div className="h-32 bg-gray-200 rounded-md"></div>
      <div className="flex justify-between items-center mt-2 border-t-2 border-gray-200 pt-2">
        <div className="size-6 bg-gray-200 rounded-full "></div>
        <div className="mx-10 w-1/2 h-6 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};
