import { Pokemon } from "../../lib/types";
import { PokemonGridSkeleton } from "./Skeletons/PokemonGridSkeleton";
import { PokemonList } from "./PokemonList";
import { Pagination } from "../UI/Pagination";
import { PokeGridHeader } from "./PokeGridHeader";

interface PokeGridProps {
  pokemons: Pokemon[];
  info: { count: number };
  isFavoritePokemon: (pokemonName: string) => boolean;
  onFavoriteChange: (pokemonName: string) => void;
  isLoading: boolean;
  isInfoLoading: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  showFavorites: boolean;
  filterPokemonsByIdAndName: (search: string) => void;
  showFavoritesAndFilter: () => void;
  searchValue: string;
}

export const PokeGrid = ({
  pokemons,
  info,
  isFavoritePokemon,
  onFavoriteChange,
  isLoading,
  isInfoLoading,
  currentPage,
  totalPages,
  setCurrentPage,
  showFavorites,
  filterPokemonsByIdAndName,
  showFavoritesAndFilter,
  searchValue,
  
}: PokeGridProps) => {
  return (
    <>
      <PokeGridHeader
        totalPokemons={info.count}
        filterPokemonsByIdAndName={filterPokemonsByIdAndName}
        showFavoritesAndFilter={showFavoritesAndFilter}
        isInfoLoading={isInfoLoading}
        showFavorites={showFavorites}
        searchValue={searchValue}
        
      />
      {isInfoLoading || isLoading ? (
        <PokemonGridSkeleton />
      ) : (
        <PokemonList
          pokemons={pokemons as Pokemon[]}
          isPokemonFavorite={isFavoritePokemon}
          onFavoriteChange={onFavoriteChange}
        />
      )}

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
