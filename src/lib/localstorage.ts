export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const getFavoritePokemons = (force: boolean = false) => {
  if (force) {
    return getFromLocalStorage("favoritePokemons") || [];
  }
  return getFromLocalStorage("favoritePokemons") || [];
};

export const updateFavoritePokemons = (pokemonNames: string[]) => {
  saveToLocalStorage("favoritePokemons", pokemonNames);
};
