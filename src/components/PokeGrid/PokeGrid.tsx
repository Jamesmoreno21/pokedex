import { PokemonList } from "./PokemonList";
import { Pagination } from "../UI/Pagination";
import { PokeGridHeader } from "./PokeGridHeader";
import { usePokemonsQuery } from "../../lib/api/queries/usePokemonsQuery";

interface PokeGridProps {
  pokemonsQueries: ReturnType<typeof usePokemonsQuery>;
  info: { count: number };
  isFavoritePokemon: (pokemonName: string) => boolean;
  onFavoriteChange: (pokemonName: string) => void;
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
  pokemonsQueries,
  info,
  isFavoritePokemon,
  onFavoriteChange,
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

      <PokemonList
        pokemonsQueries={pokemonsQueries}
        isPokemonFavorite={isFavoritePokemon}
        onFavoriteChange={onFavoriteChange}
      />

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
