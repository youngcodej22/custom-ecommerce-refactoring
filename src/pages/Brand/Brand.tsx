import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import brand_s1_01 from '/assets/brand/brand_s1_01.jpg';
import brand_s1_bg from '/assets/brand/brand_s1_bg.png';
import brand_s2_01 from '/assets/brand/brand_s2_01.png';
import brand_s2_02 from '/assets/brand/brand_s2_02.jpg';
import brand_s2_03 from '/assets/brand/brand_s2_03.jpg';
import brand_s2_04 from '/assets/brand/brand_s2_04.jpg';
import brand_s3_01 from '/assets/brand/brand_s3_01.png';
import brand_s3_02 from '/assets/brand/brand_s3_02.jpg';
import brand_s3_03 from '/assets/brand/brand_s3_03.jpg';
import brand_s3_04 from '/assets/brand/brand_s3_04.png';
import brand_s3_05 from '/assets/brand/brand_s3_05.png';
import brand_s3_06 from '/assets/brand/brand_s3_06.jpg';
import brand_s4_01 from '/assets/brand/brand_s4_01.jpg';
import brand_s4_02 from '/assets/brand/brand_s4_02.jpg';
import brand_s4_03 from '/assets/brand/brand_s4_03.jpg';
import brand_s4_04 from '/assets/brand/brand_s4_04.png';
import brand_s4_bg from '/assets/brand/brand_s4_bg.png';
import brand_s5_01 from '/assets/brand/brand_s5_01.jpg';
import brand_s5_02 from '/assets/brand/brand_s5_02.jpg';
import brand_s5_03 from '/assets/brand/brand_s5_03.jpg';
import brand_s5_04 from '/assets/brand/brand_s5_04.jpg';
import brand_s5_05 from '/assets/brand/brand_s5_05.png';

import './Brand.scss';

// aos css scroll package 필요

const Brand = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="brand">
            {/* <div id="container" style="min-height: 412px; padding-top: 100px"> */}
            {/* <div id="contents"> */}
            {/* <div class="sub_content"> */}
            {/* <div className="brandstory_wrap"> */}
            <section className="brand_section brand_section_01">
                <div className="brand_title_wrap">
                    <h2
                        className="brand_title aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        MCKAYSON. est. 1806
                    </h2>
                </div>
                <div className="full_inner">
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                        className="aos-init aos-animate"
                    >
                        불멸의 전사 "하이랜더"의 고향이자,
                        <br />
                        척박하고 험준한 지형의 스코틀랜드 최북단, 하이랜드.{' '}
                        <br />
                        맥케이슨의 정신은 이 곳에서부터 시작합니다.
                    </p>
                    <div
                        className="brand_img aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        <img src={brand_s1_01} alt="브랜드 소개 사진" />
                    </div>
                </div>
                <div className="layout_inner">
                    <article className="brand_column_wrap brand_column_wrap_3">
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s2_01} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_2 aos-init"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <h3 className="brand_sub_tit">
                                스코틀랜드 최강의 클랜 "맥케이"를 상징하는
                                <br />
                                MANU FORTI. (마누 포르티)
                            </h3>
                            <p>
                                "강인한 손"을 뜻하는 게일어로 하이랜더를
                                대표하는 불굴의 정신을 나타냅니다.
                            </p>
                            <p>
                                이것은 위대한 전사를 나타낼 뿐만 아니라, 수 없이
                                치른 전투와 전쟁 속에서도 <br />
                                상대를 적대시하지 않는 유연함과 관대함을
                                나타내는 그들의 정신입니다.
                            </p>
                        </div>
                    </article>
                    <article className="brand_column_wrap brand_column_wrap_3">
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s2_02} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s2_03} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s2_04} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_3 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <a
                                href="https://www.clanmackaysociety.co.uk/inauguration"
                                target="_blank"
                                className="btn_more"
                            >
                                맥케이 가문 홈페이지 바로가기
                            </a>
                        </div>
                    </article>
                    <article className="brand_column_wrap brand_column_wrap_3">
                        <div
                            className="brand_column column_3 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <h3 className="brand_sub_tit">
                                The Honourable Company of Edinburgh Golfers
                            </h3>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s3_01} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p>
                                <br />
                                18세기 후반, 고향을 떠나 <br />
                                전사의 모습에서 <br />
                                <br />
                                골프 플레이어와
                                <br />
                                클럽 메이커로 발전한 하이랜드의 전사들.
                                <br />
                            </p>
                            <div className="brand_img">
                                <img src={brand_s3_02} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p>
                                젠틀맨 골퍼스 오브 리스,
                                <br />
                                이후 아너러블 컴퍼니로 <br />
                                최초의 골프 동호인 클럽을 설립하고
                                <br />
                                <br />
                                최초로 골프 규칙을 재정하는 역사의 중심에서{' '}
                                <br />
                                ‘마누 포르티’ 정신을 찾을 수 있습니다.
                            </p>
                            <div className="brand_img">
                                <img src={brand_s3_03} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_3 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p>
                                <strong>
                                    하이랜더 정신은 전사의 손에서 장인의 손으로
                                    변화하여, 스코틀랜드와 유럽, 그리고 전세계로
                                    뻗어나가게 됩니다.
                                </strong>
                            </p>
                        </div>
                    </article>
                    <article className="brand_column_wrap brand_column_wrap_3">
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s3_04} alt="" />
                            </div>
                            <dl>
                                <dt>THISTLE GOLF CLUB</dt>
                                <dd>
                                    미국 노스캐롤라이나에 있는 클럽. 스코틀랜드
                                    씨슬을 상징으로 하며 “맥케이”, “캐머런”,
                                    “스튜어트”
                                    <br />
                                    3개의 코스를 보유하고 있습니다.
                                </dd>
                            </dl>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s3_05} alt="" />
                            </div>
                            <dl>
                                <dt>MACKAY GOLF CLUB</dt>
                                <dd>
                                    CB 맥도널드가 디자인하고,
                                    <br />
                                    이민자 그룹이 설립한 골프 클럽. <br />
                                    호주 맥케이 항구 옆 <br />
                                    리치몬드에 위치하고 있습니다.
                                </dd>
                            </dl>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s3_06} alt="" />
                            </div>
                            <dl>
                                <dt>MAC &amp; SON COMPANY</dt>
                                <dd>
                                    가장 오래되고 유명했던 가족 기업으로, 창업주
                                    제임스에 브런츠필드에서 시작. <br />
                                    1845년 머셀버러 대회에서 우수성과 <br />
                                    장인 정신을 인정 받았습니다.
                                </dd>
                            </dl>
                        </div>
                    </article>
                </div>
            </section>
            <section className="brand_section brand_section_02">
                <div
                    className="brand_title_wrap aos-init"
                    data-aos="fade-zoom-in"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                >
                    <h2 className="brand_title">BRAVE, BUT FLEX.</h2>
                </div>
                <div className="layout_inner">
                    <article
                        className="brand_column_wrap brand_column_wrap_2 line_column aos-init"
                        data-aos="fade-zoom-in"
                        data-aos-duration="1"
                        data-aos-offset="300"
                    >
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p>
                                <strong>FLOWER OF SCOTLAND.</strong>
                                <br />
                                강인하면서도 상대를 존중하고 화합할 줄 아는{' '}
                                <br />
                                하이랜더 "맥케이"의 유연한 정신은, <br />
                                스코틀랜드의 상징 씨슬(엉겅퀴)로 표현됩니다.
                            </p>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p>
                                골프, 하이랜드, 킬트, 클레이모어, 타탄체크,
                                스카치위스키. <br />
                                스코틀랜드를 상징하는 것은 많지만, <br />
                                마누 포르티를 대변하며 용감함과 유연함을 동시에
                                <br />
                                설명할 수 있는 존재는 오직
                                <strong>"씨슬"</strong> 입니다.
                            </p>
                        </div>
                    </article>
                    <article className="brand_column_wrap brand_column_wrap_3">
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s4_01} alt="" />
                            </div>
                            <h3 className="brand_sub_tit">
                                불모지의 투박한 야생화에서
                                <br />
                                사랑과 존중의 대상으로
                            </h3>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s4_02} alt="" />
                            </div>
                            <p>
                                거친 땅에서 자라는 야생의 씨슬은
                                <br />
                                13세기, 맨발로 소리없이 진군하는
                                <br />
                                덴마크 군의 발목을 잡았습니다.
                            </p>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s4_03} alt="" />
                            </div>
                            <p>
                                나라를 지켜낸 꽃에서 스코틀랜드의 국화로,
                                <br />
                                국가(national anthems)도
                                <br />
                                ‘BRAVE OF SCOTLAND’에서 ‘FLOWER OF SCOTLAND’로,
                            </p>
                        </div>
                    </article>
                </div>
                <div className="full_inner align_center">
                    <div
                        className="brand_img aos-init"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        <img src={brand_s4_04} alt="" />
                    </div>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                        className="aos-init"
                    >
                        일상 곳곳에 스며있는 씨슬은 그렇게 <br />
                        스코틀랜드의 정체성과 자긍심의 상징이 되었습니다.
                    </p>
                </div>
            </section>
            <section className="brand_section brand_section_03">
                <div
                    className="brand_title_wrap aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                >
                    <h2 className="brand_title">CLASSIC, BUT FLEX.</h2>
                </div>
                <div className="full_inner align_center">
                    <div
                        className="brand_img aos-init"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        <img src={brand_s5_01} alt="" />
                    </div>
                    <h3
                        className="brand_sub_tit aos-init"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        맥케이슨의 유연함은 씨슬과 맥케이, <br />
                        그리고 스코틀랜드 전통에서 출발하여
                        <br />
                        현대적으로 재해석되어 이어집니다.
                    </h3>
                    <p
                        data-aos-duration="1000"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        className="aos-init"
                    >
                        스코틀랜드의 유산을 바탕으로 트렌디함을 더한
                        <br />
                        스코틀랜드 클래식 골프웨어로서,
                        <br />
                        가치와 매너를 중요시하는 골퍼들에게
                        <br />
                        하이엔드 스타일을 제안하고,
                        <br />
                        자신감, 위트, 유연한 골퍼 정신을 전달합니다.
                    </p>
                </div>
                <div className="layout_inner">
                    <article className="brand_column_wrap brand_column_wrap_3">
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s5_02} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s5_03} alt="" />
                            </div>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <div className="brand_img">
                                <img src={brand_s5_04} alt="" />
                            </div>
                        </div>
                    </article>
                    <article
                        className="brand_column_wrap brand_column_wrap_2 line_column aos-init"
                        data-aos="fade-zoom-in"
                        data-aos-duration="1"
                        data-aos-offset="400"
                    >
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p>
                                스코틀랜드 골프 오리진,
                                <br />
                                에든버러, 링스, 씨슬, 최초와 최고.
                                <br />
                                그 중심에서 맥케이슨의 정신을 전합니다.
                                <br />
                                <strong>MCKAYSON. est. 1806</strong>
                            </p>
                        </div>
                        <div
                            className="brand_column column_1 aos-init"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                        >
                            <p className="brand_sub_tit">
                                맥케이슨을 입는다는 것. <br />
                                위트를 잃지 않는 용감함.
                                <br />
                                도전에 있어 근본과 매너를 지키는 것.
                            </p>
                        </div>
                    </article>
                </div>
                <div className="brand_title_wrap align_center">
                    <div
                        className="brand_img aos-init"
                        data-aos="fade-zoom-in"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                    >
                        <img src={brand_s5_05} alt="" width="14.9%" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brand;
