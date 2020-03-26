import React, { useState, useMemo, useCallback } from 'react';
import { ResistorReviewPage } from './resistor-review-page';
import { CapacitorReviewPage } from './capacitor-review-page';
import { InductorReviewPage } from './inductor-review-page';
import { HomeBackForwardBtns } from '../../Buttons/home-back-forward-btn';
import ReviewChart from '../../../assets/images/review5-1.gif';

export const ReviewPageTypes = {
    REVIEW: 'REVIEW',
    RESISTOR: 'RESISTORREVIEW',
    CAPACITOR: 'CAPACITORREVIEW',
    INDUCTOR: 'INDUCTORREVIEW',
}

export const ElementReview: React.FC = () => {
    const [reviewPageType, setReviewPageType] = useState(ReviewPageTypes.REVIEW);

    const handlePreviousPageClicked = useCallback(() => {
        console.log('wait');
    }, []);

    const handleNextPageClicked = useCallback(() => {
        if (reviewPageType === ReviewPageTypes.REVIEW) {
            setReviewPageType(ReviewPageTypes.RESISTOR);
        } else if(reviewPageType === ReviewPageTypes.RESISTOR) {
            setReviewPageType(ReviewPageTypes.CAPACITOR); 
        } else if(reviewPageType === ReviewPageTypes.CAPACITOR) {
            setReviewPageType(ReviewPageTypes.INDUCTOR);
        } else {
            setReviewPageType(ReviewPageTypes.REVIEW);
        }
    }, [reviewPageType]);

    const currentContent = useMemo(() => {
        if (reviewPageType === ReviewPageTypes.REVIEW) {
            return (
                <React.Fragment>
                    <div>
                        <img src={ReviewChart} alt='review chart' />
                        <div onClick={() => setReviewPageType(ReviewPageTypes.RESISTOR)}> Phasor review for resistors </div>
                    </div>
                </React.Fragment>
            )
        } else if (reviewPageType === ReviewPageTypes.RESISTOR) 
            return <ResistorReviewPage />
        else if (reviewPageType === ReviewPageTypes.CAPACITOR) 
            return <CapacitorReviewPage />
        else if (reviewPageType === ReviewPageTypes.INDUCTOR) 
            return <InductorReviewPage />
        }, [reviewPageType])

    return (
        <div>
            {currentContent}
            <HomeBackForwardBtns
                handlePreviousPageClicked={handlePreviousPageClicked}
                handleNextPageClicked={handleNextPageClicked}
            /> 
        </div>
    )
}