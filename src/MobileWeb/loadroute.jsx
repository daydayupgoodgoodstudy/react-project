
import Loadable from 'react-loadable';
import React from 'react';
import { Loading } from "./components/loading"



export const Home = Loadable({
    loader: () => import('./contents/home'),
    loading() {
        return <Loading />
    },
});


export const Login = Loadable({
    loader: () => import('./contents/login'),
    loading() {
        return <Loading />
    },
});


