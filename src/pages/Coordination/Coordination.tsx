import React, { useEffect, useState } from 'react';

import bannerImage from '/assets/coordination/bg.jpg';

import './Coordination.scss';

const Coordination = () => {
    return (
        <div className="coordination">
            <div className="md_pick_banner">
                <img src={bannerImage} alt="코디네이션 상단 이미지" />
                <div className="banner_txt">
                    <h3>
                        #2024 S/S <br />
                        #MCKAYSON
                    </h3>
                </div>
            </div>
            <div className="scroll_down">Scroll Down</div>
        </div>
    );
};

export default Coordination;
