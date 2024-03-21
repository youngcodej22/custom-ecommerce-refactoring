import React, { useState } from 'react';
// data
import productsData from '../../data/json/products_home.json';
import benefitData from '../../data/benefits';
// components
// ! Tabs로 이동
import ProductCard from '../ProductCard/ProductCard';
import Tabs, { TabPane } from '../Tabs/Tabs';
import Benefit from '../Benefit/Benefit';
// styles
import './MainContents.scss';

const MainContents = () => {
    // ? 추후 products에 랭킹을 매기고 상위 랭킹 데이터만 뽑을 수 있게 해보자
    // limited data
    const products = productsData.slice(0, 8);
    const benefits = benefitData;
    // benefits.map(benefit => console.log('be*', benefit.title));

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
                        <Tabs>
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
                {benefits.map((benefit, index) => (
                    <Benefit
                        key={index}
                        title={benefit.title}
                        text={benefit.text}
                        imageAlt={benefit.imageAlt}
                        imageSrc={benefit.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainContents;
