import React from 'react';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
    return (
        <li className="product-card">
            <div className="item-cont">
                <div className="item-photo-box">
                    <a href="">
                        <img src={product.image} alt={product.name} />
                    </a>
                    {/* cart/좋아요 버튼인데 일단 나중에 */}
                    {/* <div className="item-link">
                                                    <button></button>
                                                    <button></button>
                                                </div> */}
                </div>
                <div className="item-info-cont">
                    <div className="item-tit-box">
                        <input type="hidden" />
                        <p className="cate-name">
                            <a href="">{product.category}</a>
                        </p>
                        <a href="">
                            <strong className="item-name">
                                {product.name}
                            </strong>
                        </a>
                    </div>
                    <div className="item-money-box">
                        <div className="flex-box">
                            <strong className="item-price">
                                {product.price}
                            </strong>
                        </div>
                    </div>
                    <div className="item-icon-box">
                        {product.labels.map((label, index) => (
                            <img
                                key={index}
                                src={label.labelImage}
                                alt={label.labelAlt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
