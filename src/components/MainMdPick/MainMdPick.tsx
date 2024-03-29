import React, { useState } from 'react';

import MdPickContent from '../MdPickContent/MdPickContent';
// data
import productsData from '../../data/json/products_home.json';
import coordinationData from '../../data/coordination.ts';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import './MainMdPick.scss';

const MainMdPick = () => {
    // Function to split the coordination data into chunks of 2
    // const chunkArray = (array, size) => {
    //     return array.reduce(
    //         (acc, _, index) =>
    //             index % size ? acc : [...acc, array.slice(index, index + size)],
    //         [],
    //     );
    // };

    // const coordinationChunks = chunkArray(coordinationData, 2);

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
                    loop={true}
                    slidesPerView={2}
                    // onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                    // initialSlide={activeIndex}
                >
                    {/* <SwiperSlide>
                        <MdPickContent />
                        <MdPickContent />/
                    </SwiperSlide>
                    <SwiperSlide>
                        <MdPickContent />
                        <MdPickContent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MdPickContent />
                        <MdPickContent />
                    </SwiperSlide> */}
                    {/* {coordinationChunks.map((chunk, index) => (
                        <SwiperSlide key={index}>
                            <MdPickContent data={chunk} />
                        </SwiperSlide>
                    ))} */}
                    {coordinationData.map((coordi, index) => (
                        <SwiperSlide key={index}>
                            <MdPickContent data={coordi} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="btn-goods-down-more">
                    <a href="#">MORE STYLE &nbsp;+</a>
                </div>
            </div>
        </div>
    );
};

export default MainMdPick;
