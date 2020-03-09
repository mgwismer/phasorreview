import React, { useState, useMemo } from 'react';
import { reviewData } from './review-data';

export const ReviewFrontPage: React.FC = () => {
    const [pageIndex, setPageIndex] = useState(0);

    const currentPage = useMemo(() => {
        return reviewData[pageIndex];
    },[pageIndex]);

    return (
        <div>
            <h2 className='review-page-title'>{currentPage.title}</h2>
            {currentPage.subTitle && 
                <h4> {currentPage.subTitle} </h4>
            }
        </div>
    )
}