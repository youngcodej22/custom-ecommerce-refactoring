import React, { useContext, useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// library
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
// assets
import iconFilter from '/assets/icon/icon-filter.png';
import iconFilterDel from '/assets/icon/icon-filter-del.png';
// data
import { genderList, GenderListType } from '../../data/genderList';
import { colorPalette, ColorPaletteType } from '../../data/colorPalette';
import { sizeList, SizeListType } from '../../data/sizeList';
import { seasonList, SeasonListType } from '../../data/seasonList';
// component
import FilterGender from '../FilterGender/FilterGender';
import FilterColor from '../FilterColor/FilterColor';
import FilterSize from '../FilterSize/FilterSize';
import FilterSeason from '../FilterSeason/FilterSeason';
// style
import './ProductListFilterDetail.scss';
import { FilterContext, ProductListContext } from '../../context/context';
import { throttle, debounce } from 'lodash';

import { combinedProductsData, ProductType } from '../../data/products';

// interface Filter {
//     label: string;
//     value: string;
//     id?: string | undefined;
// }

const ProductListFilterDetail = () => {
    const {
        toggleGenderActive,
        toggleColorActive,
        toggleSizeActive,
        toggleSeasonActive,
        resetGenderActive,
        resetColorActive,
        resetSizeActive,
        resetSeasonActive,
        setFilteredProducts,
        selectedFilters,
        setSelectedFilters,
        priceRange,
        setPriceRange,
    } = useContext(FilterContext);
    const { setCurrentPage } = useContext(ProductListContext);

    // const [isActive, setIsActive] = useState(false);
    const [activeSections, setActiveSections] = useState({
        gender: false,
        color: false,
        size: false,
        season: false,
        price: false,
    });
    const sectionRefs = useRef({
        gender: null,
        color: null,
        size: null,
        season: null,
        price: null,
    });

    const { category, subcategory, thirdcategory } = useParams();

    // ! context이동
    // const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
    // const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
    // const [priceRange, setPriceRange] = useState([0, 2000000]);

    const toggleActive = (section: keyof typeof activeSections) => {
        setActiveSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const handleGenderFilter = (filter: Filter) => {
        // Check if the clicked filter is already active
        const isActive = selectedFilters.some(f => f.value === filter.value);

        // If it's not active, add the new filter
        if (!isActive) {
            // newFilters.push(filter);
            setSelectedFilters(prevFilters =>
                prevFilters
                    .filter(
                        f => !['여성용', '남성용', '공용'].includes(f.value),
                    )
                    .concat(filter),
            );
        }
    };

    const handleSizeFilter = (filter: Filter) => {
        const index = selectedFilters.findIndex(f => f.value === filter.value);
        if (index > -1) {
            // Filter is already selected, remove it
            setSelectedFilters(prevFilters =>
                prevFilters.filter((_, i) => i !== index),
            );
        } else {
            setSelectedFilters(prevFilters => [...prevFilters, filter]);
        }
    };

    const handleSeasonFilter = (filter: Filter) => {
        const index = selectedFilters.findIndex(f => f.value === filter.value);
        if (index > -1) {
            // Filter is already selected, remove it
            setSelectedFilters(prevFilters =>
                prevFilters.filter((_, i) => i !== index),
            );
        } else {
            setSelectedFilters(prevFilters => [...prevFilters, filter]);
        }
    };

    const handleColorFilter = (filter: Filter) => {
        const index = selectedFilters.findIndex(f => f.value === filter.value);
        if (index > -1) {
            // Filter is already selected, remove it
            setSelectedFilters(prevFilters =>
                prevFilters.filter((_, i) => i !== index),
            );
        } else {
            setSelectedFilters(prevFilters => [...prevFilters, filter]);
        }
    };

    const handleRemoveFilter = (index: number) => {
        const filter = selectedFilters[index];
        const filterId = filter.id;

        if (filterId?.includes('gender')) {
            toggleGenderActive(filterId, true);
        }
        if (filterId?.includes('color')) {
            toggleColorActive(filterId);
        }
        if (filterId?.includes('size')) {
            toggleSizeActive(filterId);
        }
        if (filterId?.includes('season')) {
            toggleSeasonActive(filterId);
        }

        setSelectedFilters(prevFilters =>
            prevFilters.filter((_, i) => i !== index),
        );
    };

    const handleResetFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        // ! button 기본 submit으로 인해 refresh가 되니 preventDefault 해주자
        event.preventDefault(); // Prevent the default form submission behavior
        setSelectedFilters([]);

        setActiveSections({
            gender: false,
            color: false,
            size: false,
            season: false,
            price: false,
        });

        resetGenderActive();
        resetColorActive();
        resetSizeActive();
        resetSeasonActive();
    };

    // const onUpdate = (values, handle, unencoded, tap, positions) => {
    //     setPriceRange(values.map(value => Math.round(value)));
    // };

    // ! throttle 고민
    // const handleSliderUpdate = throttle((values, handle) => {
    //     const newValues = values.map(value => Math.trunc(value));
    //     setPriceRange(newValues);
    // }

    // const handleSliderUpdate = (values, handle = 0) => {
    const handleSliderUpdate = (values: number[]) => {
        const newValues = values.map(value => Math.trunc(value));

        setPriceRange(newValues);
    };

    const handlePriceChange = (value: number, type: 'min' | 'max') => {
        // if (isNaN(value) || value < 0 || value > 2000000) {
        //     return;
        // } else if (type === 'min') {
        //     setPriceRange(prev => [value, prev[1]]);
        // } else if (type === 'max') {
        //     setPriceRange(prev => [prev[0], value]);
        // }
        if (isNaN(value) || value < 0 || value > 2000000) {
            return;
        } else {
            setPriceRange(prev => {
                const newRange =
                    type === 'min' ? [value, prev[1]] : [prev[0], value];
                // Optionally, you can call handleSliderUpdate here if it does more complex operations
                // handleSliderUpdate(newRange);
                return newRange;
            });
            // handleSliderUpdate(priceRange);
        }
    };

    // ! 이전 코드: 상세필터 두 가지 이상 옵션 선택에 따른 상품 보기가 안됨
    // const filterProducts = () => {
    //     let products = [...combinedProductsData];

    //     selectedFilters.forEach(filter => {
    //         if (filter.id && filter.id.startsWith('gender')) {
    //             products = products.filter(
    //                 product => product.gender === filter.value,
    //             );
    //         } else if (filter.id && filter.id.startsWith('color')) {
    //             console.log('filter: ', filter);
    //             products = products.filter(
    //                 product => product.color === filter.label,
    //             );
    //         } else if (filter.id && filter.id.startsWith('size')) {
    //             products = products.filter(product =>
    //                 product.size.includes(filter.value),
    //             );
    //         } else if (filter.id && filter.id.startsWith('season')) {
    //             products = products.filter(product =>
    //                 product.season.includes(filter.value),
    //             );
    //         }
    //     });

    //     // products = products.filter(
    //     //     product =>
    //     //         Number(product.price) >= Number(priceRange[0]) &&
    //     //         Number(product.price) <= Number(priceRange[1]),
    //     // );

    //     setFilteredProducts(products);
    // };

    // ! 수정 완료
    const filterProducts = () => {
        let products = [...combinedProductsData];

        const genderFilters = selectedFilters
            .filter(filter => filter.id?.startsWith('gender'))
            .map(filter => filter.value);
        const colorFilters = selectedFilters
            .filter(filter => filter.id?.startsWith('color'))
            .map(filter => filter.label);
        const sizeFilters = selectedFilters
            .filter(filter => filter.id?.startsWith('size'))
            .map(filter => filter.value);
        const seasonFilters = selectedFilters
            .filter(filter => filter.id?.startsWith('season'))
            .map(filter => filter.value);

        if (genderFilters.length > 0) {
            products = products.filter(product =>
                genderFilters.includes(product.gender),
            );
        }

        if (colorFilters.length > 0) {
            products = products.filter(product =>
                colorFilters.includes(product.color),
            );
        }

        if (sizeFilters.length > 0) {
            products = products.filter(product =>
                sizeFilters.some(size => product.size.includes(size)),
            );
        }

        if (seasonFilters.length > 0) {
            products = products.filter(product =>
                seasonFilters.some(season => product.season.includes(season)),
            );
        }

        if (Array.isArray(priceRange) && priceRange.length === 2) {
            const [minPrice, maxPrice] = priceRange;

            // ! json에서 price에 문자 포함. 제거해야한다
            // products = products.filter(
            //     product =>
            //         Number(product.price) >= Number(minPrice) &&
            //         Number(product.price) <= Number(maxPrice),
            // );
            products = products.filter(product => {
                const productPrice = Number(product.price.replace(/,/g, ''));
                return productPrice >= minPrice && productPrice <= maxPrice;
            });
        } else {
            console.error('Invalid priceRange:', priceRange);
        }

        setFilteredProducts(products);
    };

    // useEffect(() => {
    // debounce(handleSliderUpdate, 500);
    // setTimeout(() => {
    //     handleSliderUpdate(priceRange);
    // }, 500);
    // }, [priceRange]);

    useEffect(() => {
        const adjustHeight = sectionKey => {
            const section = sectionRefs.current[sectionKey];
            if (section) {
                section.style.height = activeSections[sectionKey]
                    ? `${section.scrollHeight}px`
                    : '0px';
            }
        };

        // Adjust height for all sections
        Object.keys(activeSections).forEach(adjustHeight);
    }, [activeSections]); // Depend on activeSections to re-run when it changes

    // Reset selectedFilters when category, subcategory, or thirdcategory changes
    useEffect(() => {
        // ! 이 이벤트 함수를 실행시 지속 적인 에러 발생, 그래서 선택된 필터링만 제거하도록한다
        // handleResetFilter();
        setActiveSections({
            gender: false,
            color: false,
            size: false,
            season: false,
            price: false,
        });

        resetGenderActive();
        resetColorActive();
        resetSizeActive();
        resetSeasonActive();

        // ! ProductListFilterCategoryBox에서 `setSelectedFilters([]);` 초기화를 직접했더니 해결되긴했지만, dependency가 왜 두번째에 적용되는가?
        // setSelectedFilters([]);
        filterProducts();
    }, [category, subcategory, thirdcategory]);

    const handleSearch = () => {
        setCurrentPage(1);
        filterProducts();
    };

    console.log('selectedFilters: ', selectedFilters);

    return (
        <div className="productlist-filter-detail">
            <dl className="filter_tit">
                <dt>
                    필터
                    <button
                        className="filter-reset"
                        onClick={handleResetFilter}
                    >
                        <img src={iconFilter} alt="필터" />
                    </button>
                </dt>
                <dd className="select_filter_wrap">
                    {selectedFilters.map((filter, index) => (
                        <div
                            key={index}
                            className="select_filter"
                            data-value={filter.value}
                        >
                            {filter.label}
                            <span
                                className="filter_del"
                                onClick={() => handleRemoveFilter(index)}
                            >
                                <img src={iconFilterDel} alt="Remove" />
                            </span>
                        </div>
                    ))}
                </dd>
            </dl>
            <dl className="button_list_wrap gender">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.gender ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('gender')}
                >
                    성별
                </dt>
                <dd ref={el => (sectionRefs.current.gender = el)}>
                    <ul className="button_list">
                        {genderList.map((gender: GenderListType) => (
                            <FilterGender
                                key={gender.inputId}
                                gender={gender}
                                onSelect={handleGenderFilter}
                            />
                        ))}
                    </ul>
                </dd>
            </dl>
            <dl className="color">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.color ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('color')}
                >
                    컬러
                </dt>
                <dd ref={el => (sectionRefs.current.color = el)}>
                    <ul className="color_box">
                        {colorPalette.map((color: ColorPaletteType) => (
                            <FilterColor
                                key={color.inputId}
                                color={color}
                                onSelect={handleColorFilter}
                            />
                        ))}
                    </ul>
                </dd>
            </dl>
            <dl className="button_list_wrap size">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.size ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('size')}
                >
                    사이즈
                </dt>
                <dd ref={el => (sectionRefs.current.size = el)}>
                    <ul className="button_list">
                        {sizeList.map((size: SizeListType) => (
                            <FilterSize
                                key={size.inputId}
                                size={size}
                                onSelect={handleSizeFilter}
                            />
                        ))}
                    </ul>
                </dd>
            </dl>
            <dl className="button_list_wrap season">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.season ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('season')}
                >
                    계절
                </dt>
                <dd ref={el => (sectionRefs.current.season = el)}>
                    <ul className="button_list">
                        {seasonList.map((season: SeasonListType) => (
                            <FilterSeason
                                key={season.inputId}
                                season={season}
                                onSelect={handleSeasonFilter}
                            />
                        ))}
                    </ul>
                </dd>
            </dl>
            <dl className="price_range_wrap">
                <dt
                    className={`option_toggle_btn ${
                        activeSections.price ? 'on' : ''
                    }`}
                    onClick={() => toggleActive('price')}
                >
                    가격
                </dt>
                <dd ref={el => (sectionRefs.current.price = el)}>
                    <Nouislider
                        range={{ min: 0, max: 2000000 }}
                        // start={[priceRange.min, priceRange.max]}
                        // ! 아래 state를 직접 넣으면 엄청 버벅거린다! 이거 오류 중요, 그래서 직접 숫자 기입, 대신 아래 input에서 숫자 기입하면 slider 실시간 변경 x
                        // start={priceRange}
                        // start={[priceRange[0], priceRange[1]]}
                        start={[0, 2000000]}
                        connect={true}
                        // step={1}
                        onUpdate={handleSliderUpdate}
                    />
                    <div className="price_box">
                        <input
                            type="text"
                            value={priceRange[0]}
                            // defaultValue={priceRange[0]}
                            min="0"
                            max="2000000"
                            onChange={e =>
                                handlePriceChange(Number(e.target.value), 'min')
                            }
                            aria-label="Minimum price"
                        />
                        <span>~</span>
                        <input
                            type="text"
                            value={priceRange[1]}
                            // defaultValue={priceRange[1]}
                            min="0"
                            max="2000000"
                            onChange={e =>
                                handlePriceChange(Number(e.target.value), 'max')
                            }
                            aria-label="Maximum price"
                        />
                    </div>
                </dd>
            </dl>
            <div className="quick_btn">
                <input type="button" value="상품 검색" onClick={handleSearch} />
            </div>
        </div>
    );
};

export default ProductListFilterDetail;
