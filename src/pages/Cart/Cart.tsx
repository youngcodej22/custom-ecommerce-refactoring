import React from 'react';

import IconCart1 from '/assets/icon/icon-cart-1.png';
import IconCart2 from '/assets/icon/icon-cart-2.png';
import IconCartResult from '/assets/icon/icon-cart-result.png';
import IconCartPlus from '/assets/icon/icon-cart-plus.png';

import './Cart.scss';

const Cart = () => {
    return (
        <div className="cart">
            {/* <div id="container" style="min-height: 1348px; padding-top: 100px"> */}
            <div className="location_wrap">
                <div className="location_cont">
                    <em>
                        <a href="#" className="local_home">
                            HOME
                        </a>
                        <span className="arr"></span>장바구니
                    </em>
                </div>
            </div>

            <div className="sub_content">
                <div className="content_box">
                    <div className="order_wrap">
                        <div className="order_tit">
                            <h2>장바구니</h2>
                            <ol>
                                <li className="page_on">
                                    <span>01</span> 장바구니
                                    <span>
                                        <img
                                            src={IconCart1}
                                            alt="장바구니진행 중"
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span>02</span> 주문서작성/결제
                                    <span>
                                        <img
                                            src={IconCart2}
                                            alt="주문서작성/결제대기"
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span>03</span> 주문완료
                                </li>
                            </ol>
                        </div>

                        <div className="cart_cont">
                            <form
                                id="frmCart"
                                name="frmCart"
                                method="post"
                                target="ifrmProcess"
                            >
                                <input type="hidden" name="mode" value="" />
                                <input
                                    type="hidden"
                                    name="cart[cartSno]"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="cart[goodsNo]"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="cart[goodsCnt]"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="cart[addGoodsNo]"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="cart[addGoodsCnt]"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="cart[couponApplyNo]"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="useBundleGoods"
                                    value="1"
                                />
                                <input type="hidden" name="ac_id" value="" />
                                <p className="no_data">
                                    장바구니에 담겨있는 상품이 없습니다.
                                </p>
                            </form>

                            <div className="btn_box cart_btn_box">
                                <a
                                    href="https://mckayson.com:443/"
                                    className="shop_go_link"
                                >
                                    <em>&lt; 쇼핑 계속하기</em>
                                </a>
                                <div>
                                    <p
                                        id="deliveryChargeText"
                                        className="tobe_mileage"
                                    ></p>
                                </div>
                            </div>

                            <div className="price_sum">
                                <div className="price_sum_cont">
                                    <div className="price_sum_list">
                                        <dl>
                                            <dt>상품금액</dt>
                                            <dd>
                                                <strong id="totalGoodsPrice">
                                                    0
                                                </strong>
                                                원
                                            </dd>
                                        </dl>
                                        <span>
                                            <img
                                                src={IconCartPlus}
                                                alt="더하기"
                                            />
                                        </span>
                                        <dl>
                                            <dt>배송비</dt>
                                            <dd>
                                                <strong id="totalDeliveryCharge">
                                                    0
                                                </strong>
                                                원
                                            </dd>
                                        </dl>
                                        <span>
                                            <img
                                                src={IconCartResult}
                                                alt="합계"
                                            />
                                        </span>
                                        <dl className="price_total">
                                            <dt>총 주문금액</dt>
                                            <dd>
                                                <strong id="totalSettlePrice">
                                                    0
                                                </strong>
                                                원
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                    id="couponApplyLayer"
                    className="layer_wrap coupon_apply_layer dn"
                ></div>
                <div id="optionViewLayer" className="layer_wrap dn"></div> */}
            </div>
        </div>
    );
};

export default Cart;
