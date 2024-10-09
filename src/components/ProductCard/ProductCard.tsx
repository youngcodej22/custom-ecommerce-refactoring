import defaultImage from '/assets/product/default_image.png';
import label2024 from '/assets/label/label-2024.png';
import labelNew from '/assets/label/label-new.png';
import labelMen from '/assets/label/label-men.png';
import labelWomen from '/assets/label/label-women.png';
import labelSale from '/assets/label/label-sale.png';
import label40DC from '/assets/label/label-40dc.png';
import labelUnisex from '/assets/label/label-unisex.png';
// import labelHot from '/assets/label/label-hot.png';
// import labelRecommend from '/assets/label/label-recommend.gif';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
    const onErrorImg = e => {
        e.target.src = defaultImage;
    };

    const onErrorLabel = e => {
        // 다른 라벨로 else if로 추가 하자
        if (e.target.alt === '2024SS') {
            e.target.src = label2024;
        } else if (e.target.alt === '신상품') {
            e.target.src = labelNew;
        } else if (e.target.alt === '남성') {
            e.target.src = labelMen;
        } else if (e.target.alt === '여성') {
            e.target.src = labelWomen;
        } else if (e.target.alt === '세일') {
            e.target.src = labelSale;
        } else if (e.target.alt === '40%DC') {
            e.target.src = label40DC;
        } else if (e.target.alt === '공용') {
            e.target.src = labelUnisex;
        }
    };

    return (
        <li className="product-card">
            <div className="item-cont">
                <div className="item-photo-box">
                    <a href="">
                        <img
                            src={product.image ? product.image : defaultImage}
                            alt={product.name}
                            onError={onErrorImg}
                        />
                    </a>
                    {/* cart/좋아요 버튼인데 일단 나중에 */}
                    {/* <div className="item-link">
                                                    <button></button>
                                                    <button></button>
                                                </div> */}
                </div>
                <div className="item-info-cont">
                    <div className="item-tit-box">
                        <input type="hidden" />
                        <p className="cate-name">
                            <a href="">{product.category}</a>
                        </p>
                        <a href="">
                            <strong className="item-name">
                                {product.name}
                            </strong>
                        </a>
                    </div>
                    <div className="item-money-box">
                        <div className="flex-box">
                            <strong className="item-price">
                                {product.price}
                            </strong>
                        </div>
                    </div>
                    <div className="item-icon-box">
                        {product.labels.map((label, index) => (
                            <img
                                key={index}
                                src={label[0]}
                                alt={label[1]}
                                onError={onErrorLabel}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
