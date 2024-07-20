import { Pokemon } from "../../lib/types";
import { capitialize } from "../../lib/utils";
import { TypeBadge } from "./TypeBadge";
interface PokedexBodyProps {
  pokemon: Pokemon;
  description?: {
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
      };
    }[];
  };
}

export const PokedexBody = ({ pokemon, description }: PokedexBodyProps) => {
  const englishDescription = description?.flavor_text_entries?.find(
    (entry) => entry.language.name === "en"
  );

  return (
    <div className="flex flex-col items-start bg-green-200 w-3/4 rounded-xl border-4 border-black mb-5 text-gray-700 px-10 pb-5">
      <h2 className="text-2xl mt-4 font-bold">Description</h2>
      <p className="">{englishDescription?.flavor_text}</p>
      <div className="flex flex-row justify-between w-full mt-2">
        <p className="grow">Height: {pokemon?.height} HT</p>
        <p className="grow">Weight: {pokemon?.weight} WT</p>
      </div>
      <h3 className="text-lg mt-2 font-bold">Types</h3>
      <div className="flex flex-row justify-start w-full">
        {pokemon?.types.map((type) => (
          <TypeBadge key={type.type.name} type={type.type.name} />
        ))}
      </div>
      <h3 className="text-lg mt-2 font-bold">Abilities</h3>

      {pokemon?.abilities.map((ability) => (
        <p key={ability.ability.name}>- {capitialize(ability.ability.name)}</p>
      ))}
    </div>
  );
};
