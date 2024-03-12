import React from 'react';

import promotion_1 from '/assets/promotion/promotion-1.jpg';
import promotion_2 from '/assets/promotion/promotion-2.jpg';
import promotion_3 from '/assets/promotion/promotion-3.jpg';
import promotion_4 from '/assets/promotion/promotion-4.jpg';
import promotion_5 from '/assets/promotion/promotion-5.jpg';
import labelHot from '/assets/label/label-hot.png';
import iconChosen from '/assets/icon/icon-chosen.png';
import iconBoardFile from '/assets/icon/icon-board-file.png';
import iconBoardImg from '/assets/icon/icon-board-img.png';

import './Promotion.scss';

const Promotion = () => {
    return (
        <div className="promotion">
            {/* <div id="container" style="min-height: 1348px; padding-top: 100px;"> */}
            <div className="sub_content">
                <div className="content">
                    <div className="addition_zone">
                        {/* <p></p><p><br></p><p></p> */}
                    </div>
                    <div className="board_zone_sec">
                        <div className="board_zone_tit">
                            <h2>PROMOTION</h2>
                        </div>
                        <div className="board_hot_list">
                            <ul>
                                {/* <!--<li ><a href="list.php?bdId=event&period=all"><span>전체 <b className="dn">18</b></span></a></li>--> */}
                                <li className="on">
                                    <a href="list.php?bdId=event&amp;period=current">
                                        <span>
                                            진행중 이벤트 <b>5</b>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="list.php?bdId=event&amp;period=end">
                                        <span>
                                            종료된 이벤트{' '}
                                            <b className="dn">13</b>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="board_zone_cont">
                            <div className="board_zone_list">
                                <div className="board_list_event">
                                    <div className="event_list">
                                        <ul>
                                            <li data-end-day="2024.03.31">
                                                <div className="event_cont">
                                                    <div className="board_img">
                                                        <a href="javascript:gd_btn_view('event',28 , 'y')">
                                                            <img
                                                                src={
                                                                    promotion_1
                                                                }
                                                                width="580"
                                                                height="315"
                                                                className="js_image_load"
                                                                alt="diageo_promotion_2102x1300_수정240221.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="event_info_cont">
                                                        <div className="board_tit">
                                                            <a href="javascript:gd_btn_view('event',28 , 'y')">
                                                                <strong>
                                                                    ■ DIAGEO
                                                                    &amp;
                                                                    MCKAYSON
                                                                    Collaborat...
                                                                </strong>
                                                                <img
                                                                    src={
                                                                        iconBoardFile
                                                                    }
                                                                    alt="파일첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        iconBoardImg
                                                                    }
                                                                    alt="이미지첨부 있음"
                                                                    className="dn"
                                                                />
                                                            </a>
                                                        </div>

                                                        <div className="board_event_day">
                                                            <span>
                                                                2024.02.22 ~
                                                                2024.03.31
                                                            </span>
                                                        </div>
                                                        <div className="board_likeit_hits dn">
                                                            <span className="board_hits">
                                                                조회 123
                                                            </span>{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-end-day="2024.02.29">
                                                <div className="event_cont">
                                                    <div className="board_img">
                                                        <a href="javascript:gd_btn_view('event',25 , 'y')">
                                                            <img
                                                                src={
                                                                    promotion_2
                                                                }
                                                                width="580"
                                                                height="315"
                                                                className="js_image_load"
                                                                alt="newmember_2102x1300.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="event_info_cont">
                                                        <div className="board_tit">
                                                            <a href="javascript:gd_btn_view('event',25 , 'y')">
                                                                <strong>
                                                                    2월 맥케이슨
                                                                    신규 클랜원
                                                                    모집
                                                                </strong>
                                                                <img
                                                                    src={
                                                                        iconBoardFile
                                                                    }
                                                                    alt="파일첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        iconBoardImg
                                                                    }
                                                                    alt="이미지첨부 있음"
                                                                    className="dn"
                                                                />
                                                            </a>
                                                        </div>

                                                        <div className="board_event_day">
                                                            <span>
                                                                2024.02.01 ~
                                                                2024.02.29
                                                            </span>
                                                        </div>
                                                        <div className="board_likeit_hits dn">
                                                            <span className="board_hits">
                                                                조회 129
                                                            </span>{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-end-day="2024.02.29">
                                                <div className="event_cont">
                                                    <div className="board_img">
                                                        <a href="javascript:gd_btn_view('event',23 , 'y')">
                                                            <img
                                                                src={
                                                                    promotion_3
                                                                }
                                                                width="580"
                                                                height="315"
                                                                className="js_image_load"
                                                                alt="event_giftcard_2102x1300_수정240126_05.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="event_info_cont">
                                                        <div className="board_tit">
                                                            <a href="javascript:gd_btn_view('event',23 , 'y')">
                                                                <strong>
                                                                    온라인스토어
                                                                    상품권 런칭
                                                                </strong>
                                                                <img
                                                                    src={
                                                                        iconBoardFile
                                                                    }
                                                                    alt="파일첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        iconBoardImg
                                                                    }
                                                                    alt="이미지첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        labelHot
                                                                    }
                                                                    alt="인기글"
                                                                />
                                                            </a>
                                                        </div>

                                                        <div className="board_event_day">
                                                            <span>
                                                                2024.01.18 ~
                                                                2024.02.29
                                                            </span>
                                                        </div>
                                                        <div className="board_likeit_hits dn">
                                                            <span className="board_hits">
                                                                조회 1526
                                                            </span>{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-end-day="2999.10.24">
                                                <div className="event_cont">
                                                    <div className="board_img">
                                                        <a href="javascript:gd_btn_view('event',18 , 'y')">
                                                            <img
                                                                src={
                                                                    promotion_4
                                                                }
                                                                width="580"
                                                                height="315"
                                                                className="js_image_load"
                                                                alt="review_2102x1300.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="event_info_cont">
                                                        <div className="board_tit">
                                                            <a href="javascript:gd_btn_view('event',18 , 'y')">
                                                                <strong>
                                                                    맥케이슨
                                                                    월간 베스트
                                                                    리뷰 선정
                                                                    안내
                                                                </strong>
                                                                <img
                                                                    src={
                                                                        iconBoardFile
                                                                    }
                                                                    alt="파일첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        iconBoardImg
                                                                    }
                                                                    alt="이미지첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        labelHot
                                                                    }
                                                                    alt="인기글"
                                                                />
                                                            </a>
                                                        </div>

                                                        <div className="board_event_day">
                                                            <span>
                                                                상시 진행
                                                            </span>
                                                        </div>
                                                        <div className="board_likeit_hits dn">
                                                            <span className="board_hits">
                                                                조회 384
                                                            </span>{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-end-day="2999.12.31">
                                                <div className="event_cont">
                                                    <div className="board_img">
                                                        <a href="javascript:gd_btn_view('event',7 , 'y')">
                                                            <img
                                                                src={
                                                                    promotion_5
                                                                }
                                                                width="580"
                                                                height="315"
                                                                className="js_image_load"
                                                                alt="newmember_2102x1300.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="event_info_cont">
                                                        <div className="board_tit">
                                                            <a href="javascript:gd_btn_view('event',7 , 'y')">
                                                                <strong>
                                                                    맥케이슨
                                                                    온라인몰
                                                                    신규회원
                                                                    혜택 안내
                                                                </strong>
                                                                <img
                                                                    src={
                                                                        iconBoardFile
                                                                    }
                                                                    alt="파일첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        iconBoardImg
                                                                    }
                                                                    alt="이미지첨부 있음"
                                                                    className="dn"
                                                                />
                                                                <img
                                                                    src={
                                                                        labelHot
                                                                    }
                                                                    alt="인기글"
                                                                />
                                                            </a>
                                                        </div>

                                                        <div className="board_event_day">
                                                            <span>
                                                                상시 진행
                                                            </span>
                                                        </div>
                                                        <div className="board_likeit_hits dn">
                                                            <span className="board_hits">
                                                                조회 1155
                                                            </span>{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pagination">
                                    <ul>
                                        <li className="on">
                                            <span>1</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="board_search_box">
                                    <form
                                        name="frmList"
                                        id="frmList"
                                        action="list.php"
                                        method="get"
                                    >
                                        <input
                                            type="hidden"
                                            name="bdId"
                                            value="event"
                                        />
                                        <input
                                            type="hidden"
                                            name="memNo"
                                            value=""
                                        />
                                        <input
                                            type="hidden"
                                            name="noheader"
                                            value=""
                                        />
                                        <input
                                            type="hidden"
                                            name="mypageFl"
                                            value=""
                                        />

                                        {/* <select className="chosen-select" name="searchField" style="display: none;"> */}
                                        <select
                                            className="chosen-select"
                                            name="searchField"
                                        >
                                            <option value="subject">
                                                제목
                                            </option>
                                            <option value="contents">
                                                내용
                                            </option>
                                            <option value="writerNm">
                                                작성자
                                            </option>
                                        </select>
                                        <div
                                            className="chosen-container chosen-container-single chosen-container-single-nosearch"
                                            title=""
                                        >
                                            <a className="chosen-single">
                                                <span>제목</span>
                                                <div>
                                                    <b></b>
                                                </div>
                                            </a>
                                            <div className="chosen-drop">
                                                <div className="chosen-search">
                                                    <input
                                                        className="chosen-search-input"
                                                        type="text"
                                                    />
                                                </div>
                                                <ul className="chosen-results">
                                                    <li
                                                        className="active-result result-selected"
                                                        data-option-array-index="0"
                                                    >
                                                        제목
                                                    </li>
                                                    <li
                                                        className="active-result"
                                                        data-option-array-index="1"
                                                    >
                                                        내용
                                                    </li>
                                                    <li
                                                        className="active-result"
                                                        data-option-array-index="2"
                                                    >
                                                        작성자
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            className="text"
                                            name="searchWord"
                                            value=""
                                        />
                                        <button className="btn_board_search">
                                            <em>검색</em>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="addition_zone">
                        {/* <p></p><p><br></p><p></p> */}
                    </div>
                    {/* <form id="frmWritePassword">
                    <div id="lyPassword" className="dn layer_wrap password_layer" style="height: 226px"> 
                        <div
                            id="lyPassword"
                            className="dn layer_wrap password_layer"
                        >
                            <div className="layer_wrap_cont">
                                <div className="ly_tit">
                                    <h4>비밀번호 인증</h4>
                                </div>
                                <div className="ly_cont">
                                    <div className="scroll_box">
                                        <p>비밀번호를 입력해 주세요.</p>
                                        <input
                                            type="password"
                                            name="writerPw"
                                            className="text"
                                        />
                                    </div>
                                    <div className="btn_center_box">
                                        <button
                                            type="button"
                                            className="btn_ly_password js_submit"
                                        >
                                            <strong>확인</strong>
                                        </button>
                                    </div>
                                </div>
                                <a
                                    href="#close"
                                    className="ly_close layer_close"
                                >
                                    <img
                                        src="https://mckayson.cdn-nhncommerce.com/data/skin/front/moment_C_C/img/common/layer/btn_layer_close.png"
                                        alt="닫기"
                                    />
                                </a>
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default Promotion;
