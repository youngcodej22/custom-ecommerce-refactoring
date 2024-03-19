import React, { useState, useContext } from 'react';
// import ProductCard from '../ProductCard/ProductCard';

// context
import { TabsContext } from '../../context/context';

import './Tabs.scss';

// ALL, MEN, WOMEN, ACC 순서

function TabPane({ content, index }) {
    // const isTabTitleOn = useContext(TabsContext)
    // return <div className="tab-pane">{children}</div>;
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
    // const [isTabTitleOn, setIsTabTitleOn] = useState(0);
    // const [isTabBoxOn, setIsTabBoxOn] = useState(0);

    // const handleClick = (e, index) => {
    //     // setIsActiveTab(index);
    //     // a 태그에 #으로 페이지 첫화면 상단으로 가는 것을 막자
    //     e.preventDefault();
    //     setIsTabTitleOn(index);
    //     setIsTabBoxOn(index);
    // };
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

// const Tabs = ({ products, isTabBoxOn, isTabTitleOn, onTabClick }) => {
//     return (
//         <div className="goods-tab">
//             <div className="goods-tab-title">
//                 <ul>
//                     <li>
//                         <a
//                             href="#"
//                             className={1 === isTabTitleOn ? 'on' : ''}
//                             onClick={e => onTabClick(e, 1)}
//                         >
//                             <span>ALL</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className={2 === isTabTitleOn ? 'on' : ''}
//                             onClick={e => onTabClick(e, 2)}
//                         >
//                             <span>MEN</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className={3 === isTabTitleOn ? 'on' : ''}
//                             onClick={e => onTabClick(e, 3)}
//                         >
//                             <span>WOMEN</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className={4 === isTabTitleOn ? 'on' : ''}
//                             onClick={e => onTabClick(e, 4)}
//                         >
//                             <span>ACC</span>
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//             <div className="goods-tab-content">
//                 <div
//                     className={
//                         1 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
//                     }
//                     onClick={e => onTabClick(e, 1)}
//                 >
//                     <ul>
//                         {products.map((product, index) => (
//                             <ProductCard key={index} product={product} />
//                         ))}
//                     </ul>
//                 </div>
//                 <div
//                     className={
//                         2 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
//                     }
//                     onClick={e => onTabClick(e, 2)}
//                 >
//                     <ul>
//                         {products.map((product, index) => (
//                             <ProductCard key={index} product={product} />
//                         ))}
//                     </ul>
//                 </div>
//                 <div
//                     className={
//                         3 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
//                     }
//                     onClick={e => onTabClick(e, 3)}
//                 >
//                     <ul>
//                         {products.map((product, index) => (
//                             <ProductCard key={index} product={product} />
//                         ))}
//                     </ul>
//                 </div>
//                 <div
//                     className={
//                         4 === isTabBoxOn ? 'goods-tab-box on' : 'goods-tab-box'
//                     }
//                     onClick={e => onTabClick(e, 4)}
//                 >
//                     <ul>
//                         {products.map((product, index) => (
//                             <ProductCard key={index} product={product} />
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Tabs;
