import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// context
// import { TabsContext, useTabState } from './context/context';
import {
    TabsContext,
    useTabState,
    ProductListContext,
    usePagination,
    FilterContext,
    useFilter,
} from './context/context';
// pages
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Brand from './pages/Brand/Brand';
import History from './pages/History/History';
import Cart from './pages/Cart/Cart';
import Promotion from './pages/Promotion/Promotion';
import Coordination from './pages/Coordination/Coordination';

// data
import { combinedProductsData } from './data/products';

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
                path: 'productlist',
                element: <ProductList />,
                children: [
                    { index: true, element: <ProductList /> },
                    {
                        path: ':category/:subcategory/:thirdcategory',
                        element: <ProductList />,
                    },
                    {
                        path: ':category/:subcategory',
                        element: <ProductList />,
                    },
                    // { path: ':category/all', element: <ProductList /> },
                    // {
                    //     path: ':category',
                    //     element: <ProductList />,
                    // },
                    // { path: ':category/all', element: <ProductList /> },
                    // { path: ':category/all', element: <ProductList /> },
                ],
            },
            {
                path: '/productdetail',
                element: <ProductDetail />,
                // exact: true,
            },
            {
                path: 'brand',
                element: <Brand />,
                children: [
                    { index: true, element: <History /> },
                    { path: 'coordination', element: <Coordination /> },
                ],
            },
            {
                path: '/cart',
                element: <Cart />,
                // exact: true,
            },
            {
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
    const { isTabTitleOn, isTabBoxOn, handleClick } = useTabState();
    const { currentPage, setCurrentPage } = usePagination();
    // const { isColorActive, setIsColorActive } = useFilter();
    const {
        activeGenders,
        toggleGenderActive,
        activeColors,
        toggleColorActive,
        activeSizes,
        toggleSizeActive,
        activeSeason,
        toggleSeasonActive,
        resetGenderActive,
        resetColorActive,
        resetSizeActive,
        resetSeasonActive,
        filteredProducts,
        setFilteredProducts,
        selectedFilters,
        setSelectedFilters,
        priceRange,
        setPriceRange,
    } = useFilter(combinedProductsData);

    return (
        <TabsContext.Provider value={{ isTabTitleOn, isTabBoxOn, handleClick }}>
            {/* <ProductListContext.Provider value={{ context }}> */}
            <ProductListContext.Provider
                value={{
                    currentPage,
                    setCurrentPage,
                    combinedProductsData,
                }}
            >
                <FilterContext.Provider
                    value={{
                        activeGenders,
                        toggleGenderActive,
                        activeColors,
                        toggleColorActive,
                        activeSizes,
                        toggleSizeActive,
                        activeSeason,
                        toggleSeasonActive,
                        resetGenderActive,
                        resetColorActive,
                        resetSizeActive,
                        resetSeasonActive,
                        filteredProducts,
                        setFilteredProducts,
                        selectedFilters,
                        setSelectedFilters,
                        priceRange,
                        setPriceRange,
                    }}
                >
                    <RouterProvider router={router} />
                </FilterContext.Provider>
            </ProductListContext.Provider>
        </TabsContext.Provider>
    );
}

export default App;
