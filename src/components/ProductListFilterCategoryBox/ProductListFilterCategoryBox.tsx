import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ProductListContext } from '../../context/context';

import './ProductListFilterCategoryBox.scss';

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
    let navigate = useNavigate();
    // const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [openSubCate, setOpenSubCate] = useState<null | number>(null);

    const [activeSelection, setActiveSelection] = useState<ActiveSelection>({
        mainCategory: null,
        subCategory: null,
    });
    const [checkCategory, setCheckCategory] = useState<null | number>(null);

    const handleNavigate = () => {
        setCurrentPage(1);
    };

    const handleNavigateSub = (mainCatTitle: string, subCat: string) => {
        // Assuming mainCatTitle and subCat are the titles of the main category and subcategory respectively
        // Navigate to the new URL including the third category
        // navigate(
        //     `/productlist/${categoryItem.title.toLowerCase()}/${mainCatTitle.toLowerCase()}/${subCat.toLowerCase()}`,
        // );
    };

    const idNum = [
        {
            women: 1,
        },
        {
            men: 2,
        },
        {
            acc: 3,
        },
        {
            outlet: 4,
        },
    ];

    // const values = Object.values(idNum);
    // console.log(
    //     'value',
    //     values.forEach(value => console.log(value)),
    // );

    const handleToggleSubCategory = (
        index: number,
        categoryTitle: string,
        id: number,
    ) => {
        console.log('*id', id);
        // setOpenSubCate(!openSubCate);
        // setOpenSubCate(prev => (prev === index ? null : index));

        // setCheckCategory(categoryTitle);
        // const compareTitle = categoryTitle => {
        //     let prevCategoryTitle = [];
        //     // if (prevCategoryTitle.length >= 3) {
        //     //     prevCategoryTitle.shift();
        //     // }

        //     let innerFunc = () => {
        //         prevCategoryTitle.push(categoryTitle);
        //         return prevCategoryTitle;
        //     };
        //     return innerFunc;
        // };
        // let inner = compareTitle(categoryTitle);
        // const prevCate = inner();

        // const compareTitle = (categoryTitle: string) => {
        //     let prevCategoryTitle = '';
        //     prevCategoryTitle = categoryTitle;
        //     return prevCategoryTitle;
        // };

        // function outerFunc(categoryTitle: string) {
        //     // 외부 함수의 변수
        //     let prevCategoryTitle = '';

        //     // 내부 함수에서 외부 함수의 변수에 접근할 수 있습니다.
        //     let innerFunc = function () {
        //         return (prevCategoryTitle = categoryTitle);
        //     };

        //     return innerFunc;
        // }

        // let inner = outerFunc();
        // const result = inner();
        // console.log('result ', result);

        // setCheckCategory(prevId => {
        //     console.log('pre id', prevId);
        // });

        setOpenSubCate(prev => {
            console.log('*prev :', prev);
            console.log('**index: ', index);
            console.log('***title: ', categoryTitle);
            console.log('***set-id', checkCategory);
            // return (prev === index ? null : index) ||
            //     checkCategory === categoryTitle
            //     ? null
            //     : index;
            return (
                (prev === index ? null : index) ||
                (categoryItem.title.toLowerCase() !== category ? null : index)
            );
        });

        // console.log('@category: ', category);
        // console.log('@@cate-title : ', categoryItem.title.toLowerCase());

        // if (category !== categoryItem.title.toLowerCase()) {
        //     setOpenSubCate(null);
        // }
        // console.log('index: ', index);
    };

    // useEffect(() => {
    //     setCheckCategory(id);
    //     console.log('실행', checkCategory);
    // }, [id]);

    // const handleSideCategoryClick = (categoryTitle: string) => {
    //     if (categoryTitle.toLowerCase() === category) {

    //     }

    // if (categoryTitle === )

    // setSideCateActive(categoryTitle);
    // setSideCateActive(prevState =>
    //     prevState === categoryTitle ? '' : categoryTitle,
    // );
    // console.log('**', categoryTitle, all, sideCateActive);
    // ! 여기에서 sideCateActive 즉각 바뀌지 않는다. 리렌더링 생겨야 인식
    // console.log(sideCateActive);
    // };

    // useEffect(() => {
    // setActiveSelection({
    //     mainCategory: category ?? null,
    //     subCategory: null,
    // });
    // }, [activeSelection]);

    // const categoryItemTitle = categoryItem.title.toLowerCase();

    // const checkId = (id: number, categoryItemTitle: string): boolean => {
    //     console.log('check ID', id);

    //     return categoryItemTitle === category;

    //     // return idNum[id - 1][`'${categoryItemTitle}'`] === id;
    //     // const item = idNum[id - 1];
    //     // const key = categoryItemTitle as keyof typeof item;
    //     // console.log('@@@', item[key] === id);
    //     // return item[key] === id;
    // };

    return (
        <dl className="product-list-filter-category-box cate_box">
            <dt>{categoryItem.title}</dt>
            <dd>
                <div className="cate_list">
                    <ul className="cate-list-ul-deps-1">
                        {/* {categoryItem.mainCategory.map((mainCat, mainIndex) => (
                            <li key={mainIndex}>
                                {mainCat.subCategory?.length === 0 ? (
                                    // <Link
                                    //     to={`/productlist/${categoryItem.title.toLowerCase()}`}
                                    //     className={
                                    //         sideCateActive === mainCat.title
                                    //             ? 'on'
                                    //             : ''
                                    //     }
                                    //     onClick={() =>
                                    //         handleSideCategoryClick(
                                    //             mainCat.title,
                                    //         )
                                    //     }
                                    // >
                                    //     {mainCat.title}
                                    // </Link>
                                    <Link
                                        to={`/productlist/${categoryItem.title.toLowerCase()}/all`}
                                        // className={
                                        //     sideCateActive === mainCat.title
                                        //         ? 'on'
                                        //         : ''
                                        // }
                                        className={
                                            categoryItem.title.toLowerCase() ===
                                            category
                                                ? 'on'
                                                : ''
                                        }
                                        onClick={() => handleNavigate()}
                                        // onClick={() =>
                                        //     handleSideCategoryClick(
                                        //         categoryItem.title,
                                        //     )
                                        // }
                                    >
                                        {mainCat.title}
                                    </Link>
                                ) : (
                                    <span
                                        className={
                                            mainCat.title.toLowerCase() ===
                                            subcategory
                                                ? 'on'
                                                : ''
                                        }
                                        onClick={() =>
                                            handleToggleSubCategory(mainIndex)
                                        }
                                    >
                                        {mainCat.title}
                                    </span>
                                )}
                                {mainCat.subCategory &&
                                    mainCat.subCategory.length > 0 && (
                                        <ul
                                            className={
                                                openSubCate === mainIndex
                                                    ? 'on'
                                                    : ''
                                            }
                                        >
                                            {mainCat.subCategory.map(
                                                (subCat, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={`/productlist/${categoryItem.title.toLowerCase()}/${
                                                                mainCat.title
                                                            }/${subCat.toLowerCase()}`}
                                                            onClick={handleNavigateSub(
                                                                mainCat.title,
                                                                subCat,
                                                            )}
                                                        >
                                                            {subCat}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    )}
                            </li>
                        ))} */}

                        {categoryItem.mainCategory.map((mainCat, mainIndex) => {
                            // console.log(
                            //     'mainCat: ',
                            //     mainCat.title,
                            //     'sub:',
                            //     subcategory,
                            //     'thid:',
                            //     thirdcategory,
                            // );
                            // console.log(
                            //     'cate-title: ',
                            //     categoryItem.title.toLowerCase(),
                            // );
                            // console.log('cate param: ', category);
                            // console.log('activeSelection: ', activeSelection);
                            // console.log(
                            //     'main cat',
                            //     mainCat.title.toLowerCase(),
                            // );
                            return (
                                <li
                                    key={mainIndex}
                                    className="cate-list-li-deps-1"
                                >
                                    {mainCat.subCategory?.length === 0 ? (
                                        // <Link
                                        //     to={`/productlist/${categoryItem.title.toLowerCase()}`}
                                        //     className={
                                        //         sideCateActive === mainCat.title
                                        //             ? 'on'
                                        //             : ''
                                        //     }
                                        //     onClick={() =>
                                        //         handleSideCategoryClick(
                                        //             mainCat.title,
                                        //         )
                                        //     }
                                        // >
                                        //     {mainCat.title}
                                        // </Link>
                                        <Link
                                            to={`/productlist/${categoryItem.title.toLowerCase()}/all`}
                                            // className={
                                            //     sideCateActive === mainCat.title
                                            //         ? 'on'
                                            //         : ''
                                            // }
                                            // className={
                                            //     categoryItem.title.toLowerCase() ===
                                            //     category
                                            //         ? 'on'
                                            //         : ''
                                            // }
                                            // className={
                                            //     activeSelection.mainCategory ===
                                            //         mainCat.title.toLowerCase() &&
                                            //     !activeSelection.subCategory
                                            //         ? 'on'
                                            //         : ''
                                            // }
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
                                            // onClick={() =>
                                            //     handleSideCategoryClick(
                                            //         categoryItem.title,
                                            //     )
                                            // }
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
                                                    categoryItem.title.toLowerCase(),
                                                    id,
                                                );
                                                // setActiveCategory(
                                                //     mainCat.title.toLowerCase(),
                                                // );
                                                setActiveSelection({
                                                    mainCategory:
                                                        mainCat.title.toLowerCase(),
                                                    subCategory: null,
                                                });

                                                // setCheckCategory(id);
                                            }}
                                        >
                                            {mainCat.title}
                                        </span>
                                    )}
                                    {mainCat.subCategory &&
                                        mainCat.subCategory.length > 0 && (
                                            //     <ul
                                            //         className={
                                            //             openSubCate === mainIndex &&
                                            //             idNum[id - 1][
                                            //                 `'${categoryItemTitle}'`
                                            //             ] === id
                                            //                 ? 'cate-list-ul-deps-2 on'
                                            //                 : 'cate-list-ul-deps-2'
                                            //         }
                                            // >
                                            <ul
                                                className={
                                                    openSubCate === mainIndex
                                                        ? // && checkId(
                                                          //     id,
                                                          //     categoryItemTitle,
                                                          // )
                                                          'cate-list-ul-deps-2 on'
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
                                                                // className={
                                                                //     activeSelection.subCategory ===
                                                                //     subCat.toLowerCase()
                                                                //         ? 'on'
                                                                //         : ''
                                                                // }
                                                                onClick={() => {
                                                                    handleNavigateSub(
                                                                        mainCat.title,
                                                                        subCat,
                                                                    );
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
