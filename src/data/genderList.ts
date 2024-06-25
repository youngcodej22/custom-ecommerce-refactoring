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
        inputValue: "남성용",
        inputDataText: "남성용",
        labelHtmlFor: "gender_M",
        text: "남성"
    },   
    {
        inputId: "gender_W",
        inputValue: "여성용",
        inputDataText: "여성용",
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