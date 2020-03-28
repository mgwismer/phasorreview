import React, { useState, useMemo, useCallback } from 'react';
import LogoImage from '../.././assets/images/ee_symbol1.gif';
import { ReplyButton } from '../Buttons/reply-button';
import { frontPageStyles } from './front-page-data';
import { frontPageTypes, frontPagePathTypes, pageLinkTypes } from './front-page-data-type';
import { useLocation } from 'react-router';

export const FrontPage: React.FC = () => {

    const { state } = useLocation();

    const startPath = !!state && typeof state === 'string' ? state : frontPageTypes.LEAD;

    const [currentPage, setCurrentPage] = useState<string>(startPath);

    console.log('subpath', typeof startPath, typeof state, typeof frontPageTypes.LEAD);
    
    const frontPageInformation = useMemo(() => {
        return frontPageStyles[currentPage];
    }, [currentPage])

    const yesButtonClicked = useCallback(() => {
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

    const { text, buttonText, buttonPaths } = frontPageInformation;
    const { yes: buttonYesText, no: buttonNoText } = buttonText;
    const { yes: buttonYesPath, no: buttonNoPath } = buttonPaths;
    return (
        <div className='front-page-ee-symbol'>
            {/* Front Page */}
            <img src={LogoImage} width="614" height="168" /> 
            <div>
                {text}
            </div>
            <ReplyButton buttonText={buttonYesText} nextPath={buttonYesPath.path} buttonType={buttonYesPath.type} buttonAction={yesButtonClicked}/>
            <ReplyButton buttonText={buttonNoText} nextPath={buttonNoPath.path} buttonType={buttonNoPath.type} buttonAction={noButtonClicked} />
        </div>
    )
}