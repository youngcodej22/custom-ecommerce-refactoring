import { createContext, useState } from 'react';
// data
import { ProductType } from '../data/products'

/**
 * * Tabs.tsx - Tabs
 */
interface TabContextType {
    isTabTitleOn: number;
    isTabBoxOn: number;
    handleClick: (index: number) => void;
}

export const TabsContext = createContext<TabContextType>({
    isTabTitleOn: 0,
    isTabBoxOn: 0, // Initial state
    handleClick: () => {}, // Default empty handler
});

export const useTabState = () => {
    const [isTabTitleOn, setIsTabTitleOn] = useState(0);
    const [isTabBoxOn, setIsTabBoxOn] = useState(0);

    const handleClick = (e, index) => {
        // setIsActiveTab(index);
        // a 태그에 #으로 페이지 첫화면 상단으로 가는 것을 막자
        e.preventDefault();
        setIsTabTitleOn(index);
        setIsTabBoxOn(index);
    };

    return { isTabTitleOn, isTabBoxOn, handleClick };
};

/**
 * * ProductList.tsx - Pagination, Breadcrumb
 */
interface ProductListContextType {
    currentPage: number;
    // setCurrentPage: (page: number) => void;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    combinedProductsData: ProductType[];
}

export interface CategoryType {
    category?: string | undefined;
}

export const ProductListContext = createContext<ProductListContextType>({
    currentPage: 1,
    setCurrentPage: () => { },
    combinedProductsData: [] as ProductType[],
});

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    return { currentPage, setCurrentPage };
};

/**
 * * FilterColor.tsx - filtering of color
 */

// interface FilterColorContextType {
//     isColorActive: boolean;
//     setIsColorActive: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const FilterColorContext = createContext<FilterColorContextType>({
//     isColorActive: false,
//     setIsColorActive: () => { },
// });

// export const useFilterColor = () => {
//      const [isColorActive, setIsColorActive] = useState(false);

//     return { isColorActive, setIsColorActive };
// };

interface FilterContextType {
    activeColors: { [key: string]: boolean };
    toggleColorActive: (id: string) => void;
    activeSizes: { [key: string]: boolean };
    toggleSizeActive: (id: string) => void;
    activeSeason: { [key: string]: boolean };
    toggleSeasonActive: (id: string) => void;
    resetColorActive: () => void;
    resetSizeActive: () => void;
    resetSeasonActive: () => void;
}

// export const FilterColorContext = createContext<FilterContextType>({
export const FilterContext = createContext<FilterContextType>({
    activeColors: {},
    toggleColorActive: () => {},
    activeSizes: {},
    toggleSizeActive: () => {},
    activeSeason: {},
    toggleSeasonActive: () => {},
    resetColorActive: () => {},
    resetSizeActive: () => {},
    resetSeasonActive: () => {},
});

export const useFilter = () => {
    const [activeColors, setActiveColors] = useState<{ [key: string]: boolean }>({});
    const [activeSizes, setActiveSizes] = useState<{ [key: string]: boolean }>({});
    const [activeSeason, setActiveSeason] = useState<{ [key: string]: boolean }>({});

    const toggleColorActive = (id: string) => {
        setActiveColors(prev => ({
            ...prev, [id]: !prev[id]
        }));
    };

    const toggleSizeActive = (id: string) => {
        setActiveSizes(prev => ({
            ...prev, [id]: !prev[id]
        }));
    };

    const toggleSeasonActive = (id: string) => {
        setActiveSeason(prev => ({
            ...prev, [id]: !prev[id]
        }));
    };

    const resetColorActive = () => {
        setActiveColors({});
    };

    const resetSizeActive = () => {
        setActiveSizes({});
    };

    const resetSeasonActive = () => {
        setActiveSeason({});
    };

    return { activeColors, toggleColorActive, activeSizes, toggleSizeActive, activeSeason, toggleSeasonActive, resetColorActive, resetSizeActive, resetSeasonActive };
};


// ! 아래로 리팩토링
// const FilterContext = createContext<FilterContextType | null>(null);

// const FilterProvider: React.FC = ({ children }) => {
//     const [activeColors, setActiveColors] = useState<{ [key: string]: boolean }>({});

//     const resetColorActive = () => {
//         setActiveColors({});
//     };

//     return (
//         <FilterContext.Provider value={{ activeColors, resetColorActive }}>
//             {children}
//         </FilterContext.Provider>
//     );
// };