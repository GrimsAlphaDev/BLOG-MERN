import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login, Register, CreateBlog, DetailBlog, Home } from "../../pages";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/create-blog",
        element: <CreateBlog />
    },
    {
        path: "/detail-blog",
        element: <DetailBlog />
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    }
]);

export default Router;
