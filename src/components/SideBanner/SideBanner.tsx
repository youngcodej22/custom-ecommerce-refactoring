import React from 'react';
import SideBannerBrand from '/assets/banner/banner-brand.png';
import SideBannerStore from '/assets/banner/banner-store.png';

import './SideBanner.scss';

const SideBanner = () => {
    return (
        <div className="side-banner-wrap">
            <div className="brand-wrap banner-cont">
                <img src={SideBannerBrand} alt="brand story" />
                <div className="txt-wrap">
                    <h2 className="main-tit en">BRAND STORY</h2>
                    <div className="text">MCKAYSON. est. 1806</div>
                    <a href="" className="detail-btn">
                        DETAIL &nbsp;&nbsp; &nbsp;+
                    </a>
                </div>
            </div>
            <div className="store-wrap banner-cont">
                <img src={SideBannerStore} alt="클랜맥케이" />
                <div className="txt-wrap">
                    <h2 className="main-tit en">CLAN MACKAY</h2>
                    <div className="text">맥케이슨이 클랜 맥케이를 응원합니다</div>
                    <a href="" className="detail-btn">
                        DETAIL &nbsp;&nbsp; &nbsp;+
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBanner;
