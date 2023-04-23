import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App"
import ActionPage from "./styles_films/ActionPage";
import ComedyPage from "./styles_films/ComedyPage";
import FantasyPage from "./styles_films/FantasyPage";
import HorrorPage from "./styles_films/HorrorPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([{
    path: "/",
    element: <App/>
},
    {
        path: "/horror",
        element: <HorrorPage/>
    },
    {
        path: "/comedy",
        element: <ComedyPage/>
    },
    {
        path: "/action",
        element: <ActionPage/>
    },
    {
        path: "/fantasy",
        element: <FantasyPage/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <RouterProvider router={router}/>

    </React.StrictMode>
);