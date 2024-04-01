import React from 'react';
// data
import newProductData from '../../data/json/product_new.json';
// component
import ProductCard from '../../components/ProductCard/ProductCard';

import './ProductList.scss';

import iconFilter from '/assets/icon/icon-filter.png';
import iconFilterSet from '/assets/icon/icon-filter-set.png';
import iconNext from '/assets/icon/icon-pagination-next.png';
import iconLast from '/assets/icon/icon-pagination-last.png';
import iconBasket from '/assets/icon/icon-basket.png';
import iconBasketGet from '/assets/icon/icon-basket-get.png';

const ProductList = () => {
    console.log('**', newProductData);

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
                            <a
                                href="javascript:void(0)"
                                className="filter_open_btn on"
                            >
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
                                                                tabindex="0"
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
                                            {/* <li>
                                                <div className="dn"></div>
                                                <div className="item_cont">
                                                    <div className="item_photo_box">
                                                        <a href="/productdetail">
                                                            <img
                                                                src={
                                                                    product_women_1
                                                                }
                                                                alt=""
                                                            />
                                                            <div className="item_link">
                                                                <button
                                                                    type="button"
                                                                    className="btn_basket_get btn_add_wish"
                                                                >
                                                                    <img
                                                                        src={
                                                                            iconBasketGet
                                                                        }
                                                                        alt="찜하기"
                                                                    />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn_basket_cart btn_add_cart_ btn_open_layer"
                                                                >
                                                                    <img
                                                                        src={
                                                                            iconBasket
                                                                        }
                                                                        alt="장바구니"
                                                                    />
                                                                </button>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="item_info_cont">
                                                        <div className="item_tit_box">
                                                            <span className="cate_name">
                                                                <a href="/productdetail">
                                                                    NEW
                                                                </a>
                                                            </span>
                                                            <a href="/productdetail">
                                                                <strong className="item_name">
                                                                    24 개더
                                                                    플리츠
                                                                    스커트
                                                                    베이지
                                                                    MDW1PC615
                                                                    LBE
                                                                </strong>
                                                            </a>
                                                        </div>
                                                        <div className="item_money_box">
                                                            <div>
                                                                <strong className="item_price 3">
                                                                    <span>
                                                                        430,000
                                                                    </span>
                                                                </strong>
                                                            </div>
                                                        </div>
                                                        <div className="item_icon_box">
                                                            <img
                                                                src={labelWomen}
                                                                alt="여성용"
                                                                className="middle"
                                                            />{' '}
                                                            <img
                                                                src={labelMile}
                                                                alt="두배적립"
                                                                className="middle"
                                                            />{' '}
                                                            <img
                                                                src={labelNew}
                                                                alt="신상품"
                                                                className="middle"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}
                                            {newProductData.map(
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
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li className="btn_page btn_page_next">
                                <a href="#">
                                    <img src={iconNext} alt="" />
                                    다음
                                </a>
                            </li>
                            <li className="btn_page btn_page_last">
                                <a href="#">
                                    <img src={iconLast} alt="" />
                                    다음
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
