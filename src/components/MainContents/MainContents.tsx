import React, { useContext, useEffect, useState } from 'react';
// data
import productsData from '../../data/json/products_home.json';
import benefitData from '../../data/benefits';
// components
// ! Tabs로 이동
import ProductCard from '../ProductCard/ProductCard';
import Tabs, { TabPane } from '../Tabs/Tabs';
import Benefit from '../Benefit/Benefit';

import { TabsContext } from '../../context/context';
// styles
import './MainContents.scss';

const MainContents = () => {
    const { isTabTitleOn, isTabBoxOn, handleClick } = useContext(TabsContext);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // limit data
    // ! 나중에 slice()사용대신 DB에 "rank" 12, 같은 데이터로 해결하자
    const highRankFilteredProducts = filteredProducts.slice(0, 8);
    const benefits = benefitData;

    useEffect(() => {
        const categoryMap = {
            0: 'ALL',
            1: 'MEN',
            2: 'WOMEN',
            3: 'ACC',
        };
        // Filter products based on the activeCategory and the acc key
        const filterProducts = () => {
            if (isTabTitleOn === 3) {
                return productsData.filter(product => product.acc === true);
            } else if (isTabTitleOn !== 0) {
                const category = categoryMap[isTabTitleOn];
                return productsData.filter(
                    product =>
                        product.category === category && product.acc === false,
                );
            }
            return productsData;
        };

        setFilteredProducts(filterProducts());
    }, [isTabTitleOn]);

    const renderTabContent = highRankFilteredProducts.map((product, index) => (
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
