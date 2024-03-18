import React, { useState } from 'react';
// assets
import promotionMembership from '/assets/promotion/promotion-membership.png';
import promotionKakao from '/assets/promotion/promotion-kakao.png';
import promotionReview from '/assets/promotion/promotion-review.png';
// data
import productsOrigin from '../../data/json/products_home.json';
// components
// ! Tabs로 이동
// import ProductCard from '../ProductCard/ProductCard';
import Tabs from '../Tabs/Tabs';
// styles
import './MainContents.scss';

const MainContents = () => {
    // ? 추후 products에 랭킹을 매기고 상위 랭킹 데이터만 뽑을 수 있게 해보자
    // limited data
    const products = productsOrigin.slice(0, 8);

    const [isTabBoxOn, setIsTabBoxOn] = useState(1);
    const [isTabTitleOn, setIsTabTitleOn] = useState(1);

    const handleClick = (e, index) => {
        // a 태그에 #으로 페이지 첫화면 상단으로 가는 것을 막자
        e.preventDefault();
        setIsTabTitleOn(index);
        setIsTabBoxOn(index);
    };

    return (
        <div className="main-contents">
            <div className="main-goods">
                <div className="goods-list">
                    <div className="goods-list-title">
                        <h3>SEASON TREND</h3>
                    </div>
                    <div className="goods-list-content">
                        {/* <div className="goods-tab">
                            <div className="goods-tab-title">
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className={
                                                1 === isTabTitleOn ? 'on' : ''
                                            }
                                            onClick={e => handleClick(e, 1)}
                                        >
                                            <span>ALL</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={
                                                2 === isTabTitleOn ? 'on' : ''
                                            }
                                            onClick={e => handleClick(e, 2)}
                                        >
                                            <span>MEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={
                                                3 === isTabTitleOn ? 'on' : ''
                                            }
                                            onClick={e => handleClick(e, 3)}
                                        >
                                            <span>WOMEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={
                                                4 === isTabTitleOn ? 'on' : ''
                                            }
                                            onClick={e => handleClick(e, 4)}
                                        >
                                            <span>ACC</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="goods-tab-content">
                                <div
                                    className={
                                        1 === isTabBoxOn
                                            ? 'goods-tab-box on'
                                            : 'goods-tab-box'
                                    }
                                    onClick={e => handleClick(e, 1)}
                                >
                                    <ul>
                                        {products.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={
                                        2 === isTabBoxOn
                                            ? 'goods-tab-box on'
                                            : 'goods-tab-box'
                                    }
                                    onClick={e => handleClick(e, 2)}
                                >
                                    <ul>
                                        {products.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={
                                        3 === isTabBoxOn
                                            ? 'goods-tab-box on'
                                            : 'goods-tab-box'
                                    }
                                    onClick={e => handleClick(e, 3)}
                                >
                                    <ul>
                                        {products.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={
                                        4 === isTabBoxOn
                                            ? 'goods-tab-box on'
                                            : 'goods-tab-box'
                                    }
                                    onClick={e => handleClick(e, 4)}
                                >
                                    <ul>
                                        {products.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <Tabs
                            products={products}
                            isTabBoxOn={isTabBoxOn}
                            isTabTitleOn={isTabTitleOn}
                            onTabClick={handleClick}
                        />
                    </div>
                </div>
                <div className="btn-goods-down-more"></div>
            </div>
            {/* 숨겨진거 나중에 처리 */}
            {/* <div className="slide-c"></div> */}
            <div className="promotion-cont">
                <div className="box">
                    <a href="">
                        <div className="icon">
                            <img
                                src={promotionMembership}
                                alt="프로모션 멤버쉽"
                            />
                        </div>
                        <div className="text-wrap">
                            <p className="title">MEMBERSHIP</p>
                            <p className="text">맥케이슨 회원 혜택 안내</p>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <div className="icon">
                            <img src={promotionReview} alt="프로모션 리뷰" />
                        </div>
                        <div className="text-wrap">
                            <p className="title">REVIEW</p>
                            <p className="text">
                                상품 리뷰 작성 시 마일리지 적립
                            </p>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="">
                        <div className="icon">
                            <img src={promotionKakao} alt="프로모션 카카오톡" />
                        </div>
                        <div className="text-wrap">
                            <p className="title">KAKAOTALK</p>
                            <p className="text">플러스친구 등록 시 쿠폰 증정</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainContents;
