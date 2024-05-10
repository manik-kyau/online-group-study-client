import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componants/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";

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
                path: '/createAssignment',
                element: <CreateAssignment></CreateAssignment>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },
]);

export default router;