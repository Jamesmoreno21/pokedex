import { PokedexLayout } from "../../layouts/PokedexLayout";

export const PokedexSkeleton = () => {
  return (
    <PokedexLayout>
        <div className="w-1/3 h-8 bg-gray-200 rounded-md animate-pulse my-4"></div>
        <div className="w-1/4 h-6 bg-gray-200 rounded-md animate-pulse my-4"></div>
        <div className="w-3/4 h-1/2 bg-green-200 rounded-xl border-4 border-black mb-5 text-gray-700 px-10 flex items-center justify-center">
          <div className="size-40 bg-gray-300 rounded-full animate-pulse my-4"></div>
        </div>
        <div className="top-1/2 flex w-full h-1.5 bg-black my-5" />
        <div className="w-3/4 h-1/2 my-10 bg-green-200 rounded-xl border-4 border-black text-gray-700 px-10 flex flex-col items-center justify-center py-10">
            <div className="w-full h-8 bg-gray-300 rounded-md animate-pulse my-2"></div>
            <div className="w-full h-8 bg-gray-300 rounded-md animate-pulse my-2"></div>
            <div className="w-full h-8 bg-gray-300 rounded-md animate-pulse my-2"></div>
            <div className="w-full h-8 bg-gray-300 rounded-md animate-pulse my-2"></div>
        </div>
        
    </PokedexLayout>
  );
};
