import React from 'react';
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
import MyArtifacts from "../pages/MyArtifacts";
import LikedAritifacts from "../pages/LikedAritifacts";
import CivilizationDetail from '../pages/CivilizationDetails';

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
                element: <PrivatePage><MyArtifacts></MyArtifacts></PrivatePage>,
            },
            {
                path: '/updateartifacts/:id',
                element: <PrivatePage> <UpdateArtifacts></UpdateArtifacts></PrivatePage>,
            },
            {
                path: '/myartifacts/:id',
                element: <PrivatePage><UpdateArtifacts></UpdateArtifacts></PrivatePage>,
            },
            {
                path: '/all-artifacts',
                element: <AllArtifacts></AllArtifacts>,
                loader: () => fetch('https://historical-artifacts.vercel.app/api/allartifacts'),
            },
            {
                path: '/civilization/:civilization',
                element: <CivilizationDetail></CivilizationDetail>,
            },
            {
                path: '/liked-artifacts/:email',
                element: <PrivatePage><LikedAritifacts></LikedAritifacts></PrivatePage>,
            },
            {
                path: '/artifactsdetails/:id',
                element: <PrivatePage><AritfactsDetails></AritfactsDetails></PrivatePage>,
            },
            {
                path: '*',
                element: <Errorpage></Errorpage>
            }
        ]
    }
])

export default router;