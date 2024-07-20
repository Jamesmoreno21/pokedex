import { useQuery } from "react-query";
import { PokemonsInfoQueryResponse } from "../types";
import { fetcher } from "../../fetcher";

const fetchInfo = async (): Promise<PokemonsInfoQueryResponse> => {
    const fetchNumber = fetcher.get("/pokemon?limit=100000&offset=0");
    const response = await fetchNumber;
    const data = await response.data;
    return data;
};

export const usePokemonsInfoQuery = () => {
  return useQuery(["pokemons"], () =>
    fetchInfo(),
    {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24
    }
  );
};
