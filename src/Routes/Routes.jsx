import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componants/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MySubmited from "../Pages/MySubmited/MySubmited";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import GiveMark from "../Pages/GiveMark/GiveMark";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
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
                loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`),
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: '/mySubmited',
                element: <PrivateRoute><MySubmited></MySubmited></PrivateRoute>,
            },
            {
                path: '/pendingAssignment',
                element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>,
            },
            {
                path: '/givemark/:id',
                element: <PrivateRoute><GiveMark></GiveMark></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/submits/${params.id}`)
            },

        ]
    },
]);

export default router;