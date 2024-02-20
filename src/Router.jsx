import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "shop",
            element: <Shop />,
            errorElement: <ErrorPage />,
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;