import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

interface PokedexNavigationButtonsProps {
  previousPokemon: string | null;
  nextPokemon: string | null;
}
export const PokedexNavigationButtons = ({
  previousPokemon,
  nextPokemon,
}: PokedexNavigationButtonsProps) => {
  return (
    <>
      <div className="top-1/2 flex w-full h-1.5 bg-black my-5" />
      <div
        className={`absolute top-2/3 flex w-full mt-8 z-10 ${
          previousPokemon && nextPokemon ? "justify-between" : ""
        } ${previousPokemon && !nextPokemon ? "justify-start" : ""} ${
          !previousPokemon && nextPokemon ? "justify-end" : ""
        }`}
      >
        {previousPokemon && (
          <Link
            to={`/pokedex/${previousPokemon}`}
            className="flex items-center tooltip tooltip-top tooltip-warning hover:text-yellow-500 "
            data-tip="Previous Pokemon"
          >
            <ChevronLeftIcon className="size-16 md:size-20 pr-4" />
          </Link>
        )}
        {nextPokemon && (
          <Link
            to={`/pokedex/${nextPokemon}`}
            className="flex items-center tooltip tooltip-top tooltip-warning hover:text-yellow-500"
            data-tip="Next Pokemon"
          >
            <ChevronRightIcon className="size-16 md:size-20 pl-4" />
          </Link>
        )}
      </div>
    </>
  );
};
