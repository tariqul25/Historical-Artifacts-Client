import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Banner from "../components/Banner/Banner";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import PrivatePage from "../pages/PrivatePage";
import UpdateArtifacts from "../pages/UpdateArtifacts";
import Errorpage from "../pages/Errorpage";
import AritfactsDetails from "../pages/AritfactsDetails";
import AllUpdater from "../pages/AllUpdater";
import MyArtifacts from "../pages/MyArtifacts";

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
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/add-artifacts',
                element: <PrivatePage><AddArtifacts></AddArtifacts></PrivatePage>
            },
            {
                path: '/shareartifacts/:email',
                element: <MyArtifacts></MyArtifacts>,
                loader: ({params})=> fetch(`http://localhost:3000/api/shareartifacts/email/${params.email}`),
            },
            {
                path: '/myartifacts/:id',
                element: <UpdateArtifacts></UpdateArtifacts>,
                loader: ({params})=> fetch(`http://localhost:3000/api/shareartifacts/${params.id}`),
            },
            {
                path: '/all-artifacts',
                element: <AllArtifacts></AllArtifacts>,
                loader: ()=> fetch('http://localhost:3000/api/allartifacts'),
            },
            {
                path: '/artifactsdetails/:id',
                element: <PrivatePage><AritfactsDetails></AritfactsDetails></PrivatePage>,
                loader: ({params})=> fetch(`http://localhost:3000/api/allartifacts/${params.id}`),
            },
            {
                path: '/updaterprofile',
                element: <AllUpdater></AllUpdater>
            },
            {
                path: 'liked-artifacts',
                element: <AddArtifacts></AddArtifacts>
            },
            {
                path: '*',
                element: <Errorpage></Errorpage>
            }
        ]
    }
])

export default router;