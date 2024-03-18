import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import './Tabs.scss';

const Tabs = ({ products, isTabBoxOn, isTabTitleOn, onTabClick }) => {
    return (
        <div className="goods-tab">
            <div className="goods-tab-title">
                <ul>
                    <li>
                        <a
                            href="#"
                            className={1 === isTabTitleOn ? 'on' : ''}
                            onClick={e => onTabClick(e, 1)}
                        >
                            <span>ALL</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={2 === isTabTitleOn ? 'on' : ''}
                            onClick={e => onTabClick(e, 2)}
                        >
                            <span>MEN</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={3 === isTabTitleOn ? 'on' : ''}
                            onClick={e => onTabClick(e, 3)}
                        >
                            <span>WOMEN</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={4 === isTabTitleOn ? 'on' : ''}
                            onClick={e => onTabClick(e, 4)}
                        >
                            <span>ACC</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="goods-tab-content">
                <div
                    className={
                        1 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
                    }
                    onClick={e => onTabClick(e, 1)}
                >
                    <ul>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </ul>
                </div>
                <div
                    className={
                        2 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
                    }
                    onClick={e => onTabClick(e, 2)}
                >
                    <ul>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </ul>
                </div>
                <div
                    className={
                        3 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
                    }
                    onClick={e => onTabClick(e, 3)}
                >
                    <ul>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </ul>
                </div>
                <div
                    className={
                        4 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
                    }
                    onClick={e => onTabClick(e, 4)}
                >
                    <ul>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
