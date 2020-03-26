import React, { useState, useMemo, useCallback } from 'react';
import { TutorialPage, PageType, contentType } from './tutorial-data';
import { EquationDisplay } from '../EquationDisplay/equation-display';
import { HomeBackForwardBtns } from '../Buttons/home-back-forward-btn';
import EulerPortrait from '../.././assets/images/euler_portrait.gif';
import { EulerPage } from './euler-page';
import './tutorial-page.scss';
import { Redirect } from 'react-router';

export const TutorialFrontPage: React.FC = () => {
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
        } else {
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
                <div>
                    <h2 className='tutorial-page-title'>{currentPage && currentPage.title}</h2>
                    {currentPage && currentPage.subTitle && 
                        <h4> {currentPage.subTitle} </h4>
                    }
                    {currentPage.content[0].text}
                </div>
            )
        }
        if (!isSubPage && currentPage && currentPage.type === PageType.LIST) {
            const pageContent = currentPage.content;
            return (
                <div>
                    <h2 className='tutorial-page-title'>{currentPage && currentPage.title}</h2>
                    {currentPage && currentPage.subTitle && 
                        <h4> {currentPage.subTitle} </h4>
                    }
                    <ol>
                        {pageContent.map((content: contentType) => {
                            return (
                                <li className='tutorial-page-content'>
                                    <span className='tutorial-page-content-text'>
                                        {content.text}
                                        <span className='tutorial-page-subpage' onClick={handleSublinkClicked}>
                                            {content.subLink || null}
                                        </span>
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

    if (redirectToQuizPage) {
        return <Redirect to='/quiz' />
    }

    if (redirectToElementReviewPage) {
        return <Redirect to='/elementreview' />
    }

    return (
        <div>
            {currentContent}
            <div onClick={() => setToElementReviewPage(true)}> Quick Element Review</div>
            <HomeBackForwardBtns
                handlePreviousPageClicked={handlePreviousPageClicked}
                handleNextPageClicked={handleNextPageClicked}
            />
        </div>
    )
}