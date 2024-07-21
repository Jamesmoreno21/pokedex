import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { PokemonCard } from "./PokemonCard";
import { usePokemonsQuery } from "../../lib/api/queries/usePokemonsQuery";

interface PokemonListProps {
  pokemonsQueries: ReturnType<typeof usePokemonsQuery>;
  isPokemonFavorite: (pokemonName: string) => boolean;
  onFavoriteChange: (pokemonName: string) => void;
}

export const PokemonList = ({
  pokemonsQueries = [],
  isPokemonFavorite,
  onFavoriteChange,
}: PokemonListProps) => {
  return (
    <div className="w-10/12 min-h-fit h-2/3 grow mb-5 rounded-md over">
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 ">
        {pokemonsQueries.map((pokemonQuery, index) => (
          <PokemonCard
            key={index}
            pokemonQuery={pokemonQuery}
            isFavorite={isPokemonFavorite}
            changeFavorite={onFavoriteChange}
          />
        ))}
      </div>
      {pokemonsQueries.length === 0 && (
        <div className="bg-white p-4 rounded-md w-full flex items-center justify-center">
          <InformationCircleIcon className="h-6 w-6 text-gray-400" />
          <p className="text-gray-400 ml-2">No Pokemons found</p>
        </div>
      )}
    </div>
  );
};
