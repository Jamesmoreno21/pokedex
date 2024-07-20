import { useQuery } from "react-query";
import { fetcher } from "../../fetcher";

const fetchDescription = async (id: string) => {
  const fetchNumber = fetcher.get(`/pokemon-species/${id}`);
  const response = await fetchNumber;
  const data = await response.data;
  return data;
};

export const usePokemonDescriptionQuery = (
  id: string,
  options?: any
) => {
  return useQuery(
    ["pokemon-description", id],
    () => fetchDescription(id),
    {
      ...options,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
};
