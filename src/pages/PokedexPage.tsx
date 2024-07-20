import { useNavigate, useParams } from "react-router-dom";
import { PageLayout } from "../layouts/PageLayout";
import { usePokemonQuery } from "../lib/api/queries/usePokemonsQuery";
import { usePokemonsInfoQuery } from "../lib/api/queries/usePokemonsInfoQuery";
import { useEffect, useState } from "react";
import {
  getFavoritePokemons,
  updateFavoritePokemons,
} from "../lib/localstorage";
import { usePokemonDescriptionQuery } from "../lib/api/queries/usePokemonDescriptionQuery";
import { PokedexSkeleton } from "../components/Pokedex/PokedexSkeleton";
import { Pokedex } from "../components/Pokedex/Pokedex";
import toast from "react-hot-toast";

export const PokedexPage = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams<{ pokemonName: string }>();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [previousPokemon, setPreviousPokemon] = useState<string | null>(null);
  const [nextPokemon, setNextPokemon] = useState<string | null>(null);

  const {
    isLoading,
    isError,
    data: pokemon,
  } = usePokemonQuery({
    name: pokemonName || "",
  });

  const {
    data: info,
    isLoading: isLoadingInfo,
    isError: isInfoError,
  } = usePokemonsInfoQuery();

  const {
    data: pokemonDescription,
    isLoading: isLoadingpokemonDescription,
    isError: ispokemonDescriptionError,
  } = usePokemonDescriptionQuery( pokemon?.species?.name || "");




  useEffect(() => {
    const favorites = getFavoritePokemons();
    if (favorites) {
      setIsFavorite(favorites.includes(pokemonName));
    }

  }, [pokemonName]);

  useEffect(() => {
    if (info) {
      const index = info.results.findIndex(
        (pokemonInfo) => pokemonInfo.name === pokemon?.name
      );
      if (index > 0) {
        setPreviousPokemon(info.results[index - 1].name);
      }
      if (index < info.results.length - 1) {
        setNextPokemon(info.results[index + 1].name);
      }

      if (index === 0) {
        setPreviousPokemon(null);
      }
      if (index === info.results.length - 1) {
        setNextPokemon(null);
      }
    }
  }, [info, pokemon?.name]);

  const handleFavoriteChange = () => {
    const favorites = getFavoritePokemons();
    if (favorites) {
      if (isFavorite) {
        const updatedFavorites = favorites.filter(
          (favorite: string) => favorite !== pokemonName
        );
        setIsFavorite(false);
        updateFavoritePokemons(updatedFavorites);
      } else {
        const updatedFavorites = [...favorites, pokemonName];
        setIsFavorite(true);
        updateFavoritePokemons(updatedFavorites);
      }
    } else {
      updateFavoritePokemons([pokemonName!]);
      setIsFavorite(true);
    }
  };

  if (isLoading || isLoadingInfo || isLoadingpokemonDescription) {
    return (
      <PageLayout>
        <PokedexSkeleton />
      </PageLayout>
    );
  }

  if (isError || isInfoError || ispokemonDescriptionError) {
    toast.error("Error fetching data", { id: "error-fetching-data" });
    navigate("/");
    return <PageLayout>Error</PageLayout>;
  }

  return (
    <PageLayout>
      <Pokedex
        pokemon={pokemon!}
        isFavorite={isFavorite}
        changeFavorite={handleFavoriteChange}
        previousPokemon={previousPokemon}
        nextPokemon={nextPokemon}
        pokemonDescription={pokemonDescription!}
      />
    </PageLayout>
  );
};
