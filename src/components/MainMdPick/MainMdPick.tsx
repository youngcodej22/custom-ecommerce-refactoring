import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// product
// New
// import product_new_1 from '/assets/product/new/01.jpg';
// import product_new_2 from '/assets/product/new/02.jpg';
// import product_new_3 from '/assets/product/new/03.jpg';
// import product_new_4 from '/assets/product/new/04.jpg';
// import product_new_5 from '/assets/product/new/05.jpg';
// import product_new_6 from '/assets/product/new/06.jpg';
// import product_new_7 from '/assets/product/new/07.jpg';
// import product_new_8 from '/assets/product/new/08.jpg';
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
// import labelSale from '/assets/label/label-sale.png';
// import labelWomen from '/assets/label/label-women.png';

// md pick
import md_pick_1 from '/assets/mdpick/01.jpg';
import md_pick_2 from '/assets/mdpick/02.jpg';
import md_pick_3 from '/assets/mdpick/03.jpg';

import './MainMdPick.scss';

const MainMdPick = () => {
    return (
        <div className="main-md-pick">
            <div className="md-pick-wrap" role="toolbar">
                <div className="main-tit">Best Coordination</div>
                {/* slider */}

                {/*  ul: md-pick-list */}
                <Swiper
                    effect="fade"
                    // navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    keyboard={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    wrapperTag="ul"
                >
                    <SwiperSlide>
                        <li className="md-pick-content">
                            <div className="md-pick-thumb">
                                <img src={md_pick_1} alt="MD선정 코디" />
                            </div>
                            <div className="md-pick-product">
                                <div className="goods-list main-wrap-21">
                                    <div className="goods-list-tit">
                                        <h3>코디네이션 5</h3>
                                    </div>
                                    <div className="goods-list-content goods-content-21">
                                        <div className="item-gallery-type">
                                            <ul>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_1}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_2}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_3}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
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
                        </li>
                        <li className="md-pick-content">
                            <div className="md-pick-thumb">
                                <img src={md_pick_1} alt="MD선정 코디" />
                            </div>
                            <div className="md-pick-product">
                                <div className="goods-list main-wrap-21">
                                    <div className="goods-list-tit">
                                        <h3>코디네이션 5</h3>
                                    </div>
                                    <div className="goods-list-content goods-content-21">
                                        <div className="item-gallery-type">
                                            <ul>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_1}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_2}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_3}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
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
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="md-pick-content">
                            <div className="md-pick-thumb">
                                <img src={md_pick_2} alt="MD선정 코디" />
                            </div>
                            <div className="md-pick-product">
                                <div className="goods-list main-wrap-21">
                                    <div className="goods-list-tit">
                                        <h3>코디네이션 5</h3>
                                    </div>
                                    <div className="goods-list-content goods-content-21">
                                        <div className="item-gallery-type">
                                            <ul>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_1}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_2}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_3}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
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
                        </li>
                        <li className="md-pick-content">
                            <div className="md-pick-thumb">
                                <img src={md_pick_2} alt="MD선정 코디" />
                            </div>
                            <div className="md-pick-product">
                                <div className="goods-list main-wrap-21">
                                    <div className="goods-list-tit">
                                        <h3>코디네이션 5</h3>
                                    </div>
                                    <div className="goods-list-content goods-content-21">
                                        <div className="item-gallery-type">
                                            <ul>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_1}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_2}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_3}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
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
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="md-pick-content">
                            <div className="md-pick-thumb">
                                <img src={md_pick_3} alt="MD선정 코디" />
                            </div>
                            <div className="md-pick-product">
                                <div className="goods-list main-wrap-21">
                                    <div className="goods-list-tit">
                                        <h3>코디네이션 5</h3>
                                    </div>
                                    <div className="goods-list-content goods-content-21">
                                        <div className="item-gallery-type">
                                            <ul>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_1}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_2}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_3}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
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
                        </li>
                        <li className="md-pick-content">
                            <div className="md-pick-thumb">
                                <img src={md_pick_3} alt="MD선정 코디" />
                            </div>
                            <div className="md-pick-product">
                                <div className="goods-list main-wrap-21">
                                    <div className="goods-list-tit">
                                        <h3>코디네이션 5</h3>
                                    </div>
                                    <div className="goods-list-content goods-content-21">
                                        <div className="item-gallery-type">
                                            <ul>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_1}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_2}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
                                                                <img src={labelNew} alt="라벨 뉴" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item-cont">
                                                        <div className="item-photo-box">
                                                            <a href="">
                                                                <img
                                                                    src={product_men_3}
                                                                    alt="23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="item-info-cont">
                                                            <div className="item-tit-box">
                                                                <p className="cate-name">New</p>
                                                                <a href="">
                                                                    <strong className="item-name">
                                                                        23' 빅로고 하이넥 기모 티셔츠 MCM4TB811 BLK
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                            <div className="item-money-box">
                                                                <strong className="item-price">
                                                                    <span>290,000</span>
                                                                </strong>
                                                            </div>
                                                            <div className="item-icon-box">
                                                                <img src={labelMen} alt="라벨 남자" />
                                                                <img src={labelMile} alt="라벨 마일리자" />
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
                        </li>
                    </SwiperSlide>
                </Swiper>

                <div className="btn-goods-down-more">
                    <a href="#">MORE STYLE &nbsp;+</a>
                </div>
            </div>
        </div>
    );
};

export default MainMdPick;
