import React from 'react';
import { CategoryType } from '../../context/context';

import './Breadcrumb.scss';

const Breadcrumb = ({ category }: CategoryType) => {
    return (
        <div className="breadcrumb">
            <div className="location_wrap">
                <div className="location_cont">
                    <em>
                        <a href="#" className="local_home">
                            HOME
                        </a>
                        &nbsp;
                    </em>
                    <span className="arr"></span>
                    <div className="location_select">
                        <div className="location_tit">
                            <a href="#">
                                <span>{category?.toUpperCase()}</span>
                            </a>
                        </div>
                        <ul style={{ display: 'none' }}>
                            <li>
                                <a href="?cateCd=001">
                                    <span>NEW</span>
                                </a>
                            </li>
                            <li>
                                <a href="?cateCd=004">
                                    <span>WOMEN</span>
                                </a>
                            </li>
                            <li>
                                <a href="?cateCd=003">
                                    <span>MEN</span>
                                </a>
                            </li>
                            <li>
                                <a href="?cateCd=008">
                                    <span>ACC</span>
                                </a>
                            </li>
                            <li>
                                <a href="?cateCd=005">
                                    <span>OUTLET</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
