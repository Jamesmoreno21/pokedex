import { PokedexLayout } from "../../layouts/PokedexLayout";
import { Pokemon } from "../../lib/types";
import { capitialize } from "../../lib/utils";
import { PokedexBody } from "./PokedexBody";
import { PokedexHeader } from "./PokedexHeader";
import { PokedexImage } from "./PokedexImage";
import { PokedexNavigationButtons } from "./PokedexNavigationButtons";

interface PokedexProps {
  isFavorite: boolean;
  changeFavorite: (pokemonName: string) => void;
  pokemon: Pokemon | null;
  previousPokemon: string | null;
  nextPokemon: string | null;
  pokemonDescription: {
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
      };
    }[];
  };
}

export const Pokedex = ({
  pokemon,
  isFavorite,
  changeFavorite,
  previousPokemon,
  nextPokemon,
  pokemonDescription,
}: PokedexProps) => {
  return (
    <PokedexLayout>
      <PokedexHeader
        title={capitialize(pokemon?.name || "")}
        id={pokemon?.id || 0}
        isFavorite={isFavorite}
        onFavoriteChange={() => changeFavorite(pokemon?.name || "")}
      />
      <PokedexImage
        src={pokemon?.sprites.front_default || ""}
        alt={pokemon?.name || ""}
      />

      <PokedexNavigationButtons
        previousPokemon={previousPokemon}
        nextPokemon={nextPokemon}
      />

      <PokedexBody pokemon={pokemon!} description={pokemonDescription} />
    </PokedexLayout>
  );
};
