import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductListContext } from '../context/context';

const useFilteredProducts = () => {
    const { combinedProductsData } = useContext(ProductListContext);
    const { category, subcategory, thirdcategory } = useParams();

    // const filteredProducts = combinedProductsData.filter(product => {
    //     return (
    //         product.category.toLowerCase() === category?.toLowerCase() ||
    //         (product.category.toLowerCase() === category?.toLowerCase() &&
    //             product.subCategory?.toLowerCase() ===
    //                 subcategory?.toLowerCase()) ||
    //         (product.category.toLowerCase() === category?.toLowerCase() &&
    //             product.subCategory?.toLowerCase() ===
    //                 subcategory?.toLowerCase() &&
    //             product.thirdCategory?.toLowerCase() ===
    //                 thirdcategory?.toLowerCase())
    //     );
    // })

    const filteredProducts = combinedProductsData.filter(product => {
        if (subcategory === 'all') {
            return product.category.toLowerCase() === category?.toLowerCase();
        } else if (subcategory !== 'all' || thirdcategory === 'all') {
            console.log('**', subcategory);
            return (
                product.category.toLowerCase() === category?.toLowerCase() &&
                product.subCategory?.toLowerCase() ===
                    subcategory?.toLowerCase()
            );
        }
    });
    return filteredProducts;
};

export default useFilteredProducts;
