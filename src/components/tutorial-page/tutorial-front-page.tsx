import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { TutorialPage, PageType, contentType } from './tutorial-data';
import { EquationDisplay } from '../EquationDisplay/equation-display';
import { HomeBackForwardBtns } from '../Buttons/home-back-forward-btn';
import EulerPortrait from '../.././assets/images/euler_portrait.gif';
import { EulerPage } from './euler-page';
import { Redirect } from 'react-router';
import Parser from 'html-react-parser';
import { pageLinkTypes, frontPageTypes } from '../front-page/front-page-data-type';
import './tutorial-page.scss';

type OwnProps = {
    directedFromQuiz: boolean;
}

export const TutorialFrontPage: React.FC<OwnProps> = ({ directedFromQuiz = false}) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [isSubPage, setIsSubPage] = useState(false);
    const [redirectToQuizPage, setRedirectToQuizPage] = useState(false);
    const [redirectToElementReviewPage, setToElementReviewPage] = useState(false);
    
    const currentPage = useMemo(() => {
        return TutorialPage[pageIndex];
    }, [pageIndex]);

    const handlePreviousPageClicked = useCallback(() => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1)
        }
        setIsSubPage(false);
        setRedirectToQuizPage(false);
    }, [pageIndex])

    const handleNextPageClicked = useCallback(() => {
        if (pageIndex < TutorialPage.length - 1) {
            setPageIndex(pageIndex + 1)
        } else if (directedFromQuiz) {
            setToElementReviewPage(true);
        }else {
            setRedirectToQuizPage(true);
        }
        setIsSubPage(false);
    }, [pageIndex])

    const handleSublinkClicked = useCallback(() => {
        setIsSubPage(true);
    }, [pageIndex])

    const currentContent = useMemo(() => {
        if (!isSubPage && currentPage && currentPage.type === PageType.PARAGRAPH) {
            return (
                <div className='tutorial-page-content'>
                    <h2 className='tutorial-page-content-title'>{currentPage && currentPage.title}</h2>
                    {currentPage && currentPage.subTitle && 
                        <h4 className='tutorial-page-content-subtitle'> {currentPage.subTitle} </h4>
                    }
                    {currentPage.content.map(contentObject => {
                        return (
                            <div className='tutorial-page-content-text'>
                                {Parser(contentObject.text)}
                            </div>
                        )
                    })}
                </div>
            )
        }
        if (!isSubPage && currentPage && currentPage.type === PageType.LIST) {
            const pageContent = currentPage.content;
            return (
                <div className='tutorial-page-content' >
                    <h2 className='tutorial-page-content-title'>{currentPage && currentPage.title}</h2>
                    {currentPage && currentPage.subTitle && 
                        <h4 className='tutorial-page-content-subtitle'> {currentPage.subTitle} </h4>
                    }
                    <ol>
                        {pageContent.map((content: contentType) => {
                            return (
                                <li className='tutorial-page-content-grid'>
                                    <span className='tutorial-page-content-text'>
                                        {Parser(content.text)}
                                        {content.subLink &&
                                            <span className='tutorial-page-content-subpage' onClick={handleSublinkClicked}>
                                                ({content.subLink})
                                            </span>
                                        }
                                    </span>
                                    <span className='tutorial-page-content-eqn'>
                                        {content.equation ? <EquationDisplay equationString={content.equation} /> : null}
                                    </span>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            )
        }
        if (isSubPage && currentPage && currentPage.subType && currentPage.subType === PageType.EULER_PAGE) {
            return (
                <div>
                    <div className='euler-page-title'>
                        <h2 className='euler-page-title-text'>Review of Euler's Identity</h2>
                        <img className='euler-page-title-image' src={EulerPortrait} alt='euler picture' />
                    </div> 
                    <EulerPage />
                </div>
            )
        }
    }, [pageIndex, currentPage, isSubPage])

    if (redirectToElementReviewPage) {
        return <Redirect to={pageLinkTypes.REVIEW} />
    } else if (redirectToQuizPage) { //End of tutorial prompts for quiz start
        return <Redirect to={{
            pathname: '/',
            state: frontPageTypes.QUIZ_START,
        }} />
    } else {
        return (
            <div className='tutorial-page'>
                {currentContent}
                <div onClick={() => setToElementReviewPage(true)}> Quick Element Review</div>
                <HomeBackForwardBtns
                    handlePreviousPageClicked={handlePreviousPageClicked}
                    handleNextPageClicked={handleNextPageClicked}
                />
            </div>
    )}
}