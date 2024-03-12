import React from 'react';
import carousel1 from '/assets/carousel/01_first.jpg';
import carousel2 from '/assets/carousel/02_second.jpg';
import carousel3 from '/assets/carousel/03_third.jpg';
import carousel4 from '/assets/carousel/04_event.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Autoplay } from 'swiper/modules';
import { EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';

// import { LoremPicsum } from 'react-lorem-picsum';

import './MainVisual.scss';

const MainVisual = () => {
    return (
        <div className="main-visual">
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper> */}
            <Swiper
                // cssMode={true}
                // spaceBetween={30}
                effect="fade"
                navigation={true}
                // pagination={true}
                pagination={{
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                keyboard={true}
                // modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
                modules={[EffectFade, Navigation, Pagination, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel1} alt="메인광고이미지1" />
                    <div className="slide-txt">
                        <p>
                            MCKAYSON
                            <br />
                            2월 신규 회원 혜택
                        </p>
                        <span>DETAIL</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel2} alt="메인광고이미지2" />
                    <div className="slide-txt">
                        <p>
                            MCKAYSON
                            <br />
                            24' S/S Season Pattern
                            <br />
                            New Launch
                        </p>
                        <span>DETAIL</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel3} alt="메인광고이미지3" />
                    <div className="slide-txt">
                        <p>
                            MCKAYSON
                            <br />
                            23' Season Off
                            <br />
                            Big Sale
                        </p>
                        <span>DETAIL</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel4} alt="메인광고이미지4" />
                    <div className="slide-txt">
                        <p>
                            온라인 스토어
                            <br />
                            상품권 런칭
                        </p>
                        <span>DETAIL</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainVisual;
