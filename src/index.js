import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router} />
);