import { useQueries, useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "../../fetcher";
import {
  PokemonQueryParams,
  PokemonQueryResponse,
  PokemonsQueryParams,
} from "../types";

interface PokemonQueryOptions
  extends UseQueryOptions<
    PokemonQueryResponse,
    unknown,
    PokemonQueryResponse,
    (string | { name: string })[]
  > {}

const fetchPokemon = async ({
  name,
}: PokemonQueryParams): Promise<PokemonQueryResponse> => {
  const response = await fetcher.get(`/pokemon/${name}`);
  const data = await response.data;
  return data;
};

export const usePokemonQuery = (
  params: PokemonQueryParams,
  options?: PokemonQueryOptions
) => {
  return useQuery(
    ["pokemon", { name: params.name }],
    () => fetchPokemon(params),
    {
      ...options,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  );
};

export const usePokemonsQuery = (
  params?: PokemonsQueryParams,
  options?: PokemonQueryOptions
) => {
  const names = params?.names || [];

  return useQueries(
    names.map((index) => {
      return {
        queryKey: ["pokemon", { name: index }],
        queryFn: () => fetchPokemon({ name: index.toString() }),
        options,
      };
    })
  );
  
};
