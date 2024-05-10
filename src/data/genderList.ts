export interface GenderListType {
    inputId: string;
    inputValue: string;
    inputDataText: string;
    labelHtmlFor: string;
    text: string;
}

export const genderList: GenderListType[] = [
    {
        inputId: "genderM",
        inputValue: "m",
        inputDataText: "남성",
        labelHtmlFor: "genderM",
        text: "남성"
    },   
    {
        inputId: "genderW",
        inputValue: "w",
        inputDataText: "여성",
        labelHtmlFor: "genderW",
        text: "여성"
    },   
    {
        inputId: "genderU",
        inputValue: "u",
        inputDataText: "공용",
        labelHtmlFor: "genderU",
        text: "공용"
    },   

]