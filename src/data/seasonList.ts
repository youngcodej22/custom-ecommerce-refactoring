export interface SeasonListType {
    inputId: string;
    inputValue: string;
    inputDataText: string;
    labelHtmlFor: string;
    text: string;
}

export const seasonList: SeasonListType[] = [
    {
        inputId: "searchSeason1",
        inputValue: "봄",
        inputDataText: "봄",
        labelHtmlFor: "searchSeason1",
        text: "봄"
    },   
    {
        inputId: "searchSeason2",
        inputValue: "여름",
        inputDataText: "여름",
        labelHtmlFor: "searchSeason2",
        text: "여름"
    },   
    {
        inputId: "searchSeason3",
        inputValue: "가을",
        inputDataText: "가을",
        labelHtmlFor: "searchSeason3",
        text: "가을"
    },   
    {
        inputId: "searchSeason4",
        inputValue: "겨울",
        inputDataText: "겨울",
        labelHtmlFor: "searchSeason4",
        text: "겨울"
    },   
]