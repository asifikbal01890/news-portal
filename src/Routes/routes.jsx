import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout/MainLayout";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import About from "../Components/Pages/About/About";
import SignIn from "../Components/Pages/SignIn/SignIn";
import SignUp from "../Components/Pages/SingUp/SignUp";
import NationalNews from "../Components/Categories/NationalNews/NationalNews";
import BreakingNews from "../Components/Categories/BreakingNews/BreakingNews";
import InternationalNews from "../Components/Categories/InternationalNews/InternationalNews";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <HomeLayout></HomeLayout>,
                children:[
                    {
                        path: '/',
                        element: <NationalNews></NationalNews>
                    },
                    {
                        path: '/breakingNews',
                        element: <BreakingNews></BreakingNews>
                    },
                    {
                        path: '/internationalNews',
                        element: <InternationalNews></InternationalNews>
                    },
                    {
                        path: '/regularNews',
                        element: <InternationalNews></InternationalNews>
                    },
                    {
                        path: '/sports',
                        element: <InternationalNews></InternationalNews>
                    },
                    {
                        path: '/entertainment',
                        element: <InternationalNews></InternationalNews>
                    },
                    {
                        path: '/culture',
                        element: <InternationalNews></InternationalNews>
                    },
                    {
                        path: '/arts',
                        element: <InternationalNews></InternationalNews>
                    },
                ]
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