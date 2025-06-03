import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Banner from "../components/Banner/Banner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'banner',
                element: <Banner></Banner>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;