import React, { useContext, useState, useRef, useEffect } from 'react';
// assets
import iconFilter from '/assets/icon/icon-filter.png';
import iconFilterDel from '/assets/icon/icon-filter-del.png';
// data
import { genderList, GenderListType } from '../../data/genderList';
import { ColorPaletteType, colorPalette } from '../../data/colorPalette';
import { SizeListType, sizeList } from '../../data/sizeList';
import { seasonList, SeasonListType } from '../../data/seasonList';
// component
import FilterGender from '../FilterGender/FilterGender';
import FilterColor from '../FilterColor/FilterColor';
import FilterSize from '../FilterSize/FilterSize';
import FilterSeason from '../FilterSeason/FilterSeason';
// style
import './ProductListFilterDetail.scss';
import { FilterContext } from '../../context/context';

interface Filter {
    label: string;
    value: string;
    id?: string | undefined;
}

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

    const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);

    const {
        toggleGenderActive,
        toggleColorActive,
        toggleSizeActive,
        toggleSeasonActive,
        resetColorActive,
        resetSizeActive,
        resetSeasonActive,
    } = useContext(FilterContext);

    const toggleActive = (section: keyof typeof activeSections) => {
        setActiveSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const handleGenderFilter = (filter: Filter) => {
        // if (!selectedFilters.some(f => f.value === filter.value)) {
        //     setSelectedFilters(prevFilters => [...prevFilters, filter]);
        // }

        // if (!selectedFilters.some(f => f.value === filter.value)) {
        //     setSelectedFilters(prevFilters =>
        //         prevFilters
        //             .filter(f => !['m', 'w', 'u'].includes(f.value))
        //             .concat(filter),
        //     );
        // } else {
        //     setSelectedFilters(prevFilters => [...prevFilters, filter]);
        // }

        // Remove any existing gender filter
        // const newFilters = selectedFilters.filter(
        //     f => !['m', 'w', 'u'].includes(f.value),
        // );

        // Check if the clicked filter is already active
        const isActive = selectedFilters.some(f => f.value === filter.value);

        // If it's not active, add the new filter
        if (!isActive) {
            // newFilters.push(filter);
            setSelectedFilters(prevFilters =>
                prevFilters
                    .filter(f => !['m', 'w', 'u'].includes(f.value))
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
                    <div id="rangeSlider">
                        <div className="noUi-base">
                            <div className="noUi-connects">
                                <div className="noUi-connect"></div>
                            </div>
                            <div className="noUi-origin">
                                <div
                                    className="noUi-handle noUi-handle-lower"
                                    data-handle="0"
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin="0.0"
                                    aria-valuemax="2000000.0"
                                    aria-valuenow="0.0"
                                    aria-valuetext="0.00"
                                >
                                    <div className="noUi-touch-area"></div>
                                </div>
                            </div>
                            <div
                                className="noUi-origin"
                                style={{
                                    transform: 'translate(0%, 0px)',
                                    zIndex: 4,
                                }}
                            >
                                <div
                                    className="noUi-handle noUi-handle-upper"
                                    data-handle="1"
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin="0.0"
                                    aria-valuemax="2000000.0"
                                    aria-valuenow="2000000.0"
                                    aria-valuetext="2000000.00"
                                >
                                    <div className="noUi-touch-area"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price_box">
                        <input type="text" defaultValue="0" />
                        <span>~</span>
                        <input type="text" defaultValue="20000" />
                    </div>
                </dd>
            </dl>
            <div className="quick_btn">
                <input type="button" value="상품 검색" />
            </div>
        </div>
    );
};

export default ProductListFilterDetail;
