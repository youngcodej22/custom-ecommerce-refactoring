import React, { useState } from 'react';
// New
import product_new_1 from '/assets/product/new/01.jpg';
import product_new_2 from '/assets/product/new/02.jpg';
import product_new_3 from '/assets/product/new/03.jpg';
import product_new_4 from '/assets/product/new/04.jpg';
import product_new_5 from '/assets/product/new/05.jpg';
import product_new_6 from '/assets/product/new/06.jpg';
import product_new_7 from '/assets/product/new/07.jpg';
import product_new_8 from '/assets/product/new/08.jpg';
// Men
import product_men_1 from '/assets/product/men/01.jpg';
import product_men_2 from '/assets/product/men/02.jpg';
import product_men_3 from '/assets/product/men/03.jpg';
import product_men_4 from '/assets/product/men/04.jpg';
import product_men_5 from '/assets/product/men/05.jpg';
import product_men_6 from '/assets/product/men/06.jpg';
import product_men_7 from '/assets/product/men/07.jpg';
import product_men_8 from '/assets/product/men/08.jpg';
// Women
import product_women_1 from '/assets/product/women/01.jpg';
import product_women_2 from '/assets/product/women/02.jpg';
import product_women_3 from '/assets/product/women/03.jpg';
import product_women_4 from '/assets/product/women/04.jpg';
import product_women_5 from '/assets/product/women/05.jpg';
import product_women_6 from '/assets/product/women/06.jpg';
import product_women_7 from '/assets/product/women/07.jpg';
import product_women_8 from '/assets/product/women/08.jpg';
// Acc
import product_acc_1 from '/assets/product/acc/01.jpg';
import product_acc_2 from '/assets/product/acc/02.jpg';
import product_acc_3 from '/assets/product/acc/03.jpg';
import product_acc_4 from '/assets/product/acc/04.jpg';
import product_acc_5 from '/assets/product/acc/05.jpg';
import product_acc_6 from '/assets/product/acc/06.jpg';
import product_acc_7 from '/assets/product/acc/07.jpg';
import product_acc_8 from '/assets/product/acc/08.jpg';

// Label
import labelMen from '/assets/label/label-men.png';
import labelMile from '/assets/label/label-mile.png';
import labelNew from '/assets/label/label-new.png';
import labelSale from '/assets/label/label-sale.png';
import labelWomen from '/assets/label/label-women.png';

// Promotion
import promotionMembership from '/assets/promotion/promotion-membership.png';
import promotionKakao from '/assets/promotion/promotion-kakao.png';
import promotionReview from '/assets/promotion/promotion-review.png';

import './MainContents.scss';

const MainContents = () => {
    const [isTabBoxOn, setIsTabBoxOn] = useState(1);
    const [isTabTitleOn, setIsTabTitleOn] = useState(1);

    // const handleClick = e => {
    //     e.preventDefault();
    //     setIsTabTitleOn(true);
    //     setIsTabBoxOn(true);
    // };

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
                        <div className="goods-tab">
                            <div className="goods-tab-title">
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className={1 === isTabTitleOn ? 'on' : ''}
                                            onClick={e => handleClick(e, 1)}
                                        >
                                            <span>ALL</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={2 === isTabTitleOn ? 'on' : ''}
                                            onClick={e => handleClick(e, 2)}
                                        >
                                            <span>MEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={3 === isTabTitleOn ? 'on' : ''}
                                            onClick={e => handleClick(e, 3)}
                                        >
                                            <span>WOMEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={4 === isTabTitleOn ? 'on' : ''}
                                            onClick={e => handleClick(e, 4)}
                                        >
                                            <span>ACC</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="goods-tab-content">
                                <div
                                    className={1 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'}
                                    onClick={e => handleClick(e, 1)}
                                >
                                    <ul>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_1} alt="제품1" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 빅로고 반집업 방품 스웨터 그레이 MCM4ST756 MGR
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_2} alt="제품2" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_3} alt="제품3" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_4} alt="제품4" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_5} alt="제품5" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_6} alt="제품6" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_7} alt="제품7" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_new_8} alt="제품8" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className={2 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'}
                                    onClick={e => handleClick(e, 2)}
                                >
                                    <ul>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_1} alt="제품1" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 빅로고 반집업 방품 스웨터 그레이 MCM4ST756 MGR
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_2} alt="제품2" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_3} alt="제품3" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_4} alt="제품4" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_5} alt="제품5" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_6} alt="제품6" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_7} alt="제품7" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-cont">
                                                <div className="item-photo-box">
                                                    <a href="">
                                                        <img src={product_men_8} alt="제품8" />
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
                                                            <a href="">NEW</a>
                                                        </p>
                                                        <a href="">
                                                            <strong className="item-name">
                                                                23 아가밀 앙고라 퍼 포인트 스웨터 MCM4ST755 MIN
                                                            </strong>
                                                        </a>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <div className="flex-box">
                                                            <strong className="item-price">650,000</strong>
                                                        </div>
                                                    </div>
                                                    <div className="item-icon-box">
                                                        <img src={labelMen} alt="라벨 남자" />
                                                        <img src={labelMile} alt="라벨 마일리지" />
                                                        <img src={labelNew} alt="라벨 뉴" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                            <img src={promotionMembership} alt="프로모션 멤버쉽" />
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
                            <p className="text">상품 리뷰 작성 시 마일리지 적립</p>
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
