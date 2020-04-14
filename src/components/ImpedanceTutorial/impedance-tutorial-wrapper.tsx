import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { ImpedanceTutPageOne } from './impedance-tutorial-page-one';
import { ImpedanceTutPageTwo } from './impedance-tutorial-page-two';
import { HomeBackForwardBtns } from '../Buttons/home-back-forward-btn';
import { ImpedanceTutPageFour } from './impedance-tutorial-page-four';
import { ImpedanceTutPageThree } from './impedance-tutorial-page-three';
import { ImpedanceTutPageFive } from './impedance-tutorial-page-five';
import { ImpedanceTutPageSix } from './impedance-tutorial-page-six';
import { ImpedanceTutPageTen } from './impedance-tutorial-page-ten';
import { frontPagePathTypes, pageLinkTypes } from '../front-page/front-page-data-type';
import { ImpedanceTutPageNine } from './impedance-tutorial-page-nine';
import { ImpedanceTutPageSeven } from './impedance-tutorial-page-seven';
import { ImpedanceTutPageEight } from './impedance-tutorial-page-eight';
import { YesNoButtons } from '../Buttons/yes-no-buttons';
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

type OwnProps = {
    startIndex?: number;
}
export const ImpedanceTutorialPage: React.FC<OwnProps> = ({ startIndex = 0}) => {
    const [pageIndex, setPageIndex] = useState(startIndex);

    const finalIndex = TutorialComponents.length - 1;

    const history = useHistory();
    
    const handleNextPageClicked = useCallback(() => {
        if(pageIndex < finalIndex) {
            setPageIndex(pageIndex+1)
        }
    }, [pageIndex, finalIndex]);

    const handlePreviousPageClicked = useCallback(() => {
        // This startIndex indicates got here from review page
        // and therefore should go back there.
        if (startIndex === 7) 
            history.goBack();

        if(pageIndex > 0) {
            setPageIndex(pageIndex-1)
        } else
            history.goBack();
    }, [pageIndex, history, startIndex]);

    const yesButtonProps = {
        mainText: 'YES!',
        subText: "I'm good",
        type: frontPagePathTypes.LINKPAGE,
        nextPath: pageLinkTypes.REVIEW
    }

    const noButtonProps = {
        mainText: 'NO',
        subText: 'Need to review',
        type: frontPagePathTypes.NEWPAGE,
        buttonAction: () => setPageIndex(0)
    }
    
    return (
        <div className='impedance-tutorial'>
            {TutorialComponents[pageIndex]}
            {pageIndex < finalIndex && 
                <HomeBackForwardBtns
                    handlePreviousPageClicked={handlePreviousPageClicked}
                    handleNextPageClicked={handleNextPageClicked}
                /> 
            } 
            {pageIndex === finalIndex &&
                <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps} />
            }    
        </div>
    )
}