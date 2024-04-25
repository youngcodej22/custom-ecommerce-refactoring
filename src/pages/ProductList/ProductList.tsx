import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
// component
import ProductCard from '../../components/ProductCard/ProductCard';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductListFilter from '../../components/ProductListFilter/ProductListFilter';
import ProductListFilterSidebar from '../../components/ProductListFilterSidebar/ProductListFilterSidebar';
// style
import './ProductList.scss';
// assets
import iconPrev from '/assets/icon/icon-pagination-prev.png';
import iconNext from '/assets/icon/icon-pagination-next.png';
import iconFirst from '/assets/icon/icon-pagination-first.png';
import iconLast from '/assets/icon/icon-pagination-last.png';
// import iconBasket from '/assets/icon/icon-basket.png';
// import iconBasketGet from '/assets/icon/icon-basket-get.png';
// state management
import { ProductListContext } from '../../context/context';
import useFilteredProducts from '../../hooks/useFilteredProducts';

const ProductList: React.FC = () => {
    // ! useState 대신 사용
    // const [currentPage, setCurrentPage] = useState(page);
    // const { currentPage, setCurrentPage, combinedProductsData } =
    // useContext(ProductListContext);
    const { currentPage, setCurrentPage } = useContext(ProductListContext);

    // State to keep track of visible page range
    const [visiblePages, setVisiblePages] = useState<number[]>([]);
    // .filter_open_btn 누르면 .side_cont를 닫기
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    // ! input radio 선택 (ProductListFilter)
    const [sortOption, setSortOption] = useState('');
    const handleSortChange = (option: string) => {
        setSortOption(option);
    };

    // button: 필터 ON / OFF
    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    // react-router-dom
    const { category, subcategory, thirdcategory } = useParams();
    // console.log('🚀 ~ category:', category);
    // console.log('🚀 ~ subcategory:', subcategory);
    // console.log('🚀 ~ thirdcategory:', thirdcategory);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const filteredProducts = useFilteredProducts();

    // ! sort 2차 성공: 오름차순, 내림차순 동작 그리고 MEN, WOMEN 등 탭 바뀌어도 필터링 유지
    // const sortedAndFilteredProducts = React.useMemo(() => {
    //     const filtered = combinedProductsData.filter(
    //         product =>
    //             product.category.toLowerCase() === category?.toLowerCase(),
    //     );

    //     // ? 문제: 오름차순해도 1,000,000원 상품이 가장 상단에 오는게 문제
    //     // ! 해결: parseInt()는 ,에 관계 없이 첫자리 1에 대해서 정렬을 하기 때문에 ','를 제거하는 방법을 사용해야한다.
    //     if (sortOption === 'price_asc') {
    //         return filtered.sort((a, b) => {
    //             // Remove commas before parsing as integer
    //             const priceA = parseInt(a.price.replace(/,/g, ''), 10);
    //             const priceB = parseInt(b.price.replace(/,/g, ''), 10);
    //             return priceA - priceB;
    //         });
    //     } else if (sortOption === 'price_dsc') {
    //         return filtered.sort((a, b) => {
    //             // Remove commas before parsing as integer
    //             const priceA = parseInt(a.price.replace(/,/g, ''), 10);
    //             const priceB = parseInt(b.price.replace(/,/g, ''), 10);
    //             return priceB - priceA;
    //         });
    //     } else if (sortOption === 'date') {
    //         return filtered.sort((a, b) => {
    //             const dateA = new Date(a.date);
    //             const dateB = new Date(b.date);
    //             return dateB.getTime() - dateA.getTime();
    //         });
    //     } else if (sortOption === 'like') {
    //         return filtered.sort((a, b) => b.like - a.like);
    //     } else if (sortOption === 'sale') {
    //         return filtered.sort((a, b) => b.sale - a.sale);
    //     }

    //     return filtered;
    // }, [category, sortOption]);

    // const sortedAndFilteredProducts = useMemo(() => {
    //     const filtered = filteredProducts;

    //     // ? 문제: 오름차순해도 1,000,000원 상품이 가장 상단에 오는게 문제
    //     // ! 해결: parseInt()는 ,에 관계 없이 첫자리 1에 대해서 정렬을 하기 때문에 ','를 제거하는 방법을 사용해야한다.
    //     if (sortOption === 'price_asc') {
    //         return filtered.sort((a, b) => {
    //             // Remove commas before parsing as integer
    //             const priceA = parseInt(a.price.replace(/,/g, ''), 10);
    //             const priceB = parseInt(b.price.replace(/,/g, ''), 10);
    //             return priceA - priceB;
    //         });
    //     } else if (sortOption === 'price_dsc') {
    //         return filtered.sort((a, b) => {
    //             // Remove commas before parsing as integer
    //             const priceA = parseInt(a.price.replace(/,/g, ''), 10);
    //             const priceB = parseInt(b.price.replace(/,/g, ''), 10);
    //             return priceB - priceA;
    //         });
    //     } else if (sortOption === 'date') {
    //         return filtered.sort((a, b) => {
    //             const dateA = new Date(a.date);
    //             const dateB = new Date(b.date);
    //             return dateB.getTime() - dateA.getTime();
    //         });
    //     } else if (sortOption === 'like') {
    //         return filtered.sort((a, b) => b.like - a.like);
    //     } else if (sortOption === 'sale') {
    //         return filtered.sort((a, b) => b.sale - a.sale);
    //     }

    //     return filtered;
    // }, [category, subcategory, thirdcategory, sortOption]);

    const sortedAndFilteredProducts = () => {
        const filtered = filteredProducts;

        // ? 문제: 오름차순해도 1,000,000원 상품이 가장 상단에 오는게 문제
        // ! 해결: parseInt()는 ,에 관계 없이 첫자리 1에 대해서 정렬을 하기 때문에 ','를 제거하는 방법을 사용해야한다.
        if (sortOption === 'price_asc') {
            return filtered.sort((a, b) => {
                // Remove commas before parsing as integer
                const priceA = parseInt(a.price.replace(/,/g, ''), 10);
                const priceB = parseInt(b.price.replace(/,/g, ''), 10);
                return priceA - priceB;
            });
        } else if (sortOption === 'price_dsc') {
            return filtered.sort((a, b) => {
                // Remove commas before parsing as integer
                const priceA = parseInt(a.price.replace(/,/g, ''), 10);
                const priceB = parseInt(b.price.replace(/,/g, ''), 10);
                return priceB - priceA;
            });
        } else if (sortOption === 'date') {
            return filtered.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
            });
        } else if (sortOption === 'like') {
            return filtered.sort((a, b) => b.like - a.like);
        } else if (sortOption === 'sale') {
            return filtered.sort((a, b) => b.sale - a.sale);
        }

        return filtered;
    };

    const countProducts = sortedAndFilteredProducts().length;

    // pagination
    const itemsPerPage = 20;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = sortedAndFilteredProducts.slice(
    const currentItems = sortedAndFilteredProducts().slice(
        indexOfFirstItem,
        indexOfLastItem,
    );
    const totalPages = Math.ceil(
        sortedAndFilteredProducts().length / itemsPerPage,
    );

    // * 초기화
    useEffect(() => {
        setCurrentPage(page);
    }, []);

    useEffect(() => {
        // Calculate the start of the current pagination window
        const paginationWindowStart =
            Math.floor((currentPage - 1) / 10) * 10 + 1;

        // Calculate the end of the current pagination window
        const endPage = Math.min(totalPages, paginationWindowStart + 9);

        // Generate the array of page numbers for the current window
        const pages = Array.from(
            { length: endPage - paginationWindowStart + 1 },
            (_, i) => paginationWindowStart + i,
        );

        const thirdcategoryParam = thirdcategory ? thirdcategory : '';

        setVisiblePages(pages);

        // Update the URL
        navigate(
            `/productlist/${category}/${subcategory}/${thirdcategoryParam}?page=${currentPage}`,
        );
    }, [currentPage, navigate, category, subcategory, thirdcategory]);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const firstPage = () => {
        setCurrentPage(1);
    };
    const lastPage = () => {
        setCurrentPage(totalPages);
    };
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="productlist">
            <div className="sub_content">
                <div className="content">
                    <Breadcrumb category={category} />
                    <div className="goods_list_item_tit">
                        <h2>{category?.toUpperCase()}</h2>
                    </div>
                    <ProductListFilter
                        toggleFilterVisibility={toggleFilterVisibility}
                        isFilterVisible={isFilterVisible}
                        countProducts={countProducts}
                        onSortChange={handleSortChange}
                    />
                    <div className="goods_list_flex">
                        <ProductListFilterSidebar
                            isFilterVisible={isFilterVisible}
                        />
                        <div className="goods_list_item">
                            <div className="goods_list">
                                <div className="goods_list_cont">
                                    <div className="item_basket_type">
                                        <ul>
                                            {currentItems.map(
                                                (product, index) => (
                                                    <ProductCard
                                                        key={index}
                                                        product={product}
                                                    />
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination">
                        <ul>
                            {/* {currentPage > 1 && (
                                <li className="btn_page btn_page_prev">
                                    <button
                                        onClick={prevPage}
                                        disabled={currentPage <= 1}
                                    >
                                        <img src={iconPrev} alt="이전" />
                                        <span className="text">이전</span>
                                    </button>
                                </li>
                            )} */}
                            {/* <li className="btn_page btn_page_prev"> */}
                            <li
                                className={
                                    currentPage !== 1
                                        ? 'btn_page btn_page_next usable'
                                        : 'btn_page btn_page_next'
                                }
                            >
                                <button onClick={firstPage}>
                                    <img src={iconFirst} alt="맨앞" />
                                    <span className="text">맨앞</span>
                                </button>
                            </li>
                            <li
                                className={
                                    currentPage > 1
                                        ? 'btn_page btn_page_prev usable'
                                        : 'btn_page btn_page_prev'
                                }
                            >
                                <button onClick={prevPage}>
                                    <img src={iconPrev} alt="이전" />
                                    <span className="text">이전</span>
                                </button>
                            </li>

                            {/* {Array.from({ length: totalPages }, (_, index) => (
                                <li
                                    key={index}
                                    className={
                                        currentPage === index + 1
                                            ? 'btn_page active'
                                            : 'btn_page'
                                    }
                                >
                                    <button onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))} */}

                            {visiblePages.map(page => (
                                <li
                                    key={page}
                                    className={
                                        currentPage === page
                                            ? 'btn_page active'
                                            : 'btn_page'
                                    }
                                >
                                    <button onClick={() => paginate(page)}>
                                        {page}
                                    </button>
                                </li>
                            ))}
                            {/* {currentPage < totalPages && (
                                <li className="btn_page btn_page_next">
                                    <button
                                        onClick={nextPage}
                                        disabled={currentPage >= totalPages}
                                    >
                                        <img src={iconNext} alt="다음" />
                                        <span className="text">다음</span>
                                    </button>
                                </li>
                            )} */}
                            <li
                                className={
                                    currentPage < totalPages
                                        ? 'btn_page btn_page_next usable'
                                        : 'btn_page btn_page_next'
                                }
                            >
                                <button onClick={nextPage}>
                                    <img src={iconNext} alt="다음" />
                                    <span className="text">다음</span>
                                </button>
                            </li>
                            <li
                                className={
                                    currentPage !== totalPages
                                        ? 'btn_page btn_page_next usable'
                                        : 'btn_page btn_page_next'
                                }
                            >
                                <button onClick={lastPage}>
                                    <img src={iconLast} alt="맨끝" />
                                    <span className="text">맨끝</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
