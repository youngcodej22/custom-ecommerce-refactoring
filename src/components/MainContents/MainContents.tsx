import React, { useState } from 'react';
// assets
import promotionMembership from '/assets/promotion/promotion-membership.png';
import promotionKakao from '/assets/promotion/promotion-kakao.png';
import promotionReview from '/assets/promotion/promotion-review.png';
// data
import productsOrigin from '../../data/json/products_home.json';

import { TabsContext } from '../../context/context';

// components
// ! Tabs로 이동
import ProductCard from '../ProductCard/ProductCard';
// import Tabs from '../Tabs/Tabs';
import Tabs, { TabPane } from '../Tabs/Tabs';
// styles
import './MainContents.scss';

const MainContents = () => {
    // // ? 추후 products에 랭킹을 매기고 상위 랭킹 데이터만 뽑을 수 있게 해보자
    // limited data
    const products = productsOrigin.slice(0, 8);

    // const [isTabBoxOn, setIsTabBoxOn] = useState(1);
    // const [isTabTitleOn, setIsTabTitleOn] = useState(1);

    // const handleClick = (e, index) => {
    //     // a 태그에 #으로 페이지 첫화면 상단으로 가는 것을 막자
    //     e.preventDefault();
    //     setIsTabTitleOn(index);
    //     setIsTabBoxOn(index);
    // };

    // const TabsArr = [
    //     {
    //         title: 'All',
    //     },
    //     {
    //         title: 'MEN',
    //     },
    //     {
    //         title: 'WOMEN',
    //     },
    //     {
    //         title: 'ACC',
    //     },
    // ];

    const renderTabContent = products.map((product, index) => (
        <ProductCard key={index} product={product} />
    ));

    return (
        <div className="main-contents">
            <div className="main-goods">
                <div className="goods-list">
                    <div className="goods-list-title">
                        <h3>SEASON TREND</h3>
                    </div>
                    <div className="goods-list-content">
                        {/* <Tabs
                            products={products}
                            isTabBoxOn={isTabBoxOn}
                            isTabTitleOn={isTabTitleOn}
                            onTabClick={handleClick}
                        /> */}
                        <Tabs>
                            {/* <TabPane title="ALL">
                                {products.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        product={product}
                                    />
                                ))}
                            </TabPane> */}
                            {/* {TabsArr.map((tab, index) => {
                                <TabPane title={tab.title}>
                                    {products.map((product, index) => (
                                        <ProductCard
                                            key={index}
                                            product={product}
                                        />
                                    ))}
                                </TabPane>;
                            })} */}
                            {/* <TabPane title="ALL" content={renderTabContent()} /> */}
                            <TabPane
                                title="ALL"
                                content={renderTabContent}
                                index="0"
                            />
                            <TabPane
                                title="MEN"
                                content={renderTabContent}
                                index="1"
                            />
                            <TabPane
                                title="WOMEN"
                                content={renderTabContent}
                                index="2"
                            />
                            <TabPane
                                title="ACC"
                                content={renderTabContent}
                                index="3"
                            />
                        </Tabs>
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
