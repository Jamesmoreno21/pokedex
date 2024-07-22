import { Button } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/16/solid";
import { parseIdToFourDigits } from "../../lib/utils";

interface PokedexHeaderProps {
  title: string;
  id: number;
  isFavorite: boolean;
  onFavoriteChange: () => void;
}

export const PokedexHeader = ({
  title,
  id,
  isFavorite,
  onFavoriteChange,
}: PokedexHeaderProps) => {
  return (
    <>
      <Button
        className="tooltip tooltip-left tooltip-warning absolute top-2 right-2  text-white p-2 bg-white rounded-full border-2 border-gray-400 z-30"
        onClick={onFavoriteChange}
        data-tip={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <StarIcon
          className={`w-6 h-6 ${
            isFavorite ? "text-yellow-500" : "text-gray-500"
          }`}
        />
      </Button>
      <h1 className="text-4xl mt-4 md:text-6xl">{title}</h1>
      <p className="text-2xl mt-2 text-white">{parseIdToFourDigits(id)}</p>
    </>
  );
};
