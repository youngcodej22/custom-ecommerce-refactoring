import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
// data
import newProductData from '../../data/json/products_new.json';
import womenProductData from '../../data/json/products_women.json';
import menProductData from '../../data/json/products_men.json';
import accProductData from '../../data/json/products_acc.json';
import outletProductData from '../../data/json/products_outlet.json';
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

// combine datas
const combinedProductsData = [
    ...newProductData,
    ...womenProductData,
    ...menProductData,
    ...accProductData,
    ...outletProductData,
];

const ProductList: React.FC = () => {
    // ! useState 대신 사용
    // const [currentPage, setCurrentPage] = useState(page);
    const { currentPage, setCurrentPage } = useContext(ProductListContext);

    // State to keep track of visible page range
    const [visiblePages, setVisiblePages] = useState<number[]>([]);
    // .filter_open_btn 누르면 .side_cont를 닫기
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    // react-router-dom
    const { category } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Filter products based on category
    const filteredProducts = combinedProductsData.filter(
        product => product.category.toLowerCase() === category?.toLowerCase(),
    );
    const countProducts = filteredProducts.length;

    // pagination
    const itemsPerPage = 20;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // * 초기화
    useEffect(() => {
        setCurrentPage(page);
    }, []);

    // Replace history.push with navigate
    // useEffect(() => {
    //     // Calculate the range of pages to display
    //     const startPage = Math.max(1, currentPage - 4);
    //     const endPage = Math.min(totalPages, startPage + 9);
    //     const pages = Array.from(
    //         { length: endPage - startPage + 1 },
    //         (_, i) => startPage + i,
    //     );
    //     setVisiblePages(pages);

    //     // Update the URL
    //     navigate(`/productlist/${category}?page=${currentPage}`);
    // }, [currentPage, totalPages, navigate, category]);

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

        setVisiblePages(pages);

        // Update the URL
        navigate(`/productlist/${category}?page=${currentPage}`);
    }, [currentPage, totalPages, navigate, category]);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    // const nextPage = () =>
    //     setCurrentPage(currentPage => Math.min(totalPages, currentPage + 1));
    // const prevPage = () =>
    //     setCurrentPage(currentPage => Math.max(1, currentPage - 1));
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

    // useEffect(() => {
    //     // Reset currentPage to 1 when category changes
    //     setCurrentPage(1);
    //     // Update the URL to reflect the reset to page 1
    //     navigate(`/productlist/${category}?page=1`);

    //     console.log('cate::', category);
    //     console.log('page::', currentPage);
    // }, [category, navigate]);

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
