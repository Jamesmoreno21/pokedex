import { useQuery } from "react-query";
import { fetcher } from "../../fetcher";

const fetchDescription = async (speciesName: string) => {
  const fetchNumber = fetcher.get(`/pokemon-species/${speciesName}`);
  const response = await fetchNumber;
  const data = await response.data;
  return data;
};

export const usePokemonDescriptionQuery = (
  speciesName: string,
  options?: any
) => {
  return useQuery(
    ["pokemon-description", speciesName],
    () => fetchDescription(speciesName),
    {
      ...options,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
};
