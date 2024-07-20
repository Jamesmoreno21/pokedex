import { useNavigate } from "react-router-dom";
import { usePokemonsInfoQuery } from "../lib/api/queries/usePokemonsInfoQuery";
import { usePokemonsQuery } from "../lib/api/queries/usePokemonsQuery";
import { PokeGrid } from "../components/PokeGrid/PokeGrid";
import { Pokemon } from "../lib/types";
import toast from "react-hot-toast";
import { useCallback, useEffect, useState } from "react";
import { pageSize } from "../lib/params";
import {
  getFavoritePokemons,
  updateFavoritePokemons,
} from "../lib/localstorage";
import { PageLayout } from "../layouts/PageLayout";



export const PokeGridPage = () => {
  const navigate = useNavigate();
  const {
    data: info,
    isLoading: isInfoLoading,
    isError: isInfoError,
  } = usePokemonsInfoQuery();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesHasChanged, setFavoritesHasChanged] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [namesToFetch, setNamesToFetch] = useState<string[]>([]);
  const {
    data: pokemons,
    isLoading,
    isError,
  } = usePokemonsQuery(
    { names: namesToFetch },
    { enabled: !!info && namesToFetch.length > 0 }
  );

  if (isInfoError || isError) {
    toast.error("Error fetching data", { id: "error-fetching-data" });
    navigate("/");
  }


  const getNamesToFetch = useCallback(
    (page: number, results: { name: string }[]) => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      return results.slice(start, end).map((pokemon) => pokemon.name);
    },
    []
  );

  const resetPagination = useCallback((totalPokemons: number) => {
    setCurrentPage(1);
    setTotalPages(Math.ceil(totalPokemons / pageSize));
  }, []);

  const filterByFavorites = useCallback(() => {
    if (info) {
      const favorites = getFavoritePokemons();
      const filtered = info.results.filter((pokemon) =>
        favorites.includes(pokemon.name)
      );
      setNamesToFetch(getNamesToFetch(currentPage, filtered));
      resetPagination(filtered.length);
    }
  }, [info, getNamesToFetch, currentPage, resetPagination]);

  useEffect(() => {
    const fetchAllPokemons = () => {
      setNamesToFetch(getNamesToFetch(currentPage, info?.results || []));
      setTotalPages(Math.ceil((info?.count || 0) / pageSize));
    };

    const fetchFavorites = () => {
      const favorites = getFavoritePokemons();
      const mapped = favorites.map((name:string) => ({ name }));
      setNamesToFetch(getNamesToFetch(currentPage, mapped));
      setTotalPages(Math.ceil(favorites.length / pageSize));
    };

    const fetchData = () => {
      if (info && !showFavorites) {
        fetchAllPokemons();
      } else if (showFavorites) {
        fetchFavorites();
      }
    };
    fetchData();
  }, [
    info,
    currentPage,
    getNamesToFetch,
    showFavorites,
    filterByFavorites,
  
  ]);

  const filterPokemonsByIdAndName = (search: string) => {
    setSearchValue(search);
    if (showFavorites) {
      filterFavoritePokemonsByIdAndName(search);
    } else {
      filterAllPokemonsByIdAndName(search);
    }
  };

  const filterFavoritePokemonsByIdAndName = (search: string) => {
    if (search === "") {
      filterByFavorites();
    } else {
      const favoritePokemons = getFavoritePokemons();
      const filtered = favoritePokemons.filter((name:string) =>
        name.includes(search.toLowerCase())
    );
      setNamesToFetch(filtered);
      resetPagination(filtered.length);
    }
  };

  const filterAllPokemonsByIdAndName = (search: string) => {
    if (info && search !== "") {
      const filtered = info.results.filter((pokemon) =>
        pokemon.name.includes(search.toLowerCase())
      );
      resetPagination(filtered.length);
      setNamesToFetch(getNamesToFetch(currentPage, filtered));
    } else if (search === "" && info) {
      resetPagination(info.count);
      setNamesToFetch(getNamesToFetch(currentPage, info.results));
    }
  };

  const showFavoritesAndFilter = () => {
    if (!showFavorites) {
      filterByFavorites();
    } else {
      setNamesToFetch(getNamesToFetch(currentPage, info?.results || []));
    }
    resetPagination(info?.count || 0);
    setShowFavorites(!showFavorites);
    setSearchValue("");
  };


  

  const onFavoriteChange = (pokemonName: string) => {
    let newFavorites: string[] = [];
    const favoritePokemons = getFavoritePokemons();
    if (favoritePokemons.includes(pokemonName)) {
      newFavorites = favoritePokemons.filter((name:string) => name !== pokemonName);
    } else {
      newFavorites = [...favoritePokemons, pokemonName];
    }
    updateFavoritePokemons(newFavorites);
    setFavoritesHasChanged(!favoritesHasChanged);
    if (showFavorites) {
      filterByFavorites();
    }
  };

  const isFavoritePokemon = useCallback(
    (pokemonName: string) => {
      const favorites = getFavoritePokemons(favoritesHasChanged);
      return favorites.includes(pokemonName);
    },
    [ favoritesHasChanged]
  );

  return (
    <PageLayout>
      <PokeGrid
        pokemons={pokemons as Pokemon[]}
        info={info ?? { count: 0 }}
        isFavoritePokemon={isFavoritePokemon}
        onFavoriteChange={onFavoriteChange}
        isLoading={isLoading}
        isInfoLoading={isInfoLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        showFavorites={showFavorites}
        filterPokemonsByIdAndName={filterPokemonsByIdAndName}
        showFavoritesAndFilter={showFavoritesAndFilter}
        searchValue={searchValue}
      />
    </PageLayout>
  );
};
