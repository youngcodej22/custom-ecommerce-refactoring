// data
import newProductData from '../data/json/products_new.json';
import womenProductData from '../data/json/products_women.json';
import menProductData from '../data/json/products_men.json';
import accProductData from '../data/json/products_acc.json';
import outletProductData from '../data/json/products_outlet.json';

export interface ProductType {
    category: string;
    name: string;
    price: string;
    image: string;
    labels: string[][];
    color: string;
    acc: boolean;
    subCategory?: string;
    thirdCategory?: string;
    date: string;
    like: number;
    sale: number;
    gender: string;
    size: string[];
    season: string[];
}

export interface FilterType {
    label: string;
    value: string;
    id?: string | undefined;
}

// combine datas
export const combinedProductsData: ProductType[] = [
    ...newProductData,
    ...womenProductData,
    ...menProductData,
    ...accProductData,
    ...outletProductData,
];