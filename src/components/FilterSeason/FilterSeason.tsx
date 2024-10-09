import React, { useContext } from 'react';
import { SeasonListType } from '../../data/seasonList';
import { FilterContext } from '../../context/context';

interface FilterSeasonProps {
    season: SeasonListType;
    onSelect: (season: SeasonListType) => void;
}

const FilterSeason: React.FC<FilterSeasonProps> = ({ season, onSelect }) => {
    const { activeSeason, toggleSeasonActive } = useContext(FilterContext);
    const isSeasonActive = activeSeason[season.inputId] || false;

    const toggleClass = (event: React.MouseEvent) => {
        event.stopPropagation();
        toggleSeasonActive(season.inputId);
        onSelect({
            label: season.text,
            value: season.inputValue,
            id: season.inputId,
        });
    };

    return (
        <li className="season-item">
            <input
                type="checkbox"
                id={season.inputId}
                name="season"
                value={season.inputValue}
                data-text={season.inputDataText}
            />
            <label
                htmlFor={season.labelHtmlFor}
                className={`check-s ${isSeasonActive ? 'on' : ''}`}
                onClick={toggleClass}
            >
                {season.text}
            </label>
        </li>
    );
};

export default FilterSeason;
