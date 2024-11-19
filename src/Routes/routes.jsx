import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout/MainLayout";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import About from "../Components/Pages/About/About";
import SignIn from "../Components/Pages/SignIn/SignIn";
import SignUp from "../Components/Pages/SingUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <HomeLayout></HomeLayout>
            },
            {
                path:"/about",
                element: <About></About>
            },
            {
                path:"/signIn",
                element: <SignIn></SignIn>
            },
            {
                path:"/signUp",
                element: <SignUp></SignUp>
            },
        ]
    }
 ])