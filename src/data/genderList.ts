export interface GenderListType {
    inputId: string;
    inputValue: string;
    inputDataText: string;
    labelHtmlFor: string;
    text: string;
}

export const genderList: GenderListType[] = [
    {
        inputId: "gender_M",
        inputValue: "남성",
        inputDataText: "남성",
        labelHtmlFor: "gender_M",
        text: "남성"
    },   
    {
        inputId: "gender_W",
        inputValue: "여성",
        inputDataText: "여성",
        labelHtmlFor: "gender_W",
        text: "여성"
    },   
    {
        inputId: "gender_U",
        inputValue: "공용",
        inputDataText: "공용",
        labelHtmlFor: "gender_U",
        text: "공용"
    },   

]