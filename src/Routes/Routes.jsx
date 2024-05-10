import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componants/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/assignments'),
            },

        ]
    },
]);

export default router;