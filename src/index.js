import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from "./App"
import HorrorPage from "./components/styles_films/HorrorPage";
import ComedyPage from "./components/styles_films/ComedyPage";
import ActionPage from "./components/styles_films/ActionPage";
import FantasyPage from "./components/styles_films/FantasyPage";
import AddFilm from "./components/optionalFilms/AddFilm";
import DeleteFilm from "./components/optionalFilms/DeleteFilm";
import FindFilm from "./components/optionalFilms/FindFilm";
import NotFound from "./components/styles_films/NotFound";


const route = createBrowserRouter(
    [{
        path: "/",
        element: <App />
    },
        {
            path: "/horror",
            element: <HorrorPage />
        },
        {
            path: "/comedy",
            element: <ComedyPage />
        },
        {
            path: "/action",
            element: <ActionPage />
        },
        {
            path: "/fantasy",
            element: <FantasyPage />
        },
        {
            path: "/addFilm",
            element: <AddFilm />
        },
        {
            path: "/deleteFilm",
            element: <DeleteFilm />
        },
        {
            path: "/findFilm",
            element: <FindFilm />
        },
        {
            path:"/*",
            element:<NotFound />
        }

    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <RouterProvider router={route}/>

    </React.StrictMode>
);
