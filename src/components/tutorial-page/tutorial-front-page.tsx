import React, { useState, useMemo, useCallback } from 'react';
import { reviewPage, PageType, contentType } from './review-data';
import NextImage from '../.././assets/images/next.gif';
import HomeImage from '../.././assets/images/home.gif';
import PreviousImage from '../.././assets/images/back.gif';
import { EquationDisplay } from '../EquationDisplay/equation-display';
import EulerPortrait from '../.././assets/images/euler_portrait.gif';
import { EulerPage } from './euler-page';
import './review-page.scss';
import { Redirect } from 'react-router';

export const ReviewFrontPage: React.FC = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [isSubPage, setIsSubPage] = useState(false);
    const [redirectToQuizPage, setRedirectToQuizPage] = useState(false);

    const currentPage = useMemo(() => {
        return reviewPage[pageIndex];
    }, [pageIndex]);

    const handlePreviousPageClicked = useCallback(() => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1)
        }
        setIsSubPage(false);
        setRedirectToQuizPage(false);
    }, [pageIndex])

    const handleHomePageClicked = useCallback(() => {
        if (pageIndex < reviewPage.length - 1) {
            setPageIndex(pageIndex + 1)
        }
        setRedirectToQuizPage(false);
        setIsSubPage(false);
    }, [pageIndex])

    const handleNextPageClicked = useCallback(() => {
        if (pageIndex < reviewPage.length - 1) {
            setPageIndex(pageIndex + 1)
        } else {
            setRedirectToQuizPage(true);
        }
        setIsSubPage(false);
    }, [pageIndex])

    const handleSublinkClicked = useCallback(() => {
        setIsSubPage(true);
        console.log('handle sub clicked');
    }, [pageIndex])

    const currentContent = useMemo(() => {
        if (!isSubPage && currentPage && currentPage.type === PageType.PARAGRAPH) {
            return (
                <div>
                    <h2 className='review-page-title'>{currentPage && currentPage.title}</h2>
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
                    <h2 className='review-page-title'>{currentPage && currentPage.title}</h2>
                    {currentPage && currentPage.subTitle && 
                        <h4> {currentPage.subTitle} </h4>
                    }
                    <ol>
                        {pageContent.map((content: contentType) => {
                            return <li className='review-page-content'>
                                <span className='review-page-content-text'>
                                    {content.text}
                                    <span className='review-page-subpage' onClick={handleSublinkClicked}>
                                        {content.subLink || null}
                                    </span>
                                </span>
                                <span className='review-page-content-eqn'>
                                    {content.equation ? <EquationDisplay equationString={content.equation} /> : null}
                                </span>
                            </li>
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

    return (
        <div>
            {currentContent}
            <div className='review-page-buttons'>
                <div onClick={handleHomePageClicked}>
                    <img src={HomeImage} alt='points to next page'/>
                </div>
                <div onClick={handlePreviousPageClicked}>
                    <img src={PreviousImage} alt='points to next page'/>
                </div>
                <div onClick={handleNextPageClicked}>
                    <img src={NextImage} alt='points to next page'/>
                </div>
            </div>
        </div>
    )
}