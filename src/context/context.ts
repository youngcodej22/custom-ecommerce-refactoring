import { createContext, useState } from 'react';

interface TabContextType {
    isTabTitleOn: number,
    isTabBoxOn: number;
    handleClick: (index: number) => void;
}

// export const TabsContext = createContext<User | undefined>(0);
// export const TabsContext = createContext(undefined);

export const TabsContext = createContext<TabContextType>({
    isTabTitleOn: 0,
    isTabBoxOn: 0, // Initial state
    handleClick: () => {} // Default empty handler
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

    return { isTabTitleOn, isTabBoxOn, handleClick }
}