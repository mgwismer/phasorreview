import React, { useState, useCallback } from 'react';
import { ImpedanceTutPageOne } from './impedance-tutorial-page-one';
import { ImpedanceTutPageTwo } from './impedance-tutorial-page-two';
import { HomeBackForwardBtns } from '../Buttons/home-back-forward-btn';
import { ImpedanceTutPageFour } from './impedance-tutorial-page-four';
import { ImpedanceTutPageThree } from './impedance-tutorial-page-three';
import { ImpedanceTutPageFive } from './impedance-tutorial-page-five';
import { ImpedanceTutPageSix } from './impedance-tutorial-page-six';
import { ImpedanceTutPageTen } from './impedance-tutorial-page-ten';
import { ImpedanceTutPageNine } from './impedance-tutorial-page-nine';
import { ImpedanceTutPageSeven } from './impedance-tutorial-page-seven';
import { ImpedanceTutPageEight } from './impedance-tutorial-page-eight';
import './impedance-tutorial.scss';

const TutorialComponents = [
    <ImpedanceTutPageOne/>,
    <ImpedanceTutPageTwo/>,
    <ImpedanceTutPageThree/>,
    <ImpedanceTutPageFour/>,
    <ImpedanceTutPageFive/>,
    <ImpedanceTutPageSix/>,
    <ImpedanceTutPageSeven/>,
    <ImpedanceTutPageEight/>,
    <ImpedanceTutPageNine/>,
    <ImpedanceTutPageTen/>,
];

export const ImpedanceTutorialPage: React.FC = () => {
    const [pageIndex, setPageIndex] = useState(0);

    const handleNextPageClicked = useCallback(() => {
        if(pageIndex < TutorialComponents.length - 1) {
            setPageIndex(pageIndex+1)
        }
    }, [pageIndex]);

    const handlePreviousPageClicked = useCallback(() => {
        if(pageIndex > 0) {
            setPageIndex(pageIndex-1)
        }
    }, [pageIndex]);

    return (
        <div className='impedance-tutorial'>
            {TutorialComponents[pageIndex]}
            <HomeBackForwardBtns
                handlePreviousPageClicked={handlePreviousPageClicked}
                handleNextPageClicked={handleNextPageClicked}
            />       
        </div>
    )
}