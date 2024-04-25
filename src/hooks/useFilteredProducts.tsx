import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductListContext } from '../context/context';

// const useFilteredProducts = (
//     category: string | null,
//     subcategory: string | null,
//     thirdcategory: string | null,
// ) => {
const useFilteredProducts = () => {
    const { combinedProductsData } = useContext(ProductListContext);
    const { category, subcategory, thirdcategory } = useParams();
    // const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

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
    // });

    // console.log('cate: ', category);
    // console.log('sub: ', subcategory);
    // console.log('third: ', thirdcategory);

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

    // useEffect(() => {
    //     // const newFilteredProducts = combinedProductsData.filter(
    //     //     product =>
    //     //         product.category.toLowerCase() === category?.toLowerCase() &&
    //     //         (subcategory === 'all' ||
    //     //             product.subCategory?.toLowerCase() ===
    //     //                 subcategory?.toLowerCase()),
    //     // );
    //     const newFilteredProducts = combinedProductsData.filter(product => {
    //         if (subcategory === 'all') {
    //             return (
    //                 product.category.toLowerCase() === category?.toLowerCase()
    //             );
    //         } else if (subcategory !== 'all' || thirdcategory === 'all') {
    //             console.log('**', subcategory);
    //             return (
    //                 product.category.toLowerCase() ===
    //                     category?.toLowerCase() &&
    //                 product.subCategory?.toLowerCase() ===
    //                     subcategory?.toLowerCase()
    //             );
    //         }
    //     });
    //     setFilteredProducts(newFilteredProducts);
    // }, [category, subcategory, thirdcategory, combinedProductsData]); // Dependency array

    return filteredProducts;
};

export default useFilteredProducts;
