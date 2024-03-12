import React from 'react';
import { LoremPicsum } from 'react-lorem-picsum';

import './Insta.scss';

const Insta = () => {
    return (
        <div className="insta-cont">
            <h2 className="en">
                INSTAGRAM
                <p>
                    <a href="#" target="_blank">
                        @mckayson_official
                    </a>
                </p>
            </h2>
            <div className="insta-box">
                <LoremPicsum width={1080} height={1080} random />
                <LoremPicsum width={1080} height={1080} random />
                <LoremPicsum width={1080} height={1080} random />
                <LoremPicsum width={1080} height={1080} random />
                <LoremPicsum width={1080} height={1080} random />
                <LoremPicsum width={1080} height={1080} random />
            </div>
        </div>
    );
};

export default Insta;
