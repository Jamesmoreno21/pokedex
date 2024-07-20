import { Button } from "@headlessui/react";
import { SearchBar } from "../SearchBar";
import { ListBulletIcon, StarIcon } from "@heroicons/react/16/solid";

interface PokeGridHeaderProps {
  totalPokemons: number;
  filterPokemonsByIdAndName: (search: string) => void;
  showFavoritesAndFilter: () => void;
  isInfoLoading: boolean;
  showFavorites: boolean;
  searchValue: string;
}
export const PokeGridHeader = ({
  totalPokemons,
  filterPokemonsByIdAndName,
  showFavoritesAndFilter,
  isInfoLoading,
  showFavorites,
  searchValue,

}: PokeGridHeaderProps) => {
  return (
    <div className="flex flex-col items-center w-full justify-between">
      <h1 className="text-4xl font-bold text-gray-800 mb-5 mt-10">Pokedex</h1>
      <div className="flex flex-row justify-between mb-10">
        <p className="text-gray-700 text-lg">
          Total Pokemons: {isInfoLoading ? "..." : totalPokemons}
        </p>
      </div>
      <div className="flex flex-row justify-between mb-10 w-10/12">
        <SearchBar
          placeholder={showFavorites ? "Search Favorites" : "Search Pokemon"}
          onSearch={filterPokemonsByIdAndName}
          value={searchValue}
        />

        <Button
          className="tooltip tooltip-top tooltip-warning mb-5 ml-3 md:ml-10 btn-warning btn flex items-center justify-center"
          onClick={showFavoritesAndFilter}
          data-tip={showFavorites ? "See all pokemons" : "See favorites"}
        >
          {showFavorites ? (
            <ListBulletIcon className="w-6 h-6 md:mr-2" />
          ) : (
            <StarIcon className="w-6 h-6 md:mr-2" />
          )}
          <p className="hidden md:block">
            {showFavorites ? "See All" : "See Favorites"}
          </p>
        </Button>
      </div>
    </div>
  );
};
