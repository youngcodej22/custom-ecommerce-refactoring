import React from 'react';

import bannerImage from '/assets/coordination/bg.jpg';

// import coordinationData from '../../data/json/coordination.json';
import coordinationData from '../../data/coordination.ts';

import MdPickContent from '../../components/MdPickContent/MdPickContent';

import './Coordination.scss';

const Coordination = () => {
    return (
        <div className="coordination">
            <div className="md-pick-banner">
                <img src={bannerImage} alt="코디네이션 상단 이미지" />
                <div className="banner-txt">
                    <h3>
                        #2024 S/S <br />
                        #MCKAYSON
                    </h3>
                </div>
            </div>
            <div className="scroll-down">Scroll Down</div>
            <div className="main-md-pick">
                <div className="md-pick-wrap">
                    <div className="main-tit">Coordination</div>
                    <ul className="md-pick-list">
                        {coordinationData.map((coordi, index) => (
                            <MdPickContent coordi={coordi} index={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Coordination;
