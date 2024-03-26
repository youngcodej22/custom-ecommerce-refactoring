import React, { useEffect, useState } from 'react';

import defaultImage from '/assets/product/default_image.png';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
    const onErrorImg = e => {
        e.target.src = defaultImage;
    };

    return (
        <li className="product-card">
            <div className="item-cont">
                <div className="item-photo-box">
                    <a href="">
                        <img
                            src={product.image ? product.image : defaultImage}
                            alt={product.name}
                            onError={onErrorImg}
                        />
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
                            <img key={index} src={label[0]} alt={label[1]} />
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
