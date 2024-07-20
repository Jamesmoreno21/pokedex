import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../lib/types";
import pokeball from "../../assets/images/pokeball.png";
import { Button } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/16/solid";
import { ButtonWithSound } from "../UI/ButtonWithSound";
import { capitialize, parseIdToFourDigits } from "../../lib/utils";

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: (pokemonName: string) => boolean;
  changeFavorite: (pokemonName: string) => void;
}

export const PokemonCard = ({
  pokemon,
  isFavorite,
  changeFavorite,
}: PokemonCardProps) => {

  const navigate = useNavigate();
  
  const navigateToDetails = () => {
    navigate(`/pokedex/${pokemon.name}`);
  }

  

  return (
    <div className="relative bg-white p-4 rounded-md hover:shadow-md transition duration-300 hover:scale-105 w-full shadow-md">
      <div className="w-full bg-slate-200 rounded-lg">
        <img
          className="h-32 w-32 object-cover rounded-md mx-auto "
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <Button
        className="tooltip tooltip-left tooltip-warning absolute top-2 right-2  text-white p-2 bg-white rounded-full border-2 border-gray-400 z-50"
        onClick={() => changeFavorite(pokemon.name)}
        data-tip={isFavorite(pokemon.name) ? "Remove from favorites" : "Add to favorites"}
      >

          <StarIcon
            className={`w-6 h-6 ${
              isFavorite(pokemon.name) ? "text-yellow-500" : "text-gray-500"
            }`}
          />
        
      </Button>

      <div className="flex justify-between items-center mt-2 border-t-2 border-gray-200 pt-2 flex-wrap text-gray-700">
        <div className="flex justify-between items-center min-w-2/3 grow">
          <img src={pokeball} alt="pokeball" className="w-6 h-6" />
          <p className="text-center font-bold text-lg w-full">
            {parseIdToFourDigits(pokemon.id)}
          </p>
          <p className="text-center font-bold text-lg w-full">
            {capitialize(pokemon.name)}
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
