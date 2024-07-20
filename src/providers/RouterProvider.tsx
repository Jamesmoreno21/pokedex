import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
} from "react-router-dom";
import App from "../pages/AppPage";
import { PokeGridPage } from "../pages/PokeGridPage";
import { PokedexPage } from "../pages/PokedexPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/pokedex",
        element: <PokeGridPage />,
    },
    {
        path: "/pokedex/:pokemonName",
        element: <PokedexPage />,
    }
]);

export const RouterProvider =  () => <BaseRouterProvider router={router} />;

