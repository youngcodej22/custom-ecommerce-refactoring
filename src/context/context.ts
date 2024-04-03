import { createContext, useState } from 'react';

interface TabContextType {
    isTabTitleOn: number;
    isTabBoxOn: number;
    handleClick: (index: number) => void;
}

// export const TabsContext = createContext<User | undefined>(0);
// export const TabsContext = createContext(undefined);

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

// ------
interface PaginationContextType {
    currentPage: number;
    // setCurrentPage: (page: number) => void;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    // category: string;
}

export const PaginationContext = createContext<PaginationContextType>({
    currentPage: 1,
    setCurrentPage: () => {},
    // category: '',
});

export const usePagination = () => {
    // const context = useContext(PaginationContext);
    // if (context === undefined) {
    //     throw new Error(
    //         'usePagination must be used within a PaginationProvider',
    //     );
    // }
    // return { context };

    // const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    return { currentPage, setCurrentPage };
};

// type PaginationProviderProps = {
//     children: ReactNode;
// };

// export const PaginationProvider: React.FC<PaginationProviderProps> = ({
//     children,
// }) => {
//     const { category } = useParams<{ category: string }>();
//     const [currentPage, setCurrentPage] = useState(1);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Navigate when category or currentPage changes
//         navigate(`/productlist/${category}?page=${currentPage}`);
//     }, [category, currentPage, navigate]);

//     return (
//         <PaginationContext.Provider
//             value={{ currentPage, setCurrentPage, category }}
//         >
//             {children}
//         </PaginationContext.Provider>
//     );
// };
