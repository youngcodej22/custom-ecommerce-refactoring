import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
    return (
        <div className="productdetail">
            <div className="sub_content">
                <div className="content_box">
                    <div className="location_wrap">
                        <div className="location_cont">
                            <em>
                                <a href="" className="local_home">
                                    HOME
                                </a>
                            </em>
                            <span className="arr"></span>
                            <div className="location_select">
                                <div className="location_tit">
                                    <a href="">
                                        <span>WOMEN</span>
                                        {/* 여기에 ul을 둘 필요 없이 header nav로 볼 수 있게하자 */}
                                        {/* <ul></ul> */}
                                    </a>
                                </div>
                            </div>
                            <span className="arr"></span>
                            <div className="location_select">
                                <div className="location_tit">
                                    <a href="">
                                        <span>하의</span>
                                    </a>
                                </div>
                            </div>
                            <span className="arr"></span>
                            <div className="location_select">
                                <div className="location_tit">
                                    <a href="">
                                        <span>스커트</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item_photo_info_sec">
                        <div className="item_photo_view_box">
                            <div className="item_photo_view">
                                <div className="item_photo_big">
                                    <span>
                                        <a href="" className="zoom_layer_open">
                                            <img src="" alt="" />
                                        </a>
                                    </span>
                                    <a href="" id="testZoom"></a>
                                </div>
                                <div id="testZoom"></div>
                                <div className="item_photo_slide">
                                    <button className="slick"></button>
                                    <ul></ul>
                                    <button></button>
                                </div>
                            </div>

                            <div className="item_info_box">
                                <form name="frmView" id="frmView" method="post">
                                    <input
                                        type="hidden"
                                        name="mode"
                                        value="get_benefit"
                                    />
                                    <input
                                        type="hidden"
                                        name="scmNo"
                                        value="1"
                                    />
                                    <input
                                        type="hidden"
                                        name="cartMode"
                                        value=""
                                    />
                                    <input
                                        type="hidden"
                                        name="set_goods_price"
                                        value="430000"
                                    />
                                    <input
                                        type="hidden"
                                        id="set_goods_fixedPrice"
                                        name="set_goods_fixedPrice"
                                        value="430000.00"
                                    />
                                    <input
                                        type="hidden"
                                        name="set_goods_mileage"
                                        value="0"
                                    />
                                    <input
                                        type="hidden"
                                        name="set_goods_stock"
                                        value="16"
                                    />
                                    <input
                                        type="hidden"
                                        name="set_coupon_dc_price"
                                        value="430000.00"
                                    />
                                    <input
                                        type="hidden"
                                        id="set_goods_total_price"
                                        name="set_goods_total_price"
                                        value="0"
                                    />
                                    <input
                                        type="hidden"
                                        id="set_option_price"
                                        name="set_option_price"
                                        value="0"
                                    />
                                    <input
                                        type="hidden"
                                        id="set_option_text_price"
                                        name="set_option_text_price"
                                        value="0"
                                    />
                                    <input
                                        type="hidden"
                                        id="set_add_goods_price"
                                        name="set_add_goods_price"
                                        value="0"
                                    />
                                    <input
                                        type="hidden"
                                        name="set_total_price"
                                        value="430000"
                                    />
                                    <input
                                        type="hidden"
                                        name="mileageFl"
                                        value="c"
                                    />
                                    <input
                                        type="hidden"
                                        name="mileageGoods"
                                        value="0.00"
                                    />
                                    <input
                                        type="hidden"
                                        name="mileageGoodsUnit"
                                        value="percent"
                                    />
                                    <input
                                        type="hidden"
                                        name="goodsDiscountFl"
                                        value="n"
                                    />
                                    <input
                                        type="hidden"
                                        name="goodsDiscount"
                                        value="0.00"
                                    />
                                    <input
                                        type="hidden"
                                        name="goodsDiscountUnit"
                                        value="percent"
                                    />
                                    <input
                                        type="hidden"
                                        name="taxFreeFl"
                                        value="t"
                                    />
                                    <input
                                        type="hidden"
                                        name="taxPercent"
                                        value="10.0"
                                    />
                                    <input
                                        type="hidden"
                                        name="scmNo"
                                        value="1"
                                    />
                                    <input
                                        type="hidden"
                                        name="brandCd"
                                        value="002"
                                    />
                                    <input
                                        type="hidden"
                                        name="cateCd"
                                        value="004002003"
                                    />
                                    <input
                                        type="hidden"
                                        id="set_dc_price"
                                        value="0"
                                    />
                                    <input
                                        type="hidden"
                                        id="goodsOptionCnt"
                                        value="1"
                                    />
                                    <input
                                        type="hidden"
                                        name="optionFl"
                                        value="y"
                                    />
                                    <input
                                        type="hidden"
                                        name="goodsDeliveryFl"
                                        value="y"
                                    />
                                    <input
                                        type="hidden"
                                        name="sameGoodsDeliveryFl"
                                        value="n"
                                    />
                                    <input
                                        type="hidden"
                                        name="useBundleGoods"
                                        value="1"
                                    />
                                    <input
                                        type="hidden"
                                        name="ac_id"
                                        value=""
                                    />
                                    <input
                                        type="hidden"
                                        name="event_id"
                                        value=""
                                    />
                                    <div className="item_tit_detail_cont">
                                        <div className="item_detail_tit">
                                            <p className="model_name">
                                                MDW1PC615 LBE
                                            </p>
                                            <h3>
                                                24 개더 플리츠 스커트 베이지
                                                MDW1PC615 LBE
                                                <div className="btn_layer btn_qa_share_box">
                                                    <span className="btn_gray_list target_sns_share">
                                                        <a
                                                            href="#lySns"
                                                            className="share_btn"
                                                        >
                                                            <img
                                                                src="https://mckayson.cdn-nhncommerce.com/data/skin/front/moment_C_C/img/goods/share_btn.png"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </span>

                                                    <div
                                                        id="lySns"
                                                        className="layer_area"
                                                        style={{
                                                            display: 'none',
                                                        }}
                                                    >
                                                        <div className="ly_wrap sns_layer">
                                                            <div className="ly_tit">
                                                                <strong>
                                                                    SNS 공유하기
                                                                </strong>
                                                            </div>
                                                            <div className="ly_cont">
                                                                <div className="sns_list">
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                id="shareKakaoLinkBtn"
                                                                                data-sns="kakaolink"
                                                                            >
                                                                                <img
                                                                                    src="https://mckayson.cdn-nhncommerce.com/data/skin/front/moment_C_C/img/btn/sns-kakaolink.png"
                                                                                    alt="카카오톡 공유"
                                                                                />
                                                                                <br />
                                                                                <span>
                                                                                    카카오톡링크
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="sns_copy_url">
                                                                        <input
                                                                            type="text"
                                                                            value="https://www.mckayson.com/goods/goods_view.php?goodsNo=1000005851"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="gd_clipboard"
                                                                            title="상품주소"
                                                                            data-clipboard-text="https://www.mckayson.com/goods/goods_view.php?goodsNo=1000005851"
                                                                        >
                                                                            <em>
                                                                                URL복사
                                                                            </em>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* ly_cont */}
                                                            <a
                                                                href="#close"
                                                                className="ly_close"
                                                            >
                                                                <img
                                                                    src="https://mckayson.cdn-nhncommerce.com/data/skin/front/moment_C_C/img/common/layer/btn_layer_close.png"
                                                                    alt="닫기"
                                                                />
                                                            </a>
                                                        </div>
                                                        {/* ly_wrap  */}
                                                    </div>
                                                    {/* layer_area */}
                                                </div>
                                                {/* btn_qa_share_box */}
                                            </h3>
                                            {/* 짧은설명 */}
                                            <div className="price_wrap">
                                                <span className="item_price ">
                                                    <strong>430,000</strong>
                                                    {/* 글로벌 참조 화폐 임시 적용 */}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="item_detail_list">
                                            <div className="goods_option_wrap">
                                                <div className="item_add_option_box">
                                                    <dl>
                                                        <dt>Size</dt>
                                                        <dd className="button_wrap">
                                                            <span className="form_element">
                                                                <input
                                                                    type="radio"
                                                                    className="optionRadio  option_radio0"
                                                                    id="size0_0"
                                                                    name="optionSnoInput"
                                                                    disabled
                                                                    value="112378||0||||0^|^베이지:061"
                                                                />
                                                                <label
                                                                    htmlFor="size0_0"
                                                                    className="choice_s"
                                                                >
                                                                    베이지:061
                                                                </label>
                                                            </span>
                                                            <span className="form_element">
                                                                <input
                                                                    type="radio"
                                                                    className="optionRadio  option_radio1"
                                                                    id="size1_1"
                                                                    name="optionSnoInput"
                                                                    value="112379||0||||5^|^베이지:064"
                                                                />
                                                                <label
                                                                    htmlFor="size1_1"
                                                                    className="choice_s"
                                                                >
                                                                    베이지:064
                                                                </label>
                                                            </span>
                                                            <span className="form_element">
                                                                <input
                                                                    type="radio"
                                                                    className="optionRadio  option_radio2"
                                                                    id="size2_2"
                                                                    name="optionSnoInput"
                                                                    value="112380||0||||4^|^베이지:067"
                                                                />
                                                                <label
                                                                    htmlFor="size2_2"
                                                                    className="choice_s"
                                                                >
                                                                    베이지:067
                                                                </label>
                                                            </span>
                                                            <span className="form_element">
                                                                <input
                                                                    type="radio"
                                                                    className="optionRadio  option_radio3"
                                                                    id="size3_3"
                                                                    name="optionSnoInput"
                                                                    value="112381||0||||7^|^베이지:070"
                                                                />
                                                                <label
                                                                    htmlFor="size3_3"
                                                                    className="choice_s"
                                                                >
                                                                    베이지:070
                                                                </label>
                                                            </span>
                                                            <span className="form_element">
                                                                <input
                                                                    type="radio"
                                                                    className="optionRadio  option_radio4"
                                                                    id="size4_4"
                                                                    name="optionSnoInput"
                                                                    disabled
                                                                    value="112382||0||||0^|^베이지:073"
                                                                />
                                                                <label
                                                                    htmlFor="size4_4"
                                                                    className="choice_s"
                                                                >
                                                                    베이지:073
                                                                </label>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>

                                            <dl className="item_price dn">
                                                <dt>판매가</dt>
                                                <dd>
                                                    <strong>
                                                        <strong>430,000</strong>
                                                    </strong>
                                                    원
                                                </dd>
                                            </dl>
                                            <dl className="item_discount_mileage">
                                                <dt>구매혜택</dt>
                                                <dd>
                                                    <span className="item_discount dn">
                                                        할인 :{' '}
                                                        <strong className="total_benefit_price"></strong>{' '}
                                                        <span className="benefit_price item_apply"></span>
                                                    </span>
                                                    <span className="item_mileage">
                                                        적립 :{' '}
                                                        <strong className="total_benefit_mileage">
                                                            +21,500원
                                                        </strong>{' '}
                                                        <span className="benefit_mileage item_apply">
                                                            (상품 : 21,500원)
                                                        </span>
                                                    </span>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>카드혜택</dt>
                                                <dd>
                                                    최대 7개월 무이자 할부 혜택{' '}
                                                    <a
                                                        href="#cardBenefit"
                                                        className="card_popup_open"
                                                    >
                                                        자세히 보기
                                                    </a>
                                                    <div
                                                        id="cardBenefit"
                                                        className="cart_benefit_wrap dn"
                                                    >
                                                        <div className="card_benefit_cont">
                                                            <h4 className="card_benefit_tit">
                                                                이달의
                                                                무이자할부 카드
                                                                안내
                                                            </h4>
                                                            <div className="card_benefit_detail">
                                                                <dl>
                                                                    <dt>
                                                                        행사
                                                                        기간:{' '}
                                                                    </dt>
                                                                    <dd>
                                                                        2023.11.01
                                                                        -
                                                                        2023.11.30
                                                                    </dd>
                                                                </dl>
                                                                <table className="card_benefit_table">
                                                                    <caption>
                                                                        무이자할부
                                                                        적용
                                                                        카드
                                                                    </caption>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                카드사
                                                                            </th>
                                                                            <th>
                                                                                조건
                                                                            </th>
                                                                            <th>
                                                                                할부개월
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                현대카드
                                                                            </td>
                                                                            <td>
                                                                                1만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                신한카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                국민카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                롯데카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                삼성카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                하나카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                전북카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~3개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                NH농협카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~4개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                비씨카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~6개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                우리카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~6개월
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                광주카드
                                                                            </td>
                                                                            <td>
                                                                                5만원
                                                                                이상
                                                                            </td>
                                                                            <td>
                                                                                2~7개월
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <a
                                                                href="#close"
                                                                className="card_popup_close"
                                                            >
                                                                팝업 닫기
                                                            </a>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>가입혜택</dt>
                                                <dd>
                                                    회원 가입 후 평생 무료배송{' '}
                                                    <a
                                                        href="../service/membership.php"
                                                        className="membership_detail_btn"
                                                    >
                                                        멤버십 확인하기
                                                    </a>
                                                </dd>
                                            </dl>
                                        </div>

                                        <div className="option_total_display_area item_choice_list">
                                            <table className="option_display_area">
                                                <colgroup>
                                                    <col />
                                                    <col width="120px" />
                                                    <col width="100px" />
                                                    <col width="40px" />
                                                </colgroup>
                                            </table>
                                            <div className="item_price_cont">
                                                <div
                                                    className="end_price item_tatal_box"
                                                    style={{ display: 'none' }}
                                                >
                                                    <dl className="total_goods">
                                                        <dt>총 상품금액</dt>
                                                        <dd>
                                                            <strong className="goods_total_price"></strong>
                                                        </dd>
                                                    </dl>
                                                    <dl className="total_discount dn">
                                                        <dt>총 할인금액</dt>
                                                        <dd>
                                                            <strong className="total_benefit_price"></strong>
                                                        </dd>
                                                    </dl>
                                                    <dl className="total_amount">
                                                        <dt>총 합계금액</dt>
                                                        <dd>
                                                            <strong className="total_price">
                                                                {' '}
                                                                430,000<b>원</b>
                                                            </strong>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn_choice_box">
                                            <div className="flex_box ">
                                                <button
                                                    id="wishBtn"
                                                    type="button"
                                                    className="btn_add_wish"
                                                ></button>
                                                <button
                                                    id="cartBtn"
                                                    type="button"
                                                    className="btn_add_cart"
                                                >
                                                    장바구니
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn_add_order"
                                                >
                                                    구매하기
                                                </button>
                                            </div>
                                        </div>

                                        {/* naver pay */}
                                        <div className="pay_box"></div>
                                    </div>
                                    <input
                                        type="hidden"
                                        name="deliveryCollectFl"
                                        value="pre"
                                    ></input>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="item_goods_sec"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
