import React from 'react';

// styles
import './Benefit.scss';

const Benefit = ({ title, text, imageAlt, imageSrc }) => {
    return (
        // .benefit
        <div className="box">
            <a href="">
                <div className="icon">
                    <img src={imageSrc} alt={imageAlt} />
                </div>
                <div className="text-wrap">
                    <p className="title">{title}</p>
                    <p className="text">{text}</p>
                </div>
            </a>
        </div>
    );
};

export default Benefit;
