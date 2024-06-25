export interface SeasonListType {
    inputId: string;
    inputValue: string;
    inputDataText: string;
    labelHtmlFor: string;
    text: string;
}

export const seasonList: SeasonListType[] = [
    {
        inputId: "season_1",
        inputValue: "봄",
        inputDataText: "봄",
        labelHtmlFor: "season_1",
        text: "봄"
    },   
    {
        inputId: "season_2",
        inputValue: "여름",
        inputDataText: "여름",
        labelHtmlFor: "season_2",
        text: "여름"
    },   
    {
        inputId: "season_3",
        inputValue: "가을",
        inputDataText: "가을",
        labelHtmlFor: "season_3",
        text: "가을"
    },   
    {
        inputId: "season_4",
        inputValue: "겨울",
        inputDataText: "겨울",
        labelHtmlFor: "season_4",
        text: "겨울"
    },
    {
        inputId: "season_5",
        inputValue: "ALW",
        inputDataText: "ALW",
        labelHtmlFor: "season_5",
        text: "ALW"
    },
]