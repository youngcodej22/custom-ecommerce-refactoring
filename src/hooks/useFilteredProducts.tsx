import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductListContext } from '../context/context';

const useFilteredProducts = () => {
    const { combinedProductsData } = useContext(ProductListContext);
    const { category, subcategory, thirdcategory } = useParams();

    const filteredProducts = combinedProductsData.filter(product => {
        if (subcategory === 'all') {
            // console.log('product_cate ', product.category);
            return product.category.toLowerCase() === category?.toLowerCase();
        } else if (subcategory !== 'all' && thirdcategory === 'all') {
            // console.log('product_sub ', product.subCategory);
            return (
                product.category.toLowerCase() === category?.toLowerCase() &&
                product.subCategory?.toLowerCase() ===
                    subcategory?.toLowerCase()
            );
        } else if (subcategory !== 'all' && thirdcategory !== 'all') {
            // console.log('product_third ', product.thirdCategory);
            return (
                product.category.toLowerCase() === category?.toLowerCase() &&
                product.subCategory?.toLowerCase() ===
                    subcategory?.toLowerCase() &&
                product.thirdCategory?.toLowerCase() ===
                    thirdcategory?.toLowerCase()
            );
        }
    });

    return filteredProducts;
};

export default useFilteredProducts;
