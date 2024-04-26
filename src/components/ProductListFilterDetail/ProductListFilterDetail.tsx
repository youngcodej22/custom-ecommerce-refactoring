import React, { useState } from 'react';
// assets
import iconFilter from '/assets/icon/icon-filter.png';

import './ProductListFilterDetail.scss';

const ProductListFilterDetail = () => {
    // const [isActive, setIsActive] = useState(false);
    const [activeSections, setActiveSections] = useState({
        gender: false,
        color: false,
        size: false,
        weather: false,
        price: false,
    });

    // const toggleActive = () => {
    //     setIsActive(!isActive);
    // };
    const toggleActive = section => {
        setActiveSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="productlist-filter-detail">
            <dl className="filter_tit">
                <dt>
                    필터
                    <button>
                        <img src={iconFilter} alt="필터" />
                    </button>
                </dt>
                <dd className="select_filter_wrap"></dd>
            </dl>
            <dl className="button_list_wrap gender">
                {/* <dt
                    className={`option_toggle_btn ${isActive ? 'on' : ''}`}
                    onClick={toggleActive}
                >
                    성별
                </dt> */}
                <dt
                    className={`option_toggle_btn ${
                        activeSections.gender ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('gender')}
                >
                    성별
                </dt>
                <dd>
                    <ul className="button_list">
                        <li>
                            <input
                                type="radio"
                                id="searchSexm"
                                value="m"
                                data-text="남성"
                            />
                            <label htmlFor="searchSexm" className="check-s">
                                남성
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="searchSexw"
                                value="w"
                                data-text="여성"
                            />
                            <label htmlFor="searchSexw" className="check-s">
                                여성
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="searchSexu"
                                value="u"
                                data-text="공용"
                            />
                            <label htmlFor="searchSexu" className="check-s">
                                공용
                            </label>
                        </li>
                    </ul>
                </dd>
            </dl>
            <dl className="color">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.color ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('color')}
                >
                    컬러
                </dt>
                <dd>
                    <ul className="color_box">
                        <li>
                            <input
                                type="checkbox"
                                id="searchColorFFFFFF"
                                value="FFFFFF"
                                data-text="화이트"
                            />
                            <label
                                htmlFor="searchColorFFFFFF"
                                className="check-s"
                                title="FFFFFF"
                            >
                                <div className="bg">
                                    <span></span>
                                </div>
                                <p>화이트</p>
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="searchColorFFFFFF"
                                value="FFFFFF"
                                data-text="화이트"
                            />
                            <label
                                htmlFor="searchColorFFFFFF"
                                className="check-s"
                                title="FFFFFF"
                            >
                                <div className="bg"></div>
                                <p>화이트</p>
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="searchColorFFFFFF"
                                value="FFFFFF"
                                data-text="화이트"
                            />
                            <label
                                htmlFor="searchColorFFFFFF"
                                className="check-s"
                                title="FFFFFF"
                            >
                                <div className="bg"></div>
                                <p>화이트</p>
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="searchColorFFFFFF"
                                value="FFFFFF"
                                data-text="화이트"
                            />
                            <label
                                htmlFor="searchColorFFFFFF"
                                className="check-s"
                                title="FFFFFF"
                            >
                                <div className="bg"></div>
                                <p>화이트</p>
                            </label>
                        </li>
                    </ul>
                </dd>
            </dl>
            <dl className="button_list_wrap size">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.size ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('size')}
                >
                    사이즈
                </dt>
                <dd>
                    <ul className="button_list">
                        <li>
                            <input
                                type="checkbox"
                                id="searchSize00L"
                                data-text="00L"
                            />
                            <label htmlFor="searchSize00L" className="check-s">
                                00L
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="searchSize00L"
                                data-text="00L"
                            />
                            <label htmlFor="searchSize00L" className="check-s">
                                00L
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="searchSize00L"
                                data-text="00L"
                            />
                            <label htmlFor="searchSize00L" className="check-s">
                                00L
                            </label>
                        </li>
                    </ul>
                </dd>
            </dl>
            <dl className="button_list_wrap weather">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.weather ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('weather')}
                >
                    계절
                </dt>
                <dd>
                    <ul className="button_list">
                        <li>
                            <input
                                type="checkbox"
                                id="searchWeather"
                                data-text="봄"
                            />
                            <label htmlFor="searchWeather" className="check-s">
                                봄
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="searchWeather"
                                data-text="여름"
                            />
                            <label htmlFor="searchWeather" className="check-s">
                                여름
                            </label>
                        </li>
                    </ul>
                </dd>
            </dl>
            <dl className="price_range_wrap">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.price ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('price')}
                >
                    가격
                </dt>
                <dd>
                    <div id="rangeSlider">
                        <div className="noUi-base">
                            <div className="noUi-connects">
                                <div className="noUi-connect"></div>
                            </div>
                            <div className="noUi-origin">
                                <div
                                    className="noUi-handle noUi-handle-lower"
                                    data-handle="0"
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin="0.0"
                                    aria-valuemax="2000000.0"
                                    aria-valuenow="0.0"
                                    aria-valuetext="0.00"
                                >
                                    <div className="noUi-touch-area"></div>
                                </div>
                            </div>
                            <div
                                className="noUi-origin"
                                style={{
                                    transform: 'translate(0%, 0px)',
                                    zIndex: 4,
                                }}
                            >
                                <div
                                    className="noUi-handle noUi-handle-upper"
                                    data-handle="1"
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin="0.0"
                                    aria-valuemax="2000000.0"
                                    aria-valuenow="2000000.0"
                                    aria-valuetext="2000000.00"
                                >
                                    <div className="noUi-touch-area"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price_box">
                        <input type="text" value="0" />
                        <span>~</span>
                        <input type="text" value="20000" />
                    </div>
                </dd>
            </dl>
            <div className="quick_btn">
                <input type="button" value="상품 검색" />
            </div>
        </div>
    );
};

export default ProductListFilterDetail;
