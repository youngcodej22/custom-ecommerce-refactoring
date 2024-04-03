import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
// data
import newProductData from '../../data/json/products_new.json';
import womenProductData from '../../data/json/products_women.json';
import menProductData from '../../data/json/products_men.json';
import accProductData from '../../data/json/products_acc.json';
import outletProductData from '../../data/json/products_outlet.json';

// component
import ProductCard from '../../components/ProductCard/ProductCard';

import './ProductList.scss';

import iconFilter from '/assets/icon/icon-filter.png';
import iconFilterSet from '/assets/icon/icon-filter-set.png';
import iconPrev from '/assets/icon/icon-pagination-prev.png';
import iconNext from '/assets/icon/icon-pagination-next.png';
import iconFirst from '/assets/icon/icon-pagination-first.png';
import iconLast from '/assets/icon/icon-pagination-last.png';
import iconBasket from '/assets/icon/icon-basket.png';
import iconBasketGet from '/assets/icon/icon-basket-get.png';

// combine datas
const combinedProductsData = [
    ...newProductData,
    ...womenProductData,
    ...menProductData,
    ...accProductData,
    ...outletProductData,
];

interface ProductListProps {
    category?: string; // Assuming category is optional
}

const ProductList: React.FC<ProductListProps> = () => {
    // react-router-dom
    const { category } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // pagination
    const itemsPerPage = 20;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [currentPage, setCurrentPage] = useState(page);
    // State to keep track of visible page range
    const [visiblePages, setVisiblePages] = useState<number[]>([]);

    // Filter products based on category
    const filteredProducts = combinedProductsData.filter(
        product => product.category.toLowerCase() === category.toLowerCase(),
    );
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Replace history.push with navigate
    // useEffect(() => {
    //     navigate(`/productlist/${category}?page=${currentPage}`);
    // }, [currentPage, navigate, category]);

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

    return (
        <div className="productlist">
            <div className="sub_content">
                <div className="content">
                    <div className="location_wrap">
                        <div className="location_cont">
                            <em>
                                <a href="#" className="local_home">
                                    HOME
                                </a>
                                &nbsp;
                            </em>
                            <span className="arr"></span>
                            <div className="location_select">
                                <div className="location_tit">
                                    <a href="#">
                                        <span>WOMEN</span>
                                    </a>
                                </div>
                                <ul style={{ display: 'none' }}>
                                    <li>
                                        <a href="?cateCd=001">
                                            <span>NEW</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?cateCd=004">
                                            <span>WOMEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?cateCd=003">
                                            <span>MEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?cateCd=008">
                                            <span>ACC</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?cateCd=005">
                                            <span>OUTLET</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="goods_list_item_tit">
                        <h2>WOMEN</h2>
                    </div>
                    <div className="list_top_box">
                        <div className="list_info_box">
                            <a href="" className="filter_open_btn on">
                                <img src={iconFilterSet} alt="필터" />
                                <span>필터 닫기</span>
                            </a>
                            <span>314개의 상품</span>
                        </div>

                        <div className="goods_pick_list">
                            <form name="frmList" action="">
                                <input
                                    type="hidden"
                                    name="cateCd"
                                    value="004"
                                />
                                <div className="pick_list_box">
                                    <ul className="pick_list">
                                        <li>
                                            <input
                                                type="radio"
                                                id="sort6"
                                                className="radio"
                                                name="sort"
                                                value="date"
                                            />
                                            <label htmlFor="sort6">
                                                신상품순
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="sort3"
                                                className="radio"
                                                name="sort"
                                                value="price_asc"
                                            />
                                            <label htmlFor="sort3">
                                                낮은가격순
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="sort4"
                                                className="radio"
                                                name="sort"
                                                value="price_dsc"
                                            />
                                            <label htmlFor="sort4">
                                                높은가격순
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="sort2"
                                                className="radio"
                                                name="sort"
                                                value="sellcnt"
                                            />
                                            <label htmlFor="sort2">
                                                판매순
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="sort1"
                                                className="radio"
                                                name="sort"
                                                value=""
                                            />
                                            <label
                                                htmlFor="sort1"
                                                className="on"
                                            >
                                                선호도순
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="goods_list_flex">
                        <div className="side_cont">
                            <div className="sub_search_box">
                                <form action="" id="frmSearch">
                                    <input type="hidden" name="cateCd" />
                                    <fieldset id="frmSearchDetail">
                                        <div className="depth1_cate_box">
                                            <dl className="cate_box">
                                                <dt>NEW</dt>
                                                <dd>
                                                    <div className="cate_list">
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    ALL
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    24SS 봄
                                                                    컬렉션
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            씨슬
                                                                            시그니처
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            할리
                                                                            스티븐슨
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            해리스
                                                                            트위드
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    여성
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            상의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            하의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            아우터
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    남성
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            상의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            하의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            아우터
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    액세서리
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            상의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            하의
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    온라인
                                                                    상품권
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl className="cate_box">
                                                <dt>WOMEN</dt>
                                                <dd>
                                                    <div className="cate_list">
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    ALL
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    상의
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            티셔츠
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            스웨터
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    하의
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            팬츠
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            쇼츠
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            스커트
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            원피스
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    아우터
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            점퍼
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            파우치
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            보스턴백
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            캐디백
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            {/* <li>
                                                                <span>액세서리</span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">ALL</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">모자</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">양말</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">가방</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">기타</a>
                                                                    </li>
                                                                </ul>
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl className="cate_box">
                                                <dt>MEN</dt>
                                                <dd>
                                                    <div className="cate_list">
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    ALL
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    상의
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            티셔츠
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            스웨터
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    하의
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            팬츠
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            쇼츠
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    아우터
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            점퍼
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            다운/패딩
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            베스트
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            가디건
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            {/* <li>
                                                                <span>액세서리</span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">ALL</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">모자</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">양말</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">가방</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">기타</a>
                                                                    </li>
                                                                </ul>
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl className="cate_box">
                                                <dt>ACC</dt>
                                                <dd>
                                                    <div className="cate_list">
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    ALL
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    모자
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            볼캡
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            바이저
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            버킷햇
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    양말
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            단목
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            반복
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            중목
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            니삭스
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    가방
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            볼파우치
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            파우치
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            보스턴백
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            캐디백
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    기타
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            골프화
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            장갑
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            벨트
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            기타
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl className="cate_box">
                                                <dt>OUTLET</dt>
                                                <dd>
                                                    <div className="cate_list">
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    ALL
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    여성
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            아우터
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            상의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            하의
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    남성
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            아우터
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            상의
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            하의
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    액세서리
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            남성
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            여성
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    기타
                                                                </span>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            ALL
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            골프화
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            장갑
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            벨트
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            기타
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <dl className="filter_tit">
                                            <dt>
                                                필터
                                                <a href="">
                                                    <img
                                                        src={iconFilter}
                                                        alt="필터"
                                                    />
                                                </a>
                                            </dt>
                                            <dd className="select_filter_wrap"></dd>
                                        </dl>
                                        <dl className="gender">
                                            <dt className="option_toggle_btn">
                                                성별
                                            </dt>
                                            <dd>
                                                <ul className="button_list">
                                                    <li>
                                                        <input
                                                            type="radio"
                                                            id="searchSexm"
                                                            value="m"
                                                            data-text="남성"
                                                        />
                                                        <label
                                                            htmlFor="searchSexm"
                                                            className="check-s"
                                                        >
                                                            남성
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="radio"
                                                            id="searchSexw"
                                                            value="w"
                                                            data-text="여성"
                                                        />
                                                        <label
                                                            htmlFor="searchSexw"
                                                            className="check-s"
                                                        >
                                                            여성
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="radio"
                                                            id="searchSexu"
                                                            value="u"
                                                            data-text="공용"
                                                        />
                                                        <label
                                                            htmlFor="searchSexu"
                                                            className="check-s"
                                                        >
                                                            공용
                                                        </label>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl className="color">
                                            <dt className="option_toggle_btn">
                                                컬러
                                            </dt>
                                            <dd>
                                                <ul className="color_box">
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchColorFFFFFF"
                                                            value="FFFFFF"
                                                            data-text="화이트"
                                                        />
                                                        <label
                                                            htmlFor="searchColorFFFFFF"
                                                            className="check-s"
                                                            title="FFFFFF"
                                                        >
                                                            <div className="bg">
                                                                <span></span>
                                                            </div>
                                                            <p>화이트</p>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchColorFFFFFF"
                                                            value="FFFFFF"
                                                            data-text="화이트"
                                                        />
                                                        <label
                                                            htmlFor="searchColorFFFFFF"
                                                            className="check-s"
                                                            title="FFFFFF"
                                                        >
                                                            <div className="bg"></div>
                                                            <p>화이트</p>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchColorFFFFFF"
                                                            value="FFFFFF"
                                                            data-text="화이트"
                                                        />
                                                        <label
                                                            htmlFor="searchColorFFFFFF"
                                                            className="check-s"
                                                            title="FFFFFF"
                                                        >
                                                            <div className="bg"></div>
                                                            <p>화이트</p>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchColorFFFFFF"
                                                            value="FFFFFF"
                                                            data-text="화이트"
                                                        />
                                                        <label
                                                            htmlFor="searchColorFFFFFF"
                                                            className="check-s"
                                                            title="FFFFFF"
                                                        >
                                                            <div className="bg"></div>
                                                            <p>화이트</p>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl className="size">
                                            <dt className="option_toggle_btn">
                                                사이즈
                                            </dt>
                                            <dd>
                                                <ul className="button_list">
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchSize00L"
                                                            data-text="00L"
                                                        />
                                                        <label
                                                            htmlFor="searchSize00L"
                                                            className="check-s"
                                                        >
                                                            00L
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchSize00L"
                                                            data-text="00L"
                                                        />
                                                        <label
                                                            htmlFor="searchSize00L"
                                                            className="check-s"
                                                        >
                                                            00L
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchSize00L"
                                                            data-text="00L"
                                                        />
                                                        <label
                                                            htmlFor="searchSize00L"
                                                            className="check-s"
                                                        >
                                                            00L
                                                        </label>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl className="weather">
                                            <dt className="option_toggle_btn">
                                                계절
                                            </dt>
                                            <dd>
                                                <ul className="button_list">
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchWeather"
                                                            data-text="봄"
                                                        />
                                                        <label
                                                            htmlFor="searchWeather"
                                                            className="check-s"
                                                        >
                                                            봄
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="searchWeather"
                                                            data-text="여름"
                                                        />
                                                        <label
                                                            htmlFor="searchWeather"
                                                            className="check-s"
                                                        >
                                                            여름
                                                        </label>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl className="price_range_wrap">
                                            <dt className="option_toggle_btn">
                                                가격
                                            </dt>
                                            <dd>
                                                <div id="rangeSlider">
                                                    <div className="noUi-base">
                                                        <div className="noUi-connects">
                                                            <div className="noUi-connect"></div>
                                                        </div>
                                                        <div className="noUi-origin">
                                                            <div
                                                                className="noUi-handle noUi-handle-lower"
                                                                data-handle="0"
                                                                role="slider"
                                                                aria-orientation="horizontal"
                                                                aria-valuemin="0.0"
                                                                aria-valuemax="2000000.0"
                                                                aria-valuenow="0.0"
                                                                aria-valuetext="0.00"
                                                            >
                                                                <div className="noUi-touch-area"></div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="noUi-origin"
                                                            style={{
                                                                transform:
                                                                    'translate(0%, 0px)',
                                                                zIndex: 4,
                                                            }}
                                                        >
                                                            <div
                                                                className="noUi-handle noUi-handle-upper"
                                                                data-handle="1"
                                                                tabIndex={0}
                                                                role="slider"
                                                                aria-orientation="horizontal"
                                                                aria-valuemin="0.0"
                                                                aria-valuemax="2000000.0"
                                                                aria-valuenow="2000000.0"
                                                                aria-valuetext="2000000.00"
                                                            >
                                                                <div className="noUi-touch-area"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price_box">
                                                    <input
                                                        type="text"
                                                        value="0"
                                                    />
                                                    <span>~</span>
                                                    <input
                                                        type="text"
                                                        value="20000"
                                                    />
                                                </div>
                                            </dd>
                                        </dl>
                                        <div className="quick_btn">
                                            <input
                                                type="button"
                                                value="상품 검색"
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="goods_list_item">
                            <div className="goods_list">
                                <div className="goods_list_cont">
                                    <div className="item_basket_type">
                                        <ul>
                                            {/* {newProductData.map(
                                                (product, index) => (
                                                    <ProductCard
                                                        key={index}
                                                        product={product}
                                                    />
                                                ),
                                            )} */}
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
