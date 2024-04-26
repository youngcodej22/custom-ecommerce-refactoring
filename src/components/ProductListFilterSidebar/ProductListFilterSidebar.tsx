import React from 'react';
// component
import ProductListFilterCategoryBox from '../ProductListFilterCategoryBox/ProductListFilterCategoryBox';
import ProductListFilterDetail from '../ProductListFilterDetail/ProductListFilterDetail';

import './ProductListFilterSidebar.scss';

interface ProductListFilterType {
    isFilterVisible: boolean;
}

const cateBoxItems = [
    {
        title: 'NEW',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '24S/S 컬렉션',
                thirdCategory: [],
            },
        ],
    },
    {
        title: 'WOMEN',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '상의',
                thirdCategory: ['ALL', '티셔츠', '스웨터', '원피스'],
            },
            {
                subCategory: '하의',
                thirdCategory: ['ALL', '팬츠', '숏팬츠', '스커트'],
            },
            {
                subCategory: '아우터',
                thirdCategory: ['ALL', '점퍼', '베스트'],
            },
        ],
    },
    {
        title: 'MEN',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '상의',
                thirdCategory: ['ALL', '티셔츠', '스웨터'],
            },
            {
                subCategory: '하의',
                thirdCategory: ['ALL', '팬츠', '숏팬츠'],
            },
            {
                subCategory: '아우터',
                thirdCategory: ['ALL', '점퍼', '베스트'],
            },
        ],
    },
    {
        title: 'ACC',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '가방',
                thirdCategory: ['ALL', '캐디백', '보스턴백', '파우치'],
            },
            {
                subCategory: '용품',
                thirdCategory: ['ALL', '모자', '양말', '장갑', '기타'],
            },
        ],
    },
    {
        title: 'OUTLET',
        mainCategory: [
            {
                subCategory: 'ALL',
                thirdCategory: [],
            },
            {
                subCategory: '여성',
                thirdCategory: ['ALL', '상의', '하의', '아우터'],
            },
            {
                subCategory: '남성',
                thirdCategory: ['ALL', '상의', '하의', '아우터'],
            },
            {
                subCategory: '악세서리',
                thirdCategory: ['ALL', '남성', '여성'],
            },
        ],
    },
];

const ProductListFilterSidebar = ({
    isFilterVisible,
}: ProductListFilterType) => {
    return (
        <div className="productlist-filter-sidebar">
            <div className={`side_cont ${isFilterVisible ? 'hidden' : ''}`}>
                <div className="sub_search_box">
                    <form action="" id="frmSearch">
                        <input type="hidden" name="cateCd" />
                        <fieldset id="frmSearchDetail">
                            <div className="depth1_cate_box">
                                {cateBoxItems.map((categoryItem, index) => (
                                    <ProductListFilterCategoryBox
                                        id={index}
                                        categoryItem={categoryItem}
                                    />
                                ))}
                            </div>
                            <ProductListFilterDetail />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductListFilterSidebar;
