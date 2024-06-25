import React, { useContext, useState, useRef, useEffect } from 'react';
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
import { FilterContext } from '../../context/context';
import { throttle, debounce } from 'lodash';

import { combinedProductsData, ProductType } from '../../data/products';

// interface Filter {
//     label: string;
//     value: string;
//     id?: string | undefined;
// }

const ProductListFilterDetail = () => {
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

    // ! context이동
    // const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
    // const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
    // const [priceRange, setPriceRange] = useState([0, 2000000]);

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

    const {
        toggleGenderActive,
        toggleColorActive,
        toggleSizeActive,
        toggleSeasonActive,
        resetColorActive,
        resetSizeActive,
        resetSeasonActive,
        // filteredProducts,
        setFilteredProducts,
        selectedFilters,
        setSelectedFilters,
        priceRange,
        setPriceRange,
    } = useContext(FilterContext);

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

    const handleSelectFilter = (filter: Filter) => {
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
        if (filterId?.includes('searchColor')) {
            toggleColorActive(filterId);
        }
        if (filterId?.includes('searchSize')) {
            toggleSizeActive(filterId);
        }
        if (filterId?.includes('searchSeason')) {
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

        // ! 여기세엇 왜 is not a function Error 발생? 이유 App.tsx에 정의 안해서;;
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

    const filterProducts = () => {
        let products = [...combinedProductsData];

        // selectedFilters.forEach(filter => {
        //     switch (filter.id) {
        //         case 'gender':
        //             products = products.filter(
        //                 product => product.gender === filter.value,
        //             );
        //             break;
        //         case 'color':
        //             products = products.filter(
        //                 product => product.color === filter.label,
        //             );
        //             break;
        //         case 'size':
        //             products = products.filter(product =>
        //                 product.size.includes(filter.value),
        //             );
        //             break;
        //         case 'season':
        //             products = products.filter(product =>
        //                 product.season.includes(filter.value),
        //             );
        //             break;
        //         // case 'price':
        //         //     products = products.filter(
        //         //         product =>
        //         //             Number(product.price) >= Number(priceRange[0]) &&
        //         //             Number(product.price) <= Number(priceRange[1]),
        //         //     );
        //         //     break;
        //         default:
        //             // return products;
        //             break;
        //     }
        // });

        selectedFilters.forEach(filter => {
            if (filter.id && filter.id.startsWith('gender')) {
                products = products.filter(
                    product => product.gender === filter.value,
                );
                console.log('Products after gender filter:', products);
            } else if (filter.id && filter.id.startsWith('color')) {
                products = products.filter(
                    product => product.color === filter.label,
                );
                console.log('Products after color filter:', products);
            } else if (filter.id && filter.id.startsWith('size')) {
                products = products.filter(product =>
                    product.size.includes(filter.value),
                );
                console.log('Products after size filter:', products);
            } else if (filter.id && filter.id.startsWith('season')) {
                products = products.filter(product =>
                    product.season.includes(filter.value),
                );
                console.log('Products after season filter:', products);
            }
        });

        // selectedFilters.forEach(filter => {
        //     console.log('*filter: ', filter);
        // });

        // Filter by price range
        // products = products.filter(
        //     product =>
        //         Number(product.price) >= Number(priceRange[0]) &&
        //         Number(product.price) <= Number(priceRange[1]),
        // );

        console.log('*selectedFilters: ', selectedFilters);

        // setSelectedFilters(products);
        setFilteredProducts(products);
    };

    const handleSearch = () => {
        filterProducts();
    };

    // useEffect(() => {
    // debounce(handleSliderUpdate, 500);
    // setTimeout(() => {
    //     handleSliderUpdate(priceRange);
    // }, 500);
    // }, [priceRange]);

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
                                onSelect={handleSelectFilter}
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
