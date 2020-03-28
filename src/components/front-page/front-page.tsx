import React, { useState, useMemo, useCallback } from 'react';
import LogoImage from '../.././assets/images/ee_symbol1.gif';
import { ReplyButton } from '../Buttons/reply-button';
import { frontPageStyles } from './front-page-data';
import { frontPageTypes, frontPagePathTypes, pageLinkTypes } from './front-page-data-type';
import { useParams } from 'react-router';

export const FrontPage: React.FC = () => {

    let { subpath } = useParams();
    console.log('subpath', useParams)

    const startPath = useMemo(() => {
        console.log('memo subpath', subpath);
        return !subpath ? frontPageTypes.LEAD : subpath;
    }, [subpath])
    const [currentPage, setCurrentPage] = useState(frontPageTypes.LEAD);
    
    const frontPageInformation = useMemo(() => {
        console.log('currentPage', currentPage)
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