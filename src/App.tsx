import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Header from './components/Header/Header';
// import Contents from './components/Contents/Contents';
// import Footer from './components/Footer/Footer';

import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Brand from './pages/Brand/Brand';
import Cart from './pages/Cart/Cart';
import Promotion from './pages/Promotion/Promotion';

import './styles/components/style.css';

const router = createBrowserRouter([
    {
        path: '/',
        // exact: true,
        // element: <Layout isOn={isOn} setIsOn={setIsOn} />,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />,
                // loader: homeLoader,
            },
            {
                index: true,
                path: '/productlist',
                element: <ProductList />,
                // exact: true,
            },
            {
                index: true,
                path: '/productdetail',
                element: <ProductDetail />,
                // exact: true,
            },
            {
                index: true,
                path: '/brand',
                element: <Brand />,
                // exact: true,
            },
            {
                index: true,
                path: '/cart',
                element: <Cart />,
                // exact: true,
            },
            {
                index: true,
                path: '/promotion',
                element: <Promotion />,
                // exact: true,
            },
        ],
    },

    // {
    //     path: '/main/:id',
    //     element: Contents,
    // },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
