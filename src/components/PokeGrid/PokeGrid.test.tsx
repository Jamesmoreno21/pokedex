import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokeGrid } from "./PokeGrid";
import { Pokemon } from "../../lib/types";
import { BrowserRouter } from "react-router-dom";
import { AudioProvider } from "../../providers/AudioProvider";

const pokemonsExample = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/back/1.png",
      left_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/left/1.png",
      right_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/right/1.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/back/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    },
    height: 7,
    weight: 69,
    types: [],
    abilities: [],
  },
  {
    id: 421,
    name: "cherrim",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/back/421.png",
      left_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/left/421.png",
      right_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/right/421.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/back/421.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/421.png",
    },
    height: 5,
    weight: 93,
    types: [],
    abilities: [],
  },
  {
    id: 872,
    name: "snom",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/back/872.png",
      left_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/left/872.png",
      right_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/right/872.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/back/872.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/872.png",
    },
    height: 3,
    weight: 35,
    types: [],
    abilities: [],
  },
];

describe("PokeGrid", () => {
  test("should render", () => {
    const pokemons: Pokemon[] = pokemonsExample;
    const info = {
      count: 3,
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "cherrim",
          url: "https://pokeapi.co/api/v2/pokemon/421/",
        },
        {
          name: "snom",
          url: "https://pokeapi.co/api/v2/pokemon/872/",
        },
      ],
    };

    const isFavoritePokemon = (pokemonName: string) =>
      pokemonName === "bulbasaur";
    const onFavoriteChange = () => {};
    const isLoading = false;
    const isInfoLoading = false;
    const currentPage = 1;
    const totalPages = 1;
    const setCurrentPage = () => {};
    const showFavorites = false;
    const filterPokemonsByIdAndName = () => {};
    const showFavoritesAndFilter = () => {};

    render(
      <PokeGrid
        pokemons={pokemons}
        info={info}
        isFavoritePokemon={isFavoritePokemon}
        onFavoriteChange={onFavoriteChange}
        isLoading={isLoading}
        isInfoLoading={isInfoLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        showFavorites={showFavorites}
        filterPokemonsByIdAndName={filterPokemonsByIdAndName}
        showFavoritesAndFilter={showFavoritesAndFilter}
        searchValue=""
      />,
      {
        wrapper: ({ children }) => (
          <AudioProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </AudioProvider>
        ),
      }
    );

    expect(screen.getByText("Pokedex")).toBeDefined();
    expect(screen.getByText("Total Pokemons: 3")).toBeDefined();

    // Pokemon info
    expect(screen.getByText("#0001")).toBeDefined();
    expect(screen.getByText("Bulbasaur")).toBeDefined();
    expect(screen.getByText("#0421")).toBeDefined();
    expect(screen.getByText("Cherrim")).toBeDefined();
    expect(screen.getByText("#0872")).toBeDefined();
    expect(screen.getByText("Snom")).toBeDefined();
  });
});