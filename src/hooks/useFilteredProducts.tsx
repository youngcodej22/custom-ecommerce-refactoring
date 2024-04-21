import { useContext } from 'react';
import { ProductListContext } from '../context/context';

const useFilteredProducts = () => {
    const { combinedProductsData, category, subcategory, thirdcategory } =
        useContext(ProductListContext);

    const filteredProducts = combinedProductsData.filter(product => {
        // Your filtering conditions based on category, subcategory, and thirdcategory
    });

    return filteredProducts;
};

export default useFilteredProducts;
