import { useNavigate } from "react-router-dom";
import pokeball from "../../assets/images/pokeball.png";
import { Button } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/16/solid";
import { ButtonWithSound } from "../UI/ButtonWithSound";
import { capitialize, parseIdToFourDigits } from "../../lib/utils";
import { CardSkeleton } from "./Skeletons/CardSkeleton";
import { usePokemonQuery } from "../../lib/api/queries/usePokemonsQuery";
import noPokemonImage from "../../assets/images/no-pokemon.png";
import toast from "react-hot-toast";

interface PokemonCardProps {
  pokemonQuery: ReturnType<typeof usePokemonQuery>;
  isFavorite: (pokemonName: string) => boolean;
  changeFavorite: (pokemonName: string) => void;
}

export const PokemonCard = ({
  pokemonQuery,
  isFavorite,
  changeFavorite,
}: PokemonCardProps) => {
  const navigate = useNavigate();
  const isLoading = pokemonQuery.isLoading;
  const isError = pokemonQuery.isError;
  if (isLoading) {
    return <CardSkeleton />;
  }

  if (isError) {
    toast.error("Failed to fetch pokemon", {
      id: "fetch-pokemon",
    });
    return null;
  }

  const pokemon = pokemonQuery.data;

  const navigateToDetails = () => {
    navigate(`/pokedex/${pokemon?.name}`);
  };
  const sprite = pokemon?.sprites?.front_default || noPokemonImage;

  return (
    <div className="relative bg-white p-4 h-62 rounded-md hover:shadow-md transition duration-300 hover:scale-105 w-full shadow-md">
      <div className=" bg-slate-200 rounded-lg py-2 w-full flex items-center justify-center">
        <img className="rounded-md w-auto h-40" src={sprite} alt={pokemon?.name} />
      </div>

      <Button
        className="tooltip tooltip-left tooltip-warning absolute top-2 right-2  text-white p-2 bg-white rounded-full border-2 border-gray-400 z-30"
        onClick={() => changeFavorite(pokemon?.name || "")}
        data-tip={
          isFavorite(pokemon?.name || "")
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        <StarIcon
          className={`w-6 h-6 ${
            isFavorite(pokemon?.name || "") ? "text-yellow-500" : "text-gray-500"
          }`}
        />
      </Button>

      <div className="flex justify-between items-center mt-2 border-t-2 h-1/4 border-gray-200 pt-2 flex-wrap text-gray-700">
        <div className="flex justify-between items-center w-2/3 grow">
          <img src={pokeball} alt="pokeball" className="w-6 h-6" />
          <p className="text-center font-bold text-lg w-full">
            {parseIdToFourDigits(pokemon?.id || 0)}
          </p>
          <p className="text-center font-bold text-lg w-full">
            {capitialize(pokemon?.name || "")}
          </p>
        </div>
        <ButtonWithSound
          soundToPlay={{ id: "in" }}
          enableClassName="btn btn-info text-white p-1 rounded-md grow text-center mx-4"
          loadingText=""
          onClick={navigateToDetails}
          disableClassName="text-gray grow pl-12 rounded-md grow text-center"
        >
          Details
        </ButtonWithSound>
      </div>
    </div>
  );
};
