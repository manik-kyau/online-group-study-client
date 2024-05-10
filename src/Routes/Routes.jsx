import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componants/Home/Home";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },

        ]
    },
]);

export default router;