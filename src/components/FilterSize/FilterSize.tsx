import React, { useContext } from 'react';
import { SizeListType } from '../../data/sizeList';
import { FilterContext } from '../../context/context';

interface FilterSizeProps {
    size: SizeListType;
    onSelect: (size: SizeListType) => void;
}

const FilterSize: React.FC<FilterSizeProps> = ({ size, onSelect }) => {
    // const [isSizeActive, setIsSizeActive] = useState(false);

    const { activeSizes, toggleSizeActive } = useContext(FilterContext);

    const isSizeActive = activeSizes[size.inputId] || false;

    const toggleClass = (event: React.MouseEvent) => {
        event.stopPropagation();
        // setIsSizeActive(!isSizeActive);
        toggleSizeActive(size.inputId);
        onSelect({
            label: size.text,
            value: size.inputValue,
            id: size.inputId,
        });
    };

    return (
        <li className="size-item">
            <input
                type="checkbox"
                id={size.inputId}
                name="goodsSize[]"
                value={size.inputValue}
                data-text={size.inputDataText}
            />
            <label
                htmlFor={size.labelHtmlFor}
                className={`check-s ${isSizeActive ? 'on' : ''}`}
                onClick={toggleClass}
            >
                {size.text}
            </label>
        </li>
    );
};

export default FilterSize;
