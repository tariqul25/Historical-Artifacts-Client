<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
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
<<<<<<< HEAD
import LikedAritifacts from "../pages/LikedAritifacts";
=======
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b

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
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://histoic-artifacts-server.vercel.app/api/shareartifacts/email/${params.email}`),
            },
            {
                path: '/updateartifacts/:id',
                element: <UpdateArtifacts></UpdateArtifacts>,
                loader: ({ params }) => fetch(`https://histoic-artifacts-server.vercel.app/api/shareartifacts/${params.id}`),
=======
                loader: ({params})=> fetch(`http://localhost:3000/api/shareartifacts/email/${params.email}`),
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
            },
            {
                path: '/myartifacts/:id',
                element: <UpdateArtifacts></UpdateArtifacts>,
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://histoic-artifacts-server.vercel.app/api/shareartifacts/${params.id}`),
=======
                loader: ({params})=> fetch(`http://localhost:3000/api/shareartifacts/${params.id}`),
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
            },
            {
                path: '/all-artifacts',
                element: <AllArtifacts></AllArtifacts>,
<<<<<<< HEAD
                loader: () => fetch('https://histoic-artifacts-server.vercel.app/api/allartifacts'),
            },
            {
                path: '/liked-artifacts/:email',
                element: <PrivatePage><LikedAritifacts></LikedAritifacts></PrivatePage>,
=======
                loader: ()=> fetch('http://localhost:3000/api/allartifacts'),
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
            },
            {
                path: '/artifactsdetails/:id',
                element: <PrivatePage><AritfactsDetails></AritfactsDetails></PrivatePage>,
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://histoic-artifacts-server.vercel.app/api/allartifacts/${params.id}`),
=======
                loader: ({params})=> fetch(`http://localhost:3000/api/allartifacts/${params.id}`),
            },
            {
                path: '/updaterprofile',
                element: <AllUpdater></AllUpdater>
            },
            {
                path: 'liked-artifacts',
                element: <AddArtifacts></AddArtifacts>
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
            },
            {
                path: '*',
                element: <Errorpage></Errorpage>
            }
        ]
    }
])

export default router;