import React, { useContext } from 'react';
import { GenderListType } from '../../data/genderList';
import { FilterContext } from '../../context/context';

interface FilterGenderProps {
    gender: GenderListType;
    onSelect: (gender: GenderListType) => void;
}

const FilterGender: React.FC<FilterGenderProps> = ({ gender, onSelect }) => {
    const { activeGenders, toggleGenderActive } = useContext(FilterContext);
    const isGenderActive = activeGenders[gender.inputId] || false;

    const toggleClass = (event: React.MouseEvent) => {
        event.stopPropagation();
        toggleGenderActive(gender.inputId, false);
        onSelect({
            label: gender.text,
            value: gender.inputValue,
            id: gender.inputId,
        });
    };

    return (
        <li className="gender-item">
            <input
                type="radio"
                id={gender.inputId}
                name="gender"
                value={gender.inputValue}
                data-text={gender.inputDataText}
            />
            <label
                htmlFor={gender.labelHtmlFor}
                // className={`${
                //     selectedFilters.some(f => f.value === 'm')
                //         ? 'check-s on'
                //         : 'check-s'
                // }`}
                className={`check-s ${isGenderActive ? 'on' : ''}`}
                onClick={toggleClass}
            >
                {gender.text}
            </label>
        </li>
    );
};

export default FilterGender;
