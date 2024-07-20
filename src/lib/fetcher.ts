import axios from "axios";

export const fetcher = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});