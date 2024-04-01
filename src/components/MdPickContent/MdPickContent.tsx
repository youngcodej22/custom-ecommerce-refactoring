import React from 'react';

import ProductCard from '../ProductCard/ProductCard';

interface MdPickContentProps {
    data: CoordinationItem[];
}

// const MdPickContent: React.FC<MdPickContentProps> = ({ coordi }) => {
const MdPickContent: React.FC<MdPickContentProps> = ({ coordi, index }) => {
    // const product = coordinationData;

    // console.log('**cor', product);
    // return (
    //     <>
    //         {data.map((coordi, index) => (
    //             <li key={index} className="md-pick-content">
    //                 <div className="md-pick-thumb">
    //                     <img src={coordi.imageSrc} alt={coordi.imageAlt} />
    //                 </div>
    //                 <div className="md-pick-product">
    //                     <div className="goods-list main-wrap-21">
    //                         <div className="goods-list-tit">
    //                             <h3>{coordi.title}</h3>
    //                         </div>
    //                         <div className="goods-list-content goods-content-21">
    //                             <div className="item-gallery-type">
    //                                 <ul>
    //                                     {/* <ProductCard product={product} />
    //                                 <ProductCard product={product} />
    //                                 <ProductCard product={product} /> */}
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </li>
    //         ))}
    //     </>
    // );

    return (
        <>
            <li key={index} className="md-pick-content">
                <div className="md-pick-thumb">
                    <img src={coordi.imageSrc} alt={coordi.imageAlt} />
                </div>
                <div className="md-pick-product">
                    <div className="goods-list main-wrap-21">
                        <div className="goods-list-tit">
                            <h3>{coordi.title}</h3>
                        </div>
                        <div className="goods-list-content goods-content-21">
                            <div className="item-gallery-type">
                                <ul>
                                    {coordi.products.map((product, index) => (
                                        <ProductCard
                                            key={index}
                                            product={product}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MdPickContent;
