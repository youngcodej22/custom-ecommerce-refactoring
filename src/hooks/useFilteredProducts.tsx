import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FilterContext } from '../context/context';

const useFilteredProducts = () => {
    const { filteredProducts } = useContext(FilterContext);
    const { category, subcategory, thirdcategory } = useParams();

    const orderFilteredProducts = useMemo(() => {
        console.log('🚀 ~ filteredProducts:', filteredProducts);

        return filteredProducts.filter(product => {
            if (subcategory === 'all') {
                // console.log('product_cate ', product.category);
                return (
                    product.category.toLowerCase() === category?.toLowerCase()
                );
            } else if (subcategory !== 'all' && thirdcategory === 'all') {
                // console.log('product_sub ', product.subCategory);
                return (
                    product.category.toLowerCase() ===
                        category?.toLowerCase() &&
                    product.subCategory?.toLowerCase() ===
                        subcategory?.toLowerCase()
                );
            } else if (subcategory !== 'all' && thirdcategory !== 'all') {
                // console.log('product_third ', product.thirdCategory);
                return (
                    product.category.toLowerCase() ===
                        category?.toLowerCase() &&
                    product.subCategory?.toLowerCase() ===
                        subcategory?.toLowerCase() &&
                    product.thirdCategory?.toLowerCase() ===
                        thirdcategory?.toLowerCase()
                );
            }
        });
    }, [filteredProducts, category, subcategory, thirdcategory]);

    return orderFilteredProducts;
};

export default useFilteredProducts;
