export const CardSkeleton = () => {
  return (
    <div className="bg-white p-4 h-62 rounded-md w-full animate-pulse duration-75 flex flex-col ">
      <div className="h-40 bg-gray-200 rounded-md"></div>
      <div className="flex justify-between items-center mt-6 border-t-2 border-gray-200 pt-2">
        <div className="mx-2 w-full h-20 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};
