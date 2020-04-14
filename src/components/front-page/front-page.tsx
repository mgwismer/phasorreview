import React, { useState, useMemo, useCallback , useEffect} from 'react';
import { store } from '../../App';
import LogoImage from '../.././assets/images/ee_symbol1.gif';
import { useLocation } from 'react-router';
import { frontPageStyles } from './front-page-data';
import { frontPageTypes } from './front-page-data-type';
import { resetQuestionIndex, setAnswerSubmitted, setQuizStart } from '../../redux/actions';
import { YesNoButtons } from '../Buttons/yes-no-buttons';

export const FrontPage: React.FC = () => {

    const { state } = useLocation();

    const startPath = !!state && typeof state === 'string' ? state : frontPageTypes.LEAD;

    const [currentPage, setCurrentPage] = useState<string>(startPath);
    
    const frontPageInformation = useMemo(() => {
        return frontPageStyles[currentPage];
    }, [currentPage])

    const yesButtonClicked = useCallback(() => {
        store.dispatch(setQuizStart(false));
        store.dispatch(setAnswerSubmitted(false));
        store.dispatch(resetQuestionIndex());
        if (currentPage === frontPageTypes.LEAD) {
            setCurrentPage(frontPageTypes.QUIZ_START);
        }
    }, [currentPage])

    const noButtonClicked = useCallback(() => {
        if(currentPage === frontPageTypes.LEAD) {
            setCurrentPage(frontPageTypes.TUTORIAL_START)
        } else if(currentPage === frontPageTypes.QUIZ_START || currentPage === frontPageTypes.TUTORIAL_START) {
            setCurrentPage(frontPageTypes.REVIEW_START)
        }
    }, [currentPage])

    const { text, subText, buttonText, buttonPaths } = frontPageInformation;
    const { yes: buttonYesText, no: buttonNoText } = buttonText;
    const { yes: buttonYesPath, no: buttonNoPath } = buttonPaths;
    const yesButtonProps = {
        mainText: 'YES!',
        subText: buttonYesText,
        type: buttonYesPath.type,
        nextPath: buttonYesPath.path,
        buttonAction: yesButtonClicked
    }

    const noButtonProps = {
        mainText: 'NO',
        subText: buttonNoText,
        type: buttonNoPath.type,
        nextPath: buttonNoPath.path,
        buttonAction: noButtonClicked
    }

    return (
        <div className='front-page-ee-symbol'>
            {/* Front Page */}
            <img src={LogoImage} width="614" height="168" alt='logo image'/> 
            <h3>
                {text}
            </h3>
            <h5>
                {subText}
            </h5>
            <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps} />
        </div>
    )
}
