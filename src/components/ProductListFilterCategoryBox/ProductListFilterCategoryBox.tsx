import React from 'react';
import { Link } from 'react-router-dom';

import './ProductListFilterCategoryBox.scss';

interface MainCategory {
    title: string;
    subCategory?: string[];
}

interface ProductListFilterCategoryBoxProps {
    categoryItem: {
        title: string;
        mainCategory: MainCategory[];
    };
}

const ProductListFilterCategoryBox: React.FC<
    ProductListFilterCategoryBoxProps
> = ({ categoryItem }) => {
    return (
        <dl className="cate_box">
            <dt>{categoryItem.title}</dt>
            <dd>
                <div className="cate_list">
                    <ul>
                        {categoryItem.mainCategory.map((mainCat, mainIndex) => (
                            <li key={mainIndex}>
                                {mainCat.subCategory?.length === 0 ? (
                                    <Link to="">{mainCat.title}</Link>
                                ) : (
                                    <span>{mainCat.title}</span>
                                )}
                                {mainCat.subCategory &&
                                    mainCat.subCategory.length > 0 && (
                                        <ul>
                                            {mainCat.subCategory.map(
                                                (subCat, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to="">
                                                            {subCat}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            </dd>
        </dl>
    );
};

export default ProductListFilterCategoryBox;
