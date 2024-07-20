export interface PokemonsQueryParams {
  names: string[];
}

export interface PokemonsInfoQueryResponse {
    count: number;
    next?: string;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[];
}

export interface PokemonQueryParams {
    name: string;
}

export interface PokemonQueryResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    };
    species: {
        name: string;
        url: string;
    };
}
