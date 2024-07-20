import { capitialize } from "../../lib/utils";

interface TypeBadgeProps {
  type: string;
}

const getColor = (type: string) => {
  switch (type) {
    case "normal":
      return "bg-gray-400";
    case "fighting":
      return "bg-red-700";
    case "flying":
      return "bg-blue-400";
    case "poison":
      return "bg-purple-700";
    case "ground":
      return "bg-yellow-700";
    case "rock":
      return "bg-yellow-800";
    case "bug":
      return "bg-green-700";
    case "ghost":
      return "bg-purple-800";
    case "steel":
      return "bg-gray-600";
    case "fire":
      return "bg-red-600";
    case "water":
      return "bg-blue-600";
    case "grass":
      return "bg-green-600";
    case "electric":
      return "bg-yellow-600";
    case "psychic":
      return "bg-pink-600";
    case "ice":
      return "bg-blue-300";
    case "dragon":
      return "bg-red-900";
    case "dark":
      return "bg-gray-800";
    case "fairy":
      return "bg-pink-400";
    case "unknown":
      return "bg-gray-500";
    case "shadow":
      return "bg-black";
    default:
      return "bg-gray-500";
  }
}

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  return (
    <div className={`rounded-full text-white ${getColor(type)} text-xs py-1 px-2 mr-2`}>
      {capitialize(type)}
    </div>
  );
}
