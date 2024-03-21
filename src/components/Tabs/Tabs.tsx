import React, { useState, useContext } from 'react';
// context
import { TabsContext } from '../../context/context';
import './Tabs.scss';

function TabPane({ content, index }) {
    const { isTabBoxOn, handleClick } = useContext(TabsContext);
    const indexNum = parseInt(index);

    return (
        <div
            className={
                indexNum === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
            }
            onClick={e => handleClick(e, indexNum)}
        >
            <ul>{content}</ul>
        </div>
    );
}

const Tabs = ({ children }) => {
    const { isTabTitleOn, handleClick } = useContext(TabsContext);

    return (
        // <TabsContext.Provider value={{ isTabBoxOn, handleClick }}>
        <div className="tab-container goods-tab">
            <div className="goods-tab-title">
                <ul className="tab-nav">
                    {children.map((tab, index) => (
                        <li key={index}>
                            {/* class : active로 고치기 */}
                            <a
                                key={index}
                                href="#"
                                className={`tab-item ${
                                    index === isTabTitleOn ? 'on' : ''
                                }`}
                                // className={1 === isTabTitleOn ? 'on' : ''}
                                // onClick={e => handleClick(e, 1)}
                                onClick={e => handleClick(e, index)}
                            >
                                <span>{tab.props.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tab-content-wrap goods-tab-content">
                {children[isTabTitleOn]}
                {/* {children.map((tab, index) => (
                <TabPane key={index} title={tab.props.title} index={index} content={tab.props.content} />
                ))} */}
            </div>
        </div>
        // </TabsContext.Provider>
    );
};

export default Tabs;
export { TabPane };
