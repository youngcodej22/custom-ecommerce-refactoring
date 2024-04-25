import React from 'react';
// component
import ProductListFilterCategoryBox from '../ProductListFilterCategoryBox/ProductListFilterCategoryBox';
// assets
import iconFilter from '/assets/icon/icon-filter.png';

import './ProductListFilterSidebar.scss';

interface ProductListFilterType {
    isFilterVisible: boolean;
}

const cateBoxItems = [
    {
        title: 'NEW',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '24S/S 컬렉션',
                thirdCategory: [],
            },
        ],
    },
    {
        title: 'WOMEN',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '상의',
                thirdCategory: ['ALL', '티셔츠', '스웨터', '원피스'],
            },
            {
                subCategory: '하의',
                thirdCategory: ['ALL', '팬츠', '숏팬츠', '스커트'],
            },
            {
                subCategory: '아우터',
                thirdCategory: ['ALL', '점퍼', '베스트'],
            },
        ],
    },
    {
        title: 'MEN',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '상의',
                thirdCategory: ['ALL', '티셔츠', '스웨터'],
            },
            {
                subCategory: '하의',
                thirdCategory: ['ALL', '팬츠', '숏팬츠'],
            },
            {
                subCategory: '아우터',
                thirdCategory: ['ALL', '점퍼', '베스트'],
            },
        ],
    },
    {
        title: 'ACC',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '가방',
                thirdCategory: ['ALL', '캐디백', '보스턴백', '파우치'],
            },
            {
                subCategory: '용품',
                thirdCategory: ['ALL', '모자', '양말', '장갑', '기타'],
            },
        ],
    },
    {
        title: 'OUTLET',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '여성',
                thirdCategory: ['ALL', '상의', '하의', '아우터'],
            },
            {
                subCategory: '남성',
                thirdCategory: ['ALL', '상의', '하의', '아우터'],
            },
            {
                subCategory: '악세서리',
                thirdCategory: ['ALL', '남성', '여성'],
            },
        ],
    },
];

const ProductListFilterSidebar = ({
    isFilterVisible,
}: ProductListFilterType) => {
    return (
        <div className="productlist-filter-sidebar">
            <div className={`side_cont ${isFilterVisible ? 'hidden' : ''}`}>
                <div className="sub_search_box">
                    <form action="" id="frmSearch">
                        <input type="hidden" name="cateCd" />
                        <fieldset id="frmSearchDetail">
                            <div className="depth1_cate_box">
                                {cateBoxItems.map((categoryItem, index) => (
                                    <ProductListFilterCategoryBox
                                        id={index}
                                        categoryItem={categoryItem}
                                    />
                                ))}
                            </div>
                            {/* ! 상세 필터 기능 */}
                            <dl className="filter_tit">
                                <dt>
                                    필터
                                    <button>
                                        <img src={iconFilter} alt="필터" />
                                    </button>
                                </dt>
                                <dd className="select_filter_wrap"></dd>
                            </dl>
                            <dl className="gender">
                                <dt className="option_toggle_btn">성별</dt>
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
                                <dt className="option_toggle_btn">컬러</dt>
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
                                <dt className="option_toggle_btn">사이즈</dt>
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
                                <dt className="option_toggle_btn">계절</dt>
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
                                <dt className="option_toggle_btn">가격</dt>
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
                                        <input type="text" value="0" />
                                        <span>~</span>
                                        <input type="text" value="20000" />
                                    </div>
                                </dd>
                            </dl>
                            <div className="quick_btn">
                                <input type="button" value="상품 검색" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductListFilterSidebar;
