import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FilterContext, ProductListContext } from '../../context/context';

import './ProductListFilterCategoryBox.scss';
interface MainCategory {
    title: string;
    subCategory: string;
    thirdCategory?: string[];
}

interface ProductListFilterCategoryBoxProps {
    categoryItem: {
        title: string;
        mainCategory: MainCategory[];
    };
}

interface RouteParams {
    [key: string]: string | undefined;
    category?: string;
    subcategory?: string;
    thirdcategory?: string;
}

interface ActiveSelection {
    mainCategory: string | null;
    subCategory: string | null;
    thirdCategory: string | null;
}

const ProductListFilterCategoryBox: React.FC<
    ProductListFilterCategoryBoxProps
> = ({ id, categoryItem }) => {
    const { setCurrentPage } = useContext(ProductListContext);
    const { setSelectedFilters } = useContext(FilterContext);

    // ! state를 쓰면 re-rendering 문제때문에 useEffect까지 써야하는데, 이는 문제가 있다고 판단, 그래서 useParams를 이용해서 현재 url로 판단해서 처리했다.
    const { category, thirdcategory } = useParams<RouteParams>();
    const [openSubCate, setOpenSubCate] = useState<null | number>(null);

    const [activeSelection, setActiveSelection] = useState<ActiveSelection>({
        mainCategory: null,
        subCategory: null,
        thirdCategory: null,
    });

    const handleNavigate = () => {
        setCurrentPage(1);
    };

    const handleToggleSubCategory = (index: number) => {
        setOpenSubCate(prev => {
            return prev === index ? null : index;
        });
    };

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
                                    {mainCat.thirdCategory?.length === 0 ? (
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
                                                    thirdCategory: null,
                                                });
                                                setOpenSubCate(null);
                                                setSelectedFilters([]);
                                            }}
                                        >
                                            {mainCat.subCategory}
                                        </Link>
                                    ) : (
                                        <span
                                            className={
                                                openSubCate === mainIndex
                                                    ? 'on'
                                                    : ''
                                            }
                                            onClick={() => {
                                                handleToggleSubCategory(
                                                    mainIndex,
                                                );
                                                setActiveSelection({
                                                    mainCategory:
                                                        categoryItem.title.toLowerCase(),
                                                    subCategory:
                                                        mainCat.subCategory.toLowerCase(),
                                                    thirdCategory: null,
                                                });
                                                setSelectedFilters([]);
                                            }}
                                        >
                                            {mainCat.subCategory}
                                        </span>
                                    )}
                                    {mainCat.subCategory &&
                                        mainCat.thirdCategory?.length > 0 && (
                                            <ul
                                                className={
                                                    openSubCate === mainIndex
                                                        ? 'cate-list-ul-deps-2 on'
                                                        : 'cate-list-ul-deps-2'
                                                }
                                            >
                                                {mainCat.thirdCategory?.map(
                                                    (thirdCat, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="cate-list-li-deps-2"
                                                        >
                                                            <Link
                                                                to={`/productlist/${categoryItem.title.toLowerCase()}/${mainCat.subCategory.toLowerCase()}/${thirdCat.toLowerCase()}`}
                                                                className={
                                                                    categoryItem.title.toLowerCase() ===
                                                                        category &&
                                                                    thirdcategory ===
                                                                        thirdCat.toLowerCase() &&
                                                                    activeSelection.thirdCategory !==
                                                                        null
                                                                        ? 'on'
                                                                        : ''
                                                                }
                                                                onClick={() => {
                                                                    handleNavigate();
                                                                    setActiveSelection(
                                                                        {
                                                                            mainCategory:
                                                                                categoryItem.title.toLowerCase(),
                                                                            subCategory:
                                                                                mainCat.subCategory.toLowerCase(),
                                                                            thirdCategory:
                                                                                thirdCat.toLowerCase(),
                                                                        },
                                                                    );
                                                                    setSelectedFilters(
                                                                        [],
                                                                    );
                                                                }}
                                                            >
                                                                {thirdCat}
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
