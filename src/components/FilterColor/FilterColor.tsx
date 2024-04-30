import React, { useState } from 'react';
// type
import { ColorPaletteType } from '../../data/colorPalette';
// style
import './FilterColor.scss';

interface FilterColorProps {
    color: ColorPaletteType;
    onSelect: (color: ColorPaletteType) => void;
    isColorActive: boolean;
    setIsColorActive: (isActive: boolean) => void;
}

const FilterColor: React.FC<FilterColorProps> = ({ color, onSelect }) => {
    const [isColorActive, setIsColorActive] = useState(false);
    // const toggleClass = () => {
    //     setIsActive(!isActive);
    // };

    // ! bug: 이벤트 bubbling으로 onClick 이벤트가 두번 trigger 되서 아래 방법해결
    const toggleClass = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsColorActive(!isColorActive);
        onSelect({ label: color.title, value: color.inputValue });
    };

    return (
        // ! 이벤트 트리거가 bubbling으로 인해 두번 된다.
        // <li className="color-item" onClick={toggleClass}>
        <li className="color-item">
            <input
                type="checkbox"
                id={color.inputId}
                value={color.inputValue}
                data-text={color.inputDataText}
            />
            <label
                htmlFor={color.labelHtmlFor}
                className={`check-s ${isColorActive ? 'on' : ''}`}
                title={color.labelTitle}
                onClick={toggleClass}
            >
                <div className="bg">
                    <span
                        style={{ backgroundColor: `#${color.inputValue}` }}
                    ></span>
                </div>
                <p>{color.title}</p>
            </label>
        </li>
    );
};

export default FilterColor;
