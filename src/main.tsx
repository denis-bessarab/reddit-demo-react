import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Navbar} from "@/global-components/Navbar/Navbar";
import "./global-styles/style.scss";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/reddit-demo-react/",
        element: <App/>,
    },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Navbar/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
