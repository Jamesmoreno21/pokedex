import { CardSkeleton } from "./CardSkeleton";
export const PokemonGridSkeleton = () => {
  const numCards = 12;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grow w-3/4 place-items-center">
      {[...Array(numCards)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};
