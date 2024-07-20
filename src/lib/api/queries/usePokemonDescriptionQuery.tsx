import { useQuery } from "react-query";
import { fetcher } from "../../fetcher";

const fetchDescription = async (pokemonName: string) => {
  const fetchNumber = fetcher.get(`/pokemon-species/${pokemonName}`);
  const response = await fetchNumber;
  const data = await response.data;
  return data;
};

export const usePokemonDescriptionQuery = (pokemonName: string) => {
  return useQuery(
    ["pokemon-description", pokemonName],
    () => fetchDescription(pokemonName),
    { staleTime: 1000 * 60 * 60 * 24, cacheTime: 1000 * 60 * 60 * 24 }
  );
};
