import React, { useState } from 'react';
//assets
import iconFilterSet from '/assets/icon/icon-filter-set.png';

import './ProductListFilter.scss';

interface ProductListFilterType {
    toggleFilterVisibility: () => void;
    isFilterVisible: boolean;
    countProducts: number;
    onSortChange: (option: string) => void;
}

const pickList = [
    {
        title: '신상품순',
        id: 'sort6',
        value: 'date',
    },
    {
        title: '낮은가격순',
        id: 'sort3',
        value: 'price_asc',
    },
    {
        title: '높은가격순',
        id: 'sort4',
        value: 'price_dsc',
    },
    {
        title: '판매순',
        id: 'sort2',
        value: 'sale',
    },
    {
        title: '선호도순',
        id: 'sort1',
        value: 'like',
    },
];

const ProductListFilter = ({
    toggleFilterVisibility,
    isFilterVisible,
    countProducts,
    onSortChange,
}: ProductListFilterType) => {
    // ? refresh후 re-render에서 다시 '선호도순'으로 되기 때문에 localstorage와 같은 것을 사용해보는 것을 고려
    const [sortOption, setSortOption] = useState('sort1');

    const handleSortOptionChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        onSortChange(event.target.value);
    };

    const handleSortOptionClick = (
        event: React.MouseEvent<HTMLLabelElement>,
    ) => {
        const htmlForValue = event.currentTarget.getAttribute('for');
        // nullish coalescing operator: 왼쪽이 null or undefined이면 오른쪽을 return
        setSortOption(htmlForValue ?? '');
    };

    return (
        <div className="productlist-filter">
            <div className="list_top_box">
                <div className="list_info_box">
                    <button
                        className="filter_open_btn"
                        onClick={toggleFilterVisibility}
                    >
                        <img src={iconFilterSet} alt="필터" />
                        <span>필터 {isFilterVisible ? 'ON' : 'OFF'}</span>
                    </button>
                    <span>
                        <strong>{countProducts}</strong>개의 상품
                    </span>
                </div>

                <div className="goods_pick_list">
                    <form name="frmList" action="">
                        <input type="hidden" name="cateCd" value="004" />
                        <div className="pick_list_box">
                            <ul className="pick_list">
                                {pickList.map(pick => (
                                    <li key={pick.id}>
                                        <input
                                            type="radio"
                                            id={pick.id}
                                            className="radio"
                                            name="sort"
                                            value={pick.value}
                                            onChange={handleSortOptionChange}
                                        />
                                        <label
                                            htmlFor={pick.id}
                                            className={
                                                pick.id === sortOption
                                                    ? 'on'
                                                    : ''
                                            }
                                            onClick={handleSortOptionClick}
                                        >
                                            {pick.title}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductListFilter;
