import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import Login from "../Pages/Login/Login/Login";
import SingUp from "../Pages/Login/SingUp/SingUp";
import Terms from "../Pages/Terms/Terms";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addJob',
                element: <PrivetRoutes><AddJob></AddJob></PrivetRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    }
])

export default router;