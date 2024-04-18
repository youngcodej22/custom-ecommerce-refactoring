import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ProductListContext } from '../../context/context';

import './ProductListFilterCategoryBox.scss';

// ! pages/ProductList 중복 제거하기
// data
import newProductData from '../../data/json/products_new.json';
import womenProductData from '../../data/json/products_women.json';
import menProductData from '../../data/json/products_men.json';
import accProductData from '../../data/json/products_acc.json';
import outletProductData from '../../data/json/products_outlet.json';

interface Product {
    category: string;
    name: string;
    price: string;
    image: string;
    labels: string[][];
    acc: boolean;
    subCategory?: string;
    thirdCategory?: string;
    date: string;
    like: number;
    sale: number;
}

// combine datas
const combinedProductsData: Product[] = [
    ...newProductData,
    ...womenProductData,
    ...menProductData,
    ...accProductData,
    ...outletProductData,
];

interface MainCategory {
    title: string;
    subCategory?: string[];
}

interface ProductListFilterCategoryBoxProps {
    categoryItem: {
        title: string;
        mainCategory: MainCategory[];
    };
    // category: string;
    // subcategory: string;
    // thirdcategory: string;
}

interface RouteParams {
    category?: string;
    subcategory?: string;
    thirdcategory?: string;
}

interface ActiveSelection {
    mainCategory: string | null;
    subCategory: string | null;
}

const ProductListFilterCategoryBox: React.FC<
    ProductListFilterCategoryBoxProps
> = ({ id, categoryItem }) => {
    const { setCurrentPage } = useContext(ProductListContext);

    // ! state를 쓰면 re-rendering 문제때문에 useEffect까지 써야하는데, 이는 문제가 있다고 판단, 그래서 useParams를 이용해서 현재 url로 판단해서 처리했다.
    const { category, subcategory, thirdcategory } = useParams<RouteParams>();
    const [openSubCate, setOpenSubCate] = useState<null | number>(null);

    // ! 사이드바 tab 클릭 시 > subcategory 필터링
    // const [filteredProducts, setFilteredProducts] = useState([]);

    const [activeSelection, setActiveSelection] = useState<ActiveSelection>({
        mainCategory: null,
        subCategory: null,
    });

    const handleNavigate = () => {
        setCurrentPage(1);
    };

    const handleToggleSubCategory = (index: number) => {
        setOpenSubCate(prev => {
            return (
                (prev === index ? null : index) ||
                (categoryItem.title.toLowerCase() !== category ? null : index)
            );
        });
    };

    const filteredProducts = React.useMemo(() => {
        // const filtered = combinedProductsData.filter(
        //     product =>
        //         product.category.toLowerCase() === category?.toLowerCase(),
        // );

        // return filtered;

        let filtered;

        if (category && subcategory && thirdcategory) {
            return (filtered = combinedProductsData.filter(
                product =>
                    product.category.toLowerCase() === category.toLowerCase() &&
                    product.subCategory?.toLowerCase() ===
                        subcategory.toLowerCase() &&
                    product.thirdCategory?.toLowerCase() ===
                        thirdcategory.toLowerCase(),
            ));
        } else if (subcategory === 'all') {
            return (filtered = combinedProductsData.filter(
                product =>
                    product.category.toLowerCase() === category?.toLowerCase(),
            ));
        } else if (thirdcategory === 'all') {
            return (filtered = combinedProductsData.filter(
                product =>
                    product.subCategory?.toLowerCase() ===
                    subcategory?.toLowerCase(),
            ));
        }

        //  else if (category) {
        // If only category is specified, filter products based on the category
        //     return combinedProductsData.filter(
        //         product =>
        //             product.category.toLowerCase() === category.toLowerCase(),
        //     );
        // } else if (thirdcategory === 'all') {
        //     return combinedProductsData.filter(
        //         product =>
        //             product.subCategory?.toLowerCase() ===
        //             thirdcategory.toLowerCase(),
        //     );
        // }

        // Optionally, handle other cases, such as when neither category nor thirdcategory is specified
        // This step depends on your application's requirements
        return filtered;
    }, [category, subcategory, thirdcategory]);

    console.log('*filteredProducts ', filteredProducts);

    // useEffect(() => {
    //     // Filter products based on the subcategory from the URL
    //     if (subcategory) {
    //         const filtered = combinedProductsData.filter(
    //             product =>
    //                 product.subCategory.toLowerCase() ===
    //                 subcategory.toLowerCase(),
    //         );
    //         setFilteredProducts(filtered);
    //     }

    //     console.log('**filter:');
    // }, [subcategory]);

    return (
        <dl className="product-list-filter-category-box cate_box">
            <dt>{categoryItem.title}</dt>
            <dd>
                <div className="cate_list">
                    <ul className="cate-list-ul-deps-1">
                        {categoryItem.mainCategory.map((mainCat, mainIndex) => {
                            return (
                                <li
                                    key={mainIndex}
                                    className="cate-list-li-deps-1"
                                >
                                    {mainCat.subCategory?.length === 0 ? (
                                        <Link
                                            to={`/productlist/${categoryItem.title.toLowerCase()}/all`}
                                            className={
                                                categoryItem.title.toLowerCase() ===
                                                    category &&
                                                !activeSelection.mainCategory
                                                    ? 'on'
                                                    : ''
                                            }
                                            onClick={() => {
                                                handleNavigate();
                                                setActiveSelection({
                                                    mainCategory: null,
                                                    subCategory: null,
                                                });
                                                setOpenSubCate(null);
                                            }}
                                        >
                                            {mainCat.title}
                                        </Link>
                                    ) : (
                                        <span
                                            className={
                                                openSubCate === mainIndex &&
                                                activeSelection.mainCategory ===
                                                    mainCat.title.toLowerCase()
                                                    ? 'on'
                                                    : ''
                                            }
                                            onClick={() => {
                                                handleToggleSubCategory(
                                                    mainIndex,
                                                );
                                                setActiveSelection({
                                                    mainCategory:
                                                        mainCat.title.toLowerCase(),
                                                    subCategory: null,
                                                });
                                            }}
                                        >
                                            {mainCat.title}
                                        </span>
                                    )}
                                    {mainCat.subCategory &&
                                        mainCat.subCategory.length > 0 && (
                                            <ul
                                                className={
                                                    openSubCate === mainIndex
                                                        ? 'cate-list-ul-deps-2 on'
                                                        : 'cate-list-ul-deps-2'
                                                }
                                            >
                                                {mainCat.subCategory.map(
                                                    (subCat, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="cate-list-li-deps-2"
                                                        >
                                                            <Link
                                                                to={`/productlist/${categoryItem.title.toLowerCase()}/${mainCat.title.toLowerCase()}/${subCat.toLowerCase()}`}
                                                                className={
                                                                    thirdcategory ===
                                                                        subCat.toLowerCase() &&
                                                                    activeSelection.subCategory !==
                                                                        null
                                                                        ? 'on'
                                                                        : ''
                                                                }
                                                                onClick={() => {
                                                                    setActiveSelection(
                                                                        {
                                                                            mainCategory:
                                                                                mainCat.title.toLowerCase(),
                                                                            subCategory:
                                                                                subCat.toLowerCase(),
                                                                        },
                                                                    );
                                                                }}
                                                            >
                                                                {subCat}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </dd>
        </dl>
    );
};

export default ProductListFilterCategoryBox;
