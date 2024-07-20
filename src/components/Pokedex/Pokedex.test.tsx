import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Pokemon } from "../../lib/types";
import { BrowserRouter } from "react-router-dom";
import { Pokedex } from "./Pokedex";

const pokemonExample = {
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
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
};

const pokemonDescription = {
  flavor_text_entries: [
    {
      flavor_text: "Bulbasaur can be seen napping in bright sunlight.",
      language: {
        name: "en",
      },
    },
  ],
};

describe("Pokedex", () => {
  test("should render", () => {
    const pokemon: Pokemon = pokemonExample;
    const description = pokemonDescription;
    render(
      <BrowserRouter>
        <Pokedex
          pokemon={pokemon}
          isFavorite={false}
          changeFavorite={() => {}}
          previousPokemon={null}
          nextPokemon={null}
          pokemonDescription={description}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Bulbasaur")).toBeDefined();
    expect(screen.getByText("Description")).toBeDefined();
    expect(
      screen.getByText("Bulbasaur can be seen napping in bright sunlight.")
    ).toBeDefined();
    expect(screen.getByText("Height: 7 HT")).toBeDefined();
    expect(screen.getByText("Weight: 69 WT")).toBeDefined();
    expect(screen.getByText("Types")).toBeDefined();
    expect(screen.getByText("Abilities")).toBeDefined();
    expect(screen.getByText("Grass")).toBeDefined();
    expect(screen.getByText("Poison")).toBeDefined();
    expect(screen.getByText("- Overgrow")).toBeDefined();
    expect(screen.getByText("- Chlorophyll")).toBeDefined();
  });
});
