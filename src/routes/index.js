import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Pricing = lazy(() => import('../pages/Pricing'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const ROUTES = [
    {
        name: 'Home',
        icon: false,
        path: '/',
        protected: true,
        component: Home,
        hideInNav: false,
        children: [],
    },
    {
        name: 'Pricing',
        icon: false,
        path: '/pricing',
        protected: true,
        component: Pricing,
        hideInNav: false,
        children: [],
    },
    {
        name: 'About',
        icon: false,
        path: '/about',
        protected: true,
        component: About,
        hideInNav: false,
        children: [],
    },
    {
        name: 'Contact',
        icon: false,
        path: '/contact',
        protected: true,
        component: Contact,
        hideInNav: false,
        children: [],
    },
    {
        name: 'Page Not Found',
        icon: false,
        path: '*',
        protected: false,
        component: PageNotFound,
        hideInNav: true,
        children: [],
    },
];

export default ROUTES;
